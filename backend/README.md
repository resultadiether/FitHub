Backend (Laravel) — FitHub

This folder contains stubs and guidance to build the Laravel API for FitHub.

Recommended Laravel setup (in this folder):
1) Install via Composer:
   composer create-project --prefer-dist laravel/laravel .
2) Copy stubs from `backend/stubs` into the Laravel app:
   - `Models/Exercise.php` -> `app/Models/Exercise.php`
   - `stubs/migrations_create_exercises.php` -> `database/migrations/xxxx_xx_xx_create_exercises_table.php`
   - `stubs/ExerciseController.php` -> `app/Http/Controllers/Api/ExerciseController.php`
   - `stubs/routes_api.php` -> merge into `routes/api.php`
3) Configure `.env` for your DB and run `php artisan migrate`.

API contract (examples)
- GET  /api/exercises         -> list exercises
- GET  /api/exercises/{id}    -> get exercise detail
- POST /api/plans             -> create training plan
- POST /api/auth/register     -> register user
- POST /api/auth/login        -> login (returns token)

Authentication: Recommended using Laravel Sanctum for SPA/mobile token auth.

Stubs are minimal; adapt them to your app structure and naming conventions.
