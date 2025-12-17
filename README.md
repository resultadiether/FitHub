FitHub — Full-stack fitness platform (scaffold)

Overview
- FitHub: guided-exercises, coaching, and nutrition planning.
- Backend: Laravel REST API (recommended: Laravel 10+).
- Frontend: React (Vite or Create React App) single-page app.

🚀 Quick Start (Fast Development Setup)
1. **Double-click `start-dev.bat`** - This will automatically start both servers
2. Open http://localhost:5173 in your browser
3. The app loads instantly with mock API data!

⚡ Why it's fast:
- Uses Node.js mock API server instead of Laravel during development
- No database setup required
- Frontend loads in seconds, not minutes

Full Setup (Production/Laravel Backend)
1) Backend (Laravel):
   # Ensure Composer & PHP are installed
   cd laravel-temp
   composer install
   cp .env.example .env
   # configure DB in .env, then:
   php artisan key:generate
   php artisan migrate
   php artisan serve --host=127.0.0.1 --port=8000

2) Frontend (React using Vite recommended):
   cd frontend
   # using npm:
   npm install
   npm run dev

What I added in this repo
- `backend/stubs` — controllers, models, and migration stubs you can drop into a Laravel app.
- `frontend` — a minimal React app skeleton (components + API helper).
- Setup instructions for dev and recommended endpoints.

Next steps
- Run the Laravel create-project command above.
- Copy `backend/stubs/*` into the created Laravel application (`app/Models`, `app/Http/Controllers`, `database/migrations`).
- Update routes in `routes/api.php` per the stubbed API contract.
- Start frontend and connect to backend at `http://127.0.0.1:8000/api`.

Contact
- If you'd like, I can: create an automated Docker Compose, generate real Laravel files inside the `backend` folder (and run migrations), or wire the frontend to working mock data.
