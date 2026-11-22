# Student Authentication Portal — User-managed data

Registration/login with bcrypt password hashing and JWT authentication. After login, users can add/edit profile details, add/delete their own courses, and add/delete their academic records. Data is stored in MongoDB in the authenticated user's document.

## Run
1. Install Node.js and MongoDB Community Server.
2. Copy `.env.example` to `.env`; set a strong JWT secret.
3. `npm install`
4. Start MongoDB service.
5. `npm run dev`
6. Open http://localhost:5000

## MongoDB
Database: `student_auth_portal`
Collection: `users`
Profile, courses, and records are saved per user.

## Endpoints
- POST `/api/auth/register`
- POST `/api/auth/login`
- GET/PUT `/api/student/profile` (JWT)
- GET/POST/DELETE `/api/student/courses` (JWT)
- GET/POST/DELETE `/api/student/records` (JWT)
- GET `/api/student/admin` (JWT + admin role)

Protected API requests require `Authorization: Bearer <token>`. Passwords are bcrypt hashes and are never returned.
