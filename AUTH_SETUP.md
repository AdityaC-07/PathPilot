# Authentication Setup Guide

## Overview
Basic authentication has been implemented using:
- **Backend**: SQLite with bcrypt password hashing + JWT tokens
- **Frontend**: React components with localStorage for session management

## Backend Changes

### New Files Created:
1. **`backend/app/services/db_service.py`**
   - SQLite database operations
   - User creation and verification
   - Password hashing with bcrypt

2. **`backend/app/services/auth_service.py`**
   - JWT token generation and verification
   - Token expiration: 24 hours

### Modified Files:
1. **`backend/app/models.py`**
   - Added `SignUpRequest`, `SignInRequest`, `AuthResponse`, `UserResponse`

2. **`backend/app/main.py`**
   - Added `/auth/signup` endpoint
   - Added `/auth/signin` endpoint
   - Added `/auth/me` endpoint (get current user)
   - Protected `/generate` endpoint with authentication

3. **`backend/requirements.txt`**
   - Added: `bcrypt`, `pyjwt`, `email-validator`

## Frontend Changes

### New Files Created:
1. **`frontend/components/AuthForm.tsx`**
   - Combined sign-up and sign-in form
   - Toggles between modes

2. **`frontend/app/auth/page.tsx`**
   - Authentication page route

### Modified Files:
1. **`frontend/lib/api.ts`**
   - Added `signUp()`, `signIn()`, `getCurrentUser()` functions
   - Updated `generateRoadmap()` to include auth token

2. **`frontend/components/Navbar.tsx`**
   - Shows user name when logged in
   - Logout button
   - Sign In button when not authenticated

3. **`frontend/components/CareerForm.tsx`**
   - Added optional "skills" text input field

4. **`frontend/app/generate/page.tsx`**
   - Now requires authentication
   - Redirects to `/auth` if not logged in

5. **`frontend/app/results/page.tsx`**
   - Calls actual API instead of mock data
   - Passes auth token with request

## Installation & Setup

### Backend:
```powershell
cd backend
pip install -r requirements.txt
```

The database (`users.db`) will be created automatically on first startup.

### Frontend:
No new dependencies needed (using existing axios).

## Security Notes

⚠️ **IMPORTANT**: Before production:
1. Change `SECRET_KEY` in `backend/app/services/auth_service.py` to a strong random value
2. Move it to environment variable:
   ```python
   SECRET_KEY = os.getenv("JWT_SECRET_KEY")
   ```
3. Consider using HTTPS only
4. Add rate limiting to auth endpoints
5. Add password strength requirements

## Database Schema

```sql
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    full_name TEXT NOT NULL,
    created_at TEXT NOT NULL,
    last_login TEXT
)
```

## API Endpoints

### Public Endpoints:
- `POST /auth/signup` - Create new user account
- `POST /auth/signin` - Sign in with email/password
- `GET /health` - Health check

### Protected Endpoints (require `Authorization: Bearer <token>` header):
- `GET /auth/me` - Get current user info
- `POST /generate` - Generate career roadmap

## Testing

1. Start backend:
```powershell
cd backend
uvicorn app.main:app --reload
```

2. Start frontend:
```powershell
cd frontend
npm run dev
```

3. Navigate to `http://localhost:3000/auth`
4. Create an account
5. Try generating a roadmap

## Flow:
1. User visits `/auth` → signs up or signs in
2. Token + user data stored in localStorage
3. User redirected to `/generate`
4. User fills form → submits
5. Results page calls API with token
6. API validates token → generates roadmap
7. Results displayed

## Migration to Production DB

To switch from SQLite to MySQL/PostgreSQL later:
1. Install database driver (e.g., `psycopg2` for PostgreSQL)
2. Update connection string in `db_service.py`
3. Most of the code stays the same (raw SQL is portable)
