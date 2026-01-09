# People for Honor — Frontend + PHP API 

This repository contains both the React frontend (Vite) and a PHP + MySQL backend API in a single folder structure.

Key goals:
- Single command to run frontend and backend locally
- Clear environment variable setup for dev and prod
- One script to initialize the database (events + join submissions + contact messages)

---

## Project Structure

```
 honor-forge-webapp/
 ├─ api/                      # PHP API root (served as doc root in dev)
 │  ├─ api/                   # REST endpoints
 │  │  ├─ events/             # Events CRUD endpoints
 │  │  ├─ join/               # Join Us submit endpoint
 │  │  └─ contact/            # Contact form submit endpoint
 │  ├─ admin/                 # Simple admin UI for managing events
 │  ├─ config/                # DB config (env-driven)
 │  ├─ database/              # SQL/schema files (reference)
 │  ├─ models/                # PHP models (Event, ContactMessage)
 │  ├─ setup.php              # Creates DB + tables, seeds sample events
 │  ├─ bootstrap_env.php      # Lightweight .env loader for API
 │  └─ .env                   # API secrets (NOT committed; see .gitignore)
 ├─ src/                      # React app source
 ├─ .env.development          # Vite env for local dev (frontend)
 ├─ .env.production           # Vite env for production build (frontend)
 ├─ package.json              # Dev scripts to run both servers together
 └─ vite.config.js
```

---

## Prerequisites
- Node.js 18+ and npm
- PHP 8.1+ (CLI) with PDO MySQL extension
- MySQL 8+ (or MariaDB 10.4+)

On Windows, you can use PowerShell and XAMPP/WAMP or a standalone MySQL.

---

## Quick Start (Local Development)

1) Install frontend dependencies
```bash
cd honor-forge-webapp
npm install
```

2) Configure environment variables
- Frontend (Vite): `honor-forge-webapp/.env.development`
```bash
VITE_API_BASE_URL=http://localhost:8000
```
- Backend (PHP API): `honor-forge-webapp/api/.env`
```bash
DB_HOST=localhost
DB_NAME=peopleforhonor
DB_USER=root
DB_PASS=your-local-password-or-empty
```
These values are loaded by `api/bootstrap_env.php` and used in `api/config/database.php`.

3) Initialize the database (creates DB + tables)
```bash
npm run db:setup
```
This runs `php api/setup.php` which:
- Creates database `peopleforhonor` (if missing)
- Creates tables `events`, `join_submissions`, and `contact_messages`
- Seeds sample events only if `events` is empty

4) Start frontend + backend together
```bash
npm run dev
```
This runs Vite and the PHP dev server concurrently:
- Frontend: http://localhost:8080
- PHP API: http://localhost:8000

---

## Frontend Details
- Framework: React + Vite + Tailwind
- API base URL comes from `import.meta.env.VITE_API_BASE_URL`
  - `src/components/UpcomingEvents.jsx` fetches events from `${VITE_API_BASE_URL}/api/events/read.php`
  - `src/pages/JoinUs.jsx` posts to `${VITE_API_BASE_URL}/api/join/submit.php`
  - `src/components/Contact.jsx` posts to `${VITE_API_BASE_URL}/api/contact/submit.php`
- Configure per environment via `.env.development` and `.env.production`

Build for production:
```bash
npm run build
```
Outputs to `dist/`. Deploy `dist/` to your static host or web server.

---

## Backend (PHP API) Details
- Location: `honor-forge-webapp/api/`
- Served in dev with: `php -S localhost:8000 -t api`
- Database config reads environment variables defined in `api/.env`:
  - `DB_HOST`, `DB_NAME`, `DB_USER`, `DB_PASS`

Database setup script:
```bash
php api/setup.php
```
Creates all tables and seeds sample events if empty.

### API Endpoints
- Events (public + admin)
  - GET `/api/events/read.php` — Active, upcoming events (used by website)
  - POST `/api/events/create.php` — Create event (admin)
  - PUT `/api/events/update.php` — Update event (admin)
  - DELETE `/api/events/delete.php` — Delete event (admin)
  - GET `/api/events/read_all.php` — All events including inactive (admin panel)
  - GET `/api/events/read_single.php?id={id}` — Single event (admin panel edit)
  - GET `/api/events/read_by_slug.php?slug={slug}` — Single event by URL slug (event detail pages)

- Join Us (public form)
  - POST `/api/join/submit.php`
  - Body:
    ```json
    { "email": "user@example.com", "name": "Optional", "interests": "Optional" }
    ```
  - Response:
    ```json
    { "success": true, "message": "Thank you for joining us! We'll be in touch soon." }
    ```

- Contact (public form)
  - POST `/api/contact/submit.php`
  - Body:
    ```json
    {
      "first_name": "Jane",
      "last_name": "Doe",
      "email": "jane@example.com",
      "phone": "optional",
      "service": "general|empowerment|mentorship|coaching|community",
      "message": "How can you help me with..."
    }
    ```
  - Response:
    ```json
    { "success": true, "message": "Your message has been received. We will get back to you shortly." }
    ```

### Admin Panel
- URL: `http://localhost:8000/admin/`
- Features: Add, edit, delete events; set status active/inactive
- Uses the admin endpoints listed above

---

## Environment Variables

Frontend (Vite):
- `.env.development`
```bash
VITE_API_BASE_URL=http://localhost:8000
```
- `.env.production`
```bash
# Replace with your production API base URL
VITE_API_BASE_URL=https://api.yourdomain.com
```

Backend (PHP API): `api/.env` (NOT committed)
```bash
DB_HOST=localhost
DB_NAME=peopleforhonor
DB_USER=root
DB_PASS=your-password
```
These are loaded automatically by `api/bootstrap_env.php`.

---

## Common Scripts
- `npm run dev` — Start frontend (Vite) + backend (PHP) together
- `npm run dev:frontend` — Start Vite only
- `npm run dev:api` — Start PHP only (serving `api/`)
- `npm run db:setup` — Initialize DB (create tables and seed)
- `npm run build` — Build frontend for production

---

## Deployment

### Backend (PHP API)
- Deploy the `honor-forge-webapp/api/` folder to a PHP 8+ host (Apache/Nginx)
- Set environment variables (preferred) or place a secure `api/.env` with DB creds
- Ensure the web server serves the API under `/` or `/api` path as configured
- Run once on the server to create tables:
```bash
php setup.php
```
- Restrict error display in production; write errors to logs only

### Frontend (React)
- Set `VITE_API_BASE_URL` in `.env.production` to your backend’s public URL
- Build and deploy the `dist/` folder to your static host/CDN