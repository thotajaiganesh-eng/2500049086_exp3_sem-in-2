# 🎓 Student Authentication Portal

A secure web-based Student Authentication Portal developed using **Node.js, Express.js, MongoDB, and JWT**. The application allows students to register, log in, manage their personal information, add courses, and store academic records securely in MongoDB.

## 🚀 Features

- **User Registration** – Create a new student account using name, email, and password.
- **User Login** – Authenticate users using registered credentials.
- **Password Hashing** – Securely store passwords using bcrypt.
- **JWT Authentication** – Generate JSON Web Tokens after successful login.
- **Protected Routes** – Restrict access to authenticated users.
- **Token Verification** – Verify JWT validity and expiration.
- **User Authorization** – Implement role-based access control.
- **Personal Profile Management** – Add and update student details.
- **Course Management** – Add and delete personal course information.
- **Academic Records** – Store semester, GPA, status, and notes.
- **MongoDB Database** – Persist user information and academic data.
- **Responsive Interface** – Simple and user-friendly dashboard.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Webpage structure |
| CSS3 | Styling and responsive design |
| JavaScript | Frontend functionality |
| Node.js | Backend runtime environment |
| Express.js | REST API development |
| MongoDB | Database |
| Mongoose | MongoDB object modeling |
| bcryptjs | Password hashing |
| JSON Web Token (JWT) | Authentication |
| dotenv | Environment configuration |

## 📂 Project Structure

```text
student-auth-portal/
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── app.js
│
├── src/
│   ├── models/
│   │   └── User.js
│   │
│   ├── middleware/
│   │   └── auth.js
│   │
│   └── routes/
│       ├── auth.js
│       └── student.js
│
├── .env.example
├── .gitignore
├── package.json
├── server.js
└── README.md
```

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/student-auth-portal-custom.git
```

### 2. Navigate to the Project Directory

```bash
cd student-auth-portal-custom
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory.

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/student_auth_portal
JWT_SECRET=your_secure_secret_key
JWT_EXPIRES_IN=1h
```

### 5. Start MongoDB

Ensure MongoDB Server is running locally.

MongoDB connection:

```text
mongodb://127.0.0.1:27017
```

### 6. Run the Application

Development mode:

```bash
npm run dev
```

Normal mode:

```bash
npm start
```

### 7. Open in Browser

```text
http://localhost:5000
```

## 🔐 Authentication Workflow

1. The user registers by providing name, email, and password.
2. The backend validates the submitted information.
3. The password is hashed using bcrypt.
4. User information is stored in MongoDB.
5. During login, the entered password is compared with the stored password hash.
6. A JWT is generated after successful authentication.
7. The JWT is sent with requests to protected routes.
8. Authentication middleware verifies the token.
9. Authorized users can access their profile, courses, and academic records.

## 📡 API Endpoints

### Authentication

| Method | Endpoint |
