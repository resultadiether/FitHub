# FitHub MySQL Auth Server

Simple Node/Express REST auth server using MySQL and bcrypt.

## Features
- POST /api/auth/register — register user (fullName, email, password, confirmPassword)
- POST /api/auth/login — login user (email, password)
- Returns JSON responses with clear messages and JWT token for frontend compatibility

## Quick start
1. Ensure MySQL is running and create the database:

```sql
-- run this in your MySQL client
SOURCE schema.sql;
```

2. Start server:

```bash
cd auth-mysql
npm install
cp .env.example .env
# edit .env and set MYSQL_PASSWORD if needed
npm run dev
```

Server listens on `http://127.0.0.1:5000` and endpoints are under `/api`.

## Frontend integration
- Set `VITE_API_URL` to `http://localhost:5000/api` so your frontend calls `http://localhost:5000/api/auth/register` and `http://localhost:5000/api/auth/login`.
- The frontend expects `token` in the JSON response; this server returns a JWT token on success.

## SQL schema
See `schema.sql` which creates database `fit_hub` and table `users` with unique email.

## Notes
- Passwords hashed with bcrypt. Configure `BCRYPT_ROUNDS` in `.env`.
- Use a secure `JWT_SECRET` in production.

This is for an academic project, so clarity, clean code, and explanations are required.
