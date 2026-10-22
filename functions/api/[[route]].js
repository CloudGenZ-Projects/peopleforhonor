import { Hono } from 'hono';
import { handle } from 'hono/cloudflare-pages';

const app = new Hono().basePath('/api');

// ─── CORS middleware ───
app.use('*', async (c, next) => {
  c.header('Access-Control-Allow-Origin', '*');
  c.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  c.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  if (c.req.method === 'OPTIONS') return c.text('', 204);
  await next();
});

// ─── JWT helpers (Web Crypto only) ───
function base64url(buf) {
  const bytes = buf instanceof Uint8Array ? buf : new Uint8Array(buf);
  let binary = '';
  for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
  return btoa(binary).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}

function base64urlDecode(str) {
  str = str.replace(/-/g, '+').replace(/_/g, '/');
  while (str.length % 4) str += '=';
  const binary = atob(str);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

async function getSigningKey(secret) {
  const enc = new TextEncoder();
  return crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign', 'verify']);
}

async function signJWT(payload, secret) {
  const enc = new TextEncoder();
  const header = base64url(enc.encode(JSON.stringify({ alg: 'HS256', typ: 'JWT' })));
  const now = Math.floor(Date.now() / 1000);
  const claims = { ...payload, iat: now, exp: now + 86400 };
  const body = base64url(enc.encode(JSON.stringify(claims)));
  const data = enc.encode(`${header}.${body}`);
  const key = await getSigningKey(secret);
  const sig = await crypto.subtle.sign('HMAC', key, data);
  return `${header}.${body}.${base64url(sig)}`;
}

async function verifyJWT(token, secret) {
  try {
    const enc = new TextEncoder();
    const parts = token.split('.');
    if (parts.length !== 3) return null;
    const key = await getSigningKey(secret);
    const data = enc.encode(`${parts[0]}.${parts[1]}`);
    const sig = base64urlDecode(parts[2]);
    const valid = await crypto.subtle.verify('HMAC', key, sig, data);
    if (!valid) return null;
    const payload = JSON.parse(new TextDecoder().decode(base64urlDecode(parts[1])));
    if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) return null;
    return payload;
  } catch {
    return null;
  }
}

