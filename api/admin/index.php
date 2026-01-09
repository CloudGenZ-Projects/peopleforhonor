<?php
// Protect this page with authentication
require_once 'check_auth.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Admin - People for Honor</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        .header-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
        }
        h1 {
            color: white;
            margin: 0;
        }
        .user-info {
            color: white;
            display: flex;
            align-items: center;
            gap: 15px;
        }
        .logout-btn {
            background: rgba(255, 255, 255, 0.2);
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.3);
            padding: 8px 20px;
            border-radius: 5px;
            text-decoration: none;
            font-size: 14px;
            transition: all 0.3s;
        }
        .logout-btn:hover {
            background: rgba(255, 255, 255, 0.3);
        }
        .card {
            background: white;
            border-radius: 10px;
            padding: 25px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.1);
            margin-bottom: 20px;
        }
        .form-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin-bottom: 15px;
        }
        .form-group {
            display: flex;
            flex-direction: column;
        }
        .form-group.full-width {
            grid-column: 1 / -1;
        }
        label {
            font-weight: 600;
            margin-bottom: 5px;
            color: #333;
        }
        input, textarea, select {
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 14px;
            font-family: inherit;
        }
        textarea {
            resize: vertical;
            min-height: 80px;
        }
        button {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            padding: 12px 30px;
            border-radius: 5px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: transform 0.2s;
        }
        button:hover {
            transform: translateY(-2px);
        }
        button.delete {
            background: #dc3545;
        }
        button.edit {
            background: #28a745;
            margin-right: 10px;
        }
        .events-list {
            margin-top: 30px;
        }
        .event-item {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 10px;
            display: flex;
            justify-content: space-between;
            align-items: start;
        }
        .event-info h3 {
            color: #333;
            margin-bottom: 5px;
        }
        .event-meta {
            color: #666;
            font-size: 14px;
        }
        .event-actions {
            display: flex;
            gap: 10px;
        }
        .status-badge {
            display: inline-block;
            padding: 3px 8px;
            border-radius: 3px;
            font-size: 12px;
            margin-left: 10px;
        }
        .status-active {
            background: #d4edda;
            color: #155724;
        }
        .status-inactive {
            background: #f8d7da;
            color: #721c24;
        }
        .message {
            padding: 10px;
            border-radius: 5px;
            margin-bottom: 15px;
        }
        .success {
            background: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }
        .error {
            background: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
        }
        @media (max-width: 768px) {
            .form-grid {
                grid-template-columns: 1fr;
            }
            .event-item {
                flex-direction: column;
            }
            .event-actions {
                margin-top: 10px;
            }
            .header-bar {
                flex-direction: column;
                gap: 15px;
            }

            /* Add this inside your <style> tag */
.cta-preview {
    display: inline-block;
    background: #e9ecef;
    color: #495057;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 12px;
    margin-right: 5px;
    border: 1px solid #dee2e6;
    text-decoration: none;
}
.cta-preview:hover {
    background: #dee2e6;
    text-decoration: underline;
}
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header-bar">
            <h1>📅 Event Management Admin</h1>
            <div class="user-info">
                <span>👤 <?php echo htmlspecialchars($_SESSION['admin_username']); ?></span>
                <a href="logout.php" class="logout-btn">🚪 Logout</a>
            </div>
        </div>
        
        <div class="card">
            <h2 id="form-title">Add New Event</h2>
            <div id="message"></div>
            <form id="event-form">
                <input type="hidden" id="event-id">
                <div class="form-grid">
                    <div class="form-group">
                        <label for="title">Event Title *</label>
                        <input type="text" id="title" required>
                    </div>
                    <div class="form-group">
                        <label for="event_date">Event Date *</label>
                        <input type="date" id="event_date" required>
                    </div>
                    <div class="form-group">
                        <label for="event_time">Time</label>
                        <input type="text" id="event_time" placeholder="e.g., 2:00 PM - 4:00 PM">
                    </div>
                    <div class="form-group">
                        <label for="location">Location</label>
                        <input type="text" id="location" placeholder="e.g., Ottawa Community Center">
                    </div>
                    <div class="form-group full-width">
                        <label for="description">Description</label>
                        <textarea id="description"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="link">Internal Link (optional)</label>
                        <input type="text" id="link" placeholder="e.g., /event-details">
                    </div>
                    <div class="form-group">
                        <label for="status">Status</label>
                        <select id="status">
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>
                   <div class="form-group">
    <label for="cta1_label">Primary Button Text (optional)</label>
    <input type="text" id="cta1_label" placeholder="e.g., Register to Attend">
</div>
<div class="form-group">
    <label for="cta1_url">Primary Button Link (optional)</label>
    <input type="text" id="cta1_url" placeholder="https://...">
</div>
<div class="form-group">
    <label for="cta2_label">Secondary Button Text (optional)</label>
    <input type="text" id="cta2_label" placeholder="e.g., Register to Pitch">
</div>
<div class="form-group">
    <label for="cta2_url">Secondary Button Link (optional)</label>
    <input type="text" id="cta2_url" placeholder="https://...">
</div>
                </div>
                <button type="submit" id="submit-btn">Add Event</button>
                <button type="button" id="cancel-btn" style="display:none; margin-left: 10px; background: #6c757d;">Cancel</button>
            </form>
        </div>

        <div class="card events-list">
            <h2>All Events</h2>
            <div id="events-container">
                <p>Loading events...</p>
            </div>
        </div>
    </div>

    <script>
        const API_BASE = '../events';
        let editingId = null;

        // Load events on page load
        document.addEventListener('DOMContentLoaded', loadEvents);

        // Form submission
        document.getElementById('event-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            
          const eventData = {
  title: document.getElementById('title').value,
  event_date: document.getElementById('event_date').value,
  event_time: document.getElementById('event_time').value || null,
  location: document.getElementById('location').value || null,
  description: document.getElementById('description').value || null,
  link: document.getElementById('link').value || null, // keep if you still want it
  cta1_label: document.getElementById('cta1_label').value || null,
  cta1_url: document.getElementById('cta1_url').value || null,
  cta2_label: document.getElementById('cta2_label').value || null,
  cta2_url: document.getElementById('cta2_url').value || null,
  status: document.getElementById('status').value,
};

            try {
                let url = `${API_BASE}/create.php`;
                let method = 'POST';
                
                if (editingId) {
                    url = `${API_BASE}/update.php`;
                    method = 'PUT';
                    eventData.id = editingId;
                }

                const response = await fetch(url, {
                    method: method,
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(eventData)
                });

                const result = await response.json();
                
                if (result.success) {
                    showMessage('Event saved successfully!', 'success');
                    document.getElementById('event-form').reset();
                    cancelEdit();
                    loadEvents();
                } else {
                    showMessage(result.message || 'Failed to save event', 'error');
                }
            } catch (error) {
                showMessage('Error: ' + error.message, 'error');
            }
        });

        // Cancel edit
        document.getElementById('cancel-btn').addEventListener('click', cancelEdit);

        function cancelEdit() {
            editingId = null;
            document.getElementById('event-form').reset();
            document.getElementById('form-title').textContent = 'Add New Event';
            document.getElementById('submit-btn').textContent = 'Add Event';
            document.getElementById('cancel-btn').style.display = 'none';
        }

        // Load all events
        async function loadEvents() {
            try {
                const response = await fetch(`${API_BASE}/read_all.php`);
                const data = await response.json();
                
                const container = document.getElementById('events-container');
                
                if (!data.data || data.data.length === 0) {
                    container.innerHTML = '<p>No events found. Add your first event above!</p>';
                    return;
                }

                container.innerHTML = data.data.map(event => `
                    <div class="event-item">
                        <div class="event-info">
                            <h3>
                                ${event.title}
                                <span class="status-badge status-${event.status}">${event.status}</span>
                            </h3>
                            <div class="event-meta">
                                📅 ${formatDate(event.date)} 
                                ${event.time ? `⏰ ${event.time}` : ''} 
                                ${event.location ? `📍 ${event.location}` : ''}
                            </div>
                            ${event.description ? `<p style="margin-top: 5px;">${event.description}</p>` : ''}
                        </div>
                        <div class="event-actions">
                            <button class="edit" onclick="editEvent(${event.id})">Edit</button>
                            <button class="delete" onclick="deleteEvent(${event.id})">Delete</button>
                        </div>
                    </div>
                `).join('');
            } catch (error) {
                document.getElementById('events-container').innerHTML = 
                    '<p style="color: red;">Failed to load events. Make sure the backend is running.</p>';
            }
        }

        // Edit event
        async function editEvent(id) {
            try {
                const response = await fetch(`${API_BASE}/read_single.php?id=${id}`);
                const data = await response.json();
                
                if (data.success && data.data) {
                    const event = data.data;
                    editingId = id;
                    
                    document.getElementById('title').value = event.title;
                    document.getElementById('event_date').value = event.event_date;
                    document.getElementById('event_time').value = event.event_time || '';
                    document.getElementById('location').value = event.location || '';
                    document.getElementById('description').value = event.description || '';
                    document.getElementById('link').value = event.link || '';
                    document.getElementById('status').value = event.status;
                    document.getElementById('cta1_label').value = event.cta1_label || '';
                    document.getElementById('cta1_url').value = event.cta1_url || '';
                    document.getElementById('cta2_label').value = event.cta2_label || '';
                    document.getElementById('cta2_url').value = event.cta2_url || '';
                    
                    document.getElementById('form-title').textContent = 'Edit Event';
                    document.getElementById('submit-btn').textContent = 'Update Event';
                    document.getElementById('cancel-btn').style.display = 'inline-block';
                    
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            } catch (error) {
                showMessage('Failed to load event details', 'error');
            }
        }

        // Delete event
        async function deleteEvent(id) {
            if (!confirm('Are you sure you want to delete this event?')) return;

            try {
                const response = await fetch(`${API_BASE}/delete.php`, {
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ id: id })
                });

                const result = await response.json();
                
                if (result.success) {
                    showMessage('Event deleted successfully!', 'success');
                    loadEvents();
                } else {
                    showMessage(result.message || 'Failed to delete event', 'error');
                }
            } catch (error) {
                showMessage('Error: ' + error.message, 'error');
            }
        }

        // Show message
        function showMessage(text, type) {
            const messageDiv = document.getElementById('message');
            messageDiv.textContent = text;
            messageDiv.className = `message ${type}`;
            setTimeout(() => {
                messageDiv.textContent = '';
                messageDiv.className = '';
            }, 5000);
        }

        // Format date
        function formatDate(dateString) {
            const date = new Date(dateString);
            return date.toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric', 
                year: 'numeric' 
            });
        }
    </script>
</body>
</html>
