FitHub — Full-stack fitness platform (scaffold)

Overview
- FitHub: guided-exercises, coaching, and nutrition planning.
- Backend: Laravel REST API (recommended: Laravel 10+).
- Frontend: React (Vite or Create React App) single-page app.

Quick setup (Windows PowerShell)
1) Backend (Laravel):
   # Ensure Composer & PHP are installed
   cd c:\Users\Admin\OneDrive\Documents\Fithub\backend
   composer create-project --prefer-dist laravel/laravel .
   cp .env.example .env
   # configure DB in .env, then:
   php artisan key:generate
   php artisan migrate
   php artisan serve --host=127.0.0.1 --port=8000

2) Frontend (React using Vite recommended):
   cd c:\Users\Admin\OneDrive\Documents\Fithub\frontend
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