// ─── PBKDF2 helper ───
async function hashPassword(password, salt) {
  const enc = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey('raw', enc.encode(password), { name: 'PBKDF2' }, false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits({ name: 'PBKDF2', salt: enc.encode(salt), iterations: 100000, hash: 'SHA-256' }, keyMaterial, 256);
  return Array.from(new Uint8Array(bits)).map(b => b.toString(16).padStart(2, '0')).join('');
}

// ─── Auth middleware ───
async function requireAuth(c, next) {
  const authHeader = c.req.header('Authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return c.json({ success: false, message: 'Unauthorized' }, 401);
  }
  const token = authHeader.substring(7);
  const payload = await verifyJWT(token, c.env.JWT_SECRET);
  if (!payload) {
    return c.json({ success: false, message: 'Invalid or expired token' }, 401);
  }
  c.set('user', payload);
  await next();
}

// ═══════════════════════════════════════════════════
// CONTACT ENDPOINTS
// ═══════════════════════════════════════════════════

// POST /api/contact/submit
app.post('/contact/submit', async (c) => {
  try {
    const body = await c.req.json();
    const { first_name, last_name, email, phone, service, message } = body;

    if (!first_name || !last_name || !email || !message) {
      return c.json({ success: false, message: 'Please provide first_name, last_name, a valid email, and message.' }, 400);
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return c.json({ success: false, message: 'Please provide first_name, last_name, a valid email, and message.' }, 400);
    }

    await c.env.DB.prepare(
      'INSERT INTO contact_messages (first_name, last_name, email, phone, service, message) VALUES (?, ?, ?, ?, ?, ?)'
    ).bind(first_name, last_name, email, phone || null, service || null, message).run();

    return c.json({ success: true, message: 'Your message has been received. We will get back to you shortly.' }, 201);
  } catch (err) {
    return c.json({ success: false, message: 'Server error: ' + err.message }, 500);
  }
});

// ═══════════════════════════════════════════════════
// EVENT ENDPOINTS (match PHP response format exactly)
// ═══════════════════════════════════════════════════

// GET /api/events/read — active events only (public)
app.get('/events/read', async (c) => {
  try {
    const { results } = await c.env.DB.prepare(
      "SELECT * FROM events WHERE status = 'active' ORDER BY event_date ASC"
    ).all();

    const data = results.map(r => ({
      id: r.id,
      title: r.title,
      date: r.event_date,
      time: r.event_time,
      location: r.location,
      description: r.description,
      href: r.link,
      status: r.status,
      cta1_label: r.cta1_label,
      cta1_url: r.cta1_url,
      cta2_label: r.cta2_label,
      cta2_url: r.cta2_url
    }));

    return c.json({ success: true, data });
  } catch (err) {
    return c.json({ success: false, message: 'Server error: ' + err.message }, 500);
  }
});

// GET /api/events/read.php — alias for frontend compat (some pages call with .php)
app.get('/events/read.php', async (c) => {
  const url = new URL(c.req.url);
  url.pathname = url.pathname.replace('/read.php', '/read');
  return c.redirect(url.pathname + url.search, 301);
});

// GET /api/events/read_all — all events for admin panel
app.get('/events/read_all', async (c) => {
  try {
    const { results } = await c.env.DB.prepare(
      'SELECT * FROM events ORDER BY event_date DESC'
    ).all();

    const data = results.map(r => ({
      id: r.id,
      title: r.title,
      date: r.event_date,
      event_date: r.event_date,
      time: r.event_time,
      event_time: r.event_time,
      location: r.location,
      description: r.description,
      link: r.link,
      status: r.status,
      cta1_label: r.cta1_label,
      cta1_url: r.cta1_url,
      cta2_label: r.cta2_label,
      cta2_url: r.cta2_url
    }));

    return c.json({ success: true, data });
  } catch (err) {
    return c.json({ success: false, message: 'Server error: ' + err.message }, 500);
  }
});

// GET /api/events/read_single?id=
app.get('/events/read_single', async (c) => {
  try {
    const id = c.req.query('id');
    if (!id) return c.json({ success: false, message: 'No event ID provided' }, 400);

    const event = await c.env.DB.prepare('SELECT * FROM events WHERE id = ?').bind(id).first();
    if (!event) return c.json({ success: false, message: 'Event not found' }, 404);

    return c.json({
      success: true,
      data: {
        id: event.id,
        title: event.title,
        event_date: event.event_date,
        event_time: event.event_time,
        location: event.location,
        description: event.description,
        link: event.link,
        status: event.status,
        cta1_label: event.cta1_label,
        cta1_url: event.cta1_url,
        cta2_label: event.cta2_label,
        cta2_url: event.cta2_url,
        created_at: event.created_at,
        updated_at: event.updated_at
      }
    });
  } catch (err) {
    return c.json({ success: false, message: 'Server error: ' + err.message }, 500);
  }
});

// GET /api/events/read_by_slug?slug=
app.get('/events/read_by_slug', async (c) => {
  try {
    let slug = c.req.query('slug');
    if (!slug) return c.json({ success: false, message: 'Slug parameter is required' }, 400);

    // Normalize: ensure starts with /
    if (!slug.startsWith('/')) slug = '/' + slug;

    const event = await c.env.DB.prepare(
      "SELECT * FROM events WHERE link = ? AND status = 'active' LIMIT 1"
    ).bind(slug).first();

    if (!event) return c.json({ success: false, message: 'Event not found' }, 404);

    return c.json({
      success: true,
      data: {
        id: event.id,
        title: event.title,
        date: event.event_date,
        time: event.event_time,
        location: event.location,
        description: event.description,
        href: event.link,
        status: event.status,
        cta1_label: event.cta1_label,
        cta1_url: event.cta1_url,
        cta2_label: event.cta2_label,
        cta2_url: event.cta2_url
      }
    });
  } catch (err) {
    return c.json({ success: false, message: 'Server error: ' + err.message }, 500);
  }
});

// POST /api/events/create (auth required)
app.post('/events/create', requireAuth, async (c) => {
  try {
    const body = await c.req.json();
    const { title, event_date } = body;
    if (!title || !event_date) {
      return c.json({ success: false, message: 'Unable to create event. Title and date are required.' }, 400);
    }

    const result = await c.env.DB.prepare(
      `INSERT INTO events (title, event_date, event_time, location, description, link, status, cta1_label, cta1_url, cta2_label, cta2_url)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    ).bind(
      title, event_date,
      body.event_time || null, body.location || null, body.description || null,
      body.link || null, body.status || 'active',
      body.cta1_label || null, body.cta1_url || null,
      body.cta2_label || null, body.cta2_url || null
    ).run();

    return c.json({ success: true, message: 'Event was created successfully.', id: result.meta.last_row_id }, 201);
  } catch (err) {
    return c.json({ success: false, message: 'Unable to create event.' }, 503);
  }
});

// PUT /api/events/update (auth required)
app.put('/events/update', requireAuth, async (c) => {
  try {
    const body = await c.req.json();
    if (!body.id || !body.title || !body.event_date) {
      return c.json({ success: false, message: 'Unable to update event. ID, title and date are required.' }, 400);
    }

    await c.env.DB.prepare(
      `UPDATE events SET title=?, event_date=?, event_time=?, location=?, description=?, link=?, status=?,
       cta1_label=?, cta1_url=?, cta2_label=?, cta2_url=?, updated_at=datetime('now') WHERE id=?`
    ).bind(
      body.title, body.event_date,
      body.event_time || null, body.location || null, body.description || null,
      body.link || null, body.status || 'active',
      body.cta1_label || null, body.cta1_url || null,
      body.cta2_label || null, body.cta2_url || null,
      body.id
    ).run();

    return c.json({ success: true, message: 'Event was updated successfully.' });
  } catch (err) {
    return c.json({ success: false, message: 'Unable to update event.' }, 503);
  }
});

// DELETE /api/events/delete (auth required)
app.delete('/events/delete', requireAuth, async (c) => {
  try {
    const body = await c.req.json();
    if (!body.id) return c.json({ success: false, message: 'Unable to delete event. ID is required.' }, 400);

    const existing = await c.env.DB.prepare('SELECT id FROM events WHERE id = ?').bind(body.id).first();
    if (!existing) return c.json({ success: false, message: 'Event not found.' }, 404);

    await c.env.DB.prepare('DELETE FROM events WHERE id = ?').bind(body.id).run();
    return c.json({ success: true, message: 'Event was deleted successfully.' });
  } catch (err) {
    return c.json({ success: false, message: 'Unable to delete event.' }, 503);
  }
});

// ═══════════════════════════════════════════════════
// JOIN / NEWSLETTER ENDPOINTS
// ═══════════════════════════════════════════════════

// POST /api/join/submit
app.post('/join/submit', async (c) => {
  try {
    const body = await c.req.json();
    const { email } = body;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return c.json({ success: false, message: 'Please provide a valid email address.' }, 400);
    }

    const full_name = body.name || body.full_name || null;
    const interests = body.interests || null;

    await c.env.DB.prepare(
      'INSERT INTO join_submissions (email, full_name, interests) VALUES (?, ?, ?)'
    ).bind(email, full_name, interests).run();

    return c.json({ success: true, message: "Thank you for joining us! We'll be in touch soon." }, 201);
  } catch (err) {
    return c.json({ success: false, message: 'Unable to process your submission. Please try again.' }, 503);
  }
});

// ═══════════════════════════════════════════════════
// ADMIN AUTH ENDPOINTS
// ═══════════════════════════════════════════════════

// POST /api/admin/login
app.post('/admin/login', async (c) => {
  try {
    const body = await c.req.json();
    const { username, password } = body;
    if (!username || !password) {
      return c.json({ success: false, message: 'Username and password are required.' }, 400);
    }

    const user = await c.env.DB.prepare('SELECT * FROM admins WHERE username = ?').bind(username).first();
    if (!user) return c.json({ success: false, message: 'Invalid username or password' }, 401);

    const hashed = await hashPassword(password, user.salt);
    if (hashed !== user.password_hash) {
      return c.json({ success: false, message: 'Invalid username or password' }, 401);
    }

    const token = await signJWT({ sub: user.id, username: user.username, role: 'admin' }, c.env.JWT_SECRET);
    return c.json({ success: true, token, username: user.username });
  } catch (err) {
    return c.json({ success: false, message: 'Server error: ' + err.message }, 500);
  }
});

// GET /api/admin/check_auth
app.get('/admin/check_auth', requireAuth, async (c) => {
  const user = c.get('user');
  return c.json({ success: true, user: { id: user.sub, username: user.username, role: user.role } });
});

// POST /api/admin/logout
app.post('/admin/logout', async (c) => {
  return c.json({ success: true, message: 'Logged out successfully.' });
});

// ─── Compatibility: .php suffix redirects ───
app.all('/contact/submit.php', (c) => c.redirect('/api/contact/submit', 307));
app.all('/join/submit.php', (c) => c.redirect('/api/join/submit', 307));
app.all('/events/read_all.php', (c) => c.redirect('/api/events/read_all', 301));
app.all('/events/read_single.php', (c) => {
  const id = c.req.query('id');
  return c.redirect(`/api/events/read_single?id=${id}`, 301);
});
app.all('/events/read_by_slug.php', (c) => {
  const slug = c.req.query('slug');
  return c.redirect(`/api/events/read_by_slug?slug=${encodeURIComponent(slug)}`, 301);
});
app.all('/events/create.php', (c) => c.redirect('/api/events/create', 307));
app.all('/events/update.php', (c) => c.redirect('/api/events/update', 307));
app.all('/events/delete.php', (c) => c.redirect('/api/events/delete', 307));
app.all('/admin/login.php', (c) => c.redirect('/api/admin/login', 307));
app.all('/admin/check_auth.php', (c) => c.redirect('/api/admin/check_auth', 301));

// ─── CF Pages Functions export ───
export const onRequest = handle(app);
