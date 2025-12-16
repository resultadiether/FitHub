@echo off
echo Starting FitHub Development Environment...
echo.

echo Starting Mock API Server...
start cmd /k "cd /d %~dp0mock-api && node server.js"

timeout /t 2 /nobreak > nul

echo Starting Frontend Dev Server...
start cmd /k "cd /d %~dp0frontend && npx vite"

echo.
echo Both servers are starting in separate windows.
echo Frontend: http://localhost:5173
echo Backend API: http://127.0.0.1:8000
echo.
pause