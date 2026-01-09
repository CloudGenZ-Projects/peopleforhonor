# People for Honor Backend API

A lightweight PHP + MySQL backend for powering Events, Join Us, and Contact forms.

## Prerequisites
- PHP 8.1+ (CLI) with PDO MySQL extension
- MySQL 8+ (or MariaDB 10.4+)
- Windows PowerShell or any terminal

## Quick Start (Local)
1) Configure database credentials via environment file (recommended)
- Create `api/.env` in this folder with:
```
DB_HOST=localhost
DB_NAME=peopleforhonor
DB_USER=root
DB_PASS=your-local-password-or-empty
```
The file is read by `bootstrap_env.php` and used in `config/database.php`.

2) Initialize the database (creates DB + tables and seeds sample events):
```bash
# From this api/ folder
php setup.php
```

3) Start the PHP dev server (doc root is this folder):
```bash
php -S localhost:8000
```

4) Test the API:
- Events (public): http://localhost:8000/api/events/read.php
- Join Us (submit): http://localhost:8000/api/join/submit.php
- Contact (submit): http://localhost:8000/api/contact/submit.php
- Admin Panel (events UI): http://localhost:8000/admin/

## What setup.php does
- Creates the database `peopleforhonor`
- Creates the `events` table
- Seeds sample events if the table is empty
- Creates the `join_submissions` table (Join Us form)
- Creates the `contact_messages` table (Contact form)
- Safe to re-run any time

## API Endpoints

### Events (Public + Admin)
- GET `/api/events/read.php`
  - Returns active, upcoming events only (for the website)

- POST `/api/events/create.php`
  - Create a new event (admin)

- PUT `/api/events/update.php`
  - Update an existing event (admin)

- DELETE `/api/events/delete.php`
  - Delete an event (admin)

- GET `/api/events/read_all.php`
  - List all events including inactive (admin panel)

- GET `/api/events/read_single.php?id={id}`
  - Get one event by id (admin panel edit form)

- GET `/api/events/read_by_slug.php?slug={slug}`
  - Get one event by URL slug (event detail pages)
  - Example: `/api/events/read_by_slug.php?slug=/african-caribbean-cultural-dance-exchange`

Event JSON shape (read.php):
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "African Caribbean Cultural Dance Exchange",
      "date": "2025-09-06",
      "time": "1:00 PM - 4:00 PM",
      "location": "33 Quill Street, Ottawa",
      "description": "...",
      "href": "/african-caribbean-cultural-dance-exchange",
      "status": "active"
    }
  ]
}
```

### Join Us (Form Submissions)
- POST `/api/join/submit.php`
  - Body:
    ```json
    {
      "email": "user@example.com",
      "name": "Optional Name",
      "interests": "Optional message"
    }
    ```
  - Response:
    ```json
    { "success": true, "message": "Thank you for joining us! We'll be in touch soon." }
    ```

Database table: `join_submissions`
- id (auto-increment)
- email (required)
- full_name (optional)
- interests (optional)
- created_at (timestamp)

### Contact (Form Submissions)
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

Database table: `contact_messages`
- id (auto-increment)
- first_name (required)
- last_name (required)
- email (required)
- phone (optional)
- service (optional)
- message (required)
- created_at (timestamp)

## Admin Panel (Events)
- URL: `http://localhost:8000/admin/`
- Features:
  - Add, edit, delete events
  - Toggle status (active/inactive)
  - See all events
- Uses the admin endpoints: `read_all.php`, `read_single.php`, `create.php`, `update.php`, `delete.php`

## Frontend Integration
- `honor-forge-webapp/src/components/UpcomingEvents.jsx`
  - Fetches from `${VITE_API_BASE_URL}/api/events/read.php`
- `honor-forge-webapp/src/pages/JoinUs.jsx`
  - Submits to `${VITE_API_BASE_URL}/api/join/submit.php`
- `honor-forge-webapp/src/components/Contact.jsx`
  - Submits to `${VITE_API_BASE_URL}/api/contact/submit.php`

For production, set `VITE_API_BASE_URL` in the frontend and configure `api/.env` (or real env vars) on the server.

## cURL Quick Tests
```bash
# Get public events
curl http://localhost:8000/api/events/read.php

# Create an event (admin)
curl -X POST http://localhost:8000/api/events/create.php \
  -H "Content-Type: application/json" \
  -d '{"title":"New Event","event_date":"2025-12-31","location":"Ottawa"}'

# Update an event (admin)
curl -X PUT http://localhost:8000/api/events/update.php \
  -H "Content-Type: application/json" \
  -d '{"id":1,"title":"Updated Event","event_date":"2025-12-31"}'

# Delete an event (admin)
curl -X DELETE http://localhost:8000/api/events/delete.php \
  -H "Content-Type: application/json" \
  -d '{"id":1}'

# Submit Join Us form
curl -X POST http://localhost:8000/api/join/submit.php \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","name":"Test User","interests":"Volunteer"}'

# Submit Contact form
curl -X POST http://localhost:8000/api/contact/submit.php \
  -H "Content-Type: application/json" \
  -d '{"first_name":"Jane","last_name":"Doe","email":"jane@example.com","service":"general","message":"Hello!"}'
```