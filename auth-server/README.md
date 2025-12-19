# FitHub Auth Server (Node.js + Express + Mongoose)

This is a simple auth server for FitHub that provides register and login endpoints compatible with the existing frontend.

## Features
- Register: POST /api/v1/auth/register (name, email, password)
- Login: POST /api/v1/auth/login (email, password)
- Returns JWT on success in shape: { user, token }
- Uses bcrypt for password hashing and Mongoose for MongoDB
- Includes a protected endpoint GET /api/v1/auth/me for testing tokens

## Setup
1. Install dependencies:

   npm install

2. Create a `.env` file (copy from `.env.example`) and set values.

3. Start the server:

   npm run dev

By default the server runs at http://127.0.0.1:5000

## Frontend integration
- Set your frontend VITE_API_URL to `http://127.0.0.1:5000/api/v1` so the existing login/register components will hit this server.
- The frontend expects JSON in this form and will store the `token` to localStorage.

## Test (manual)
- Register using the existing Register page (name, email, password, password_confirmation). The server will return `{ user, token }` on success.
- Login using the existing Login page; it will store the token from `{ token }` and redirect to `/`.
- Optional: Verify token with `GET /api/v1/auth/me` (set Authorization header: `Bearer <token>`).

## Notes & Security
- Use a strong JWT_SECRET in production.
- Consider enabling HTTPS and rate-limiting in production.

This is for an academic project, so clarity, clean code, and explanations are required.
