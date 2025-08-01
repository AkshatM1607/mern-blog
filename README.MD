# 📝 MERN Stack Blogging Platform

A full-featured blogging platform built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js) with JWT authentication, blog creation, editing, and deletion functionality. This project is hosted live and fully mobile responsive.

---

## 🌐 Live Demo

- 🔗 Frontend: [https://mern-blog-sigma-liart.vercel.app](https://mern-blog-sigma-liart.vercel.app)
- 🔗 Backend: [https://mern-blog-backend-m0x4.onrender.com](https://mern-blog-backend-m0x4.onrender.com)

---

## 📌 Features

- 🔐 **User Authentication** (Register/Login using JWT + bcrypt)
- 🧠 **Token-based Protected Routes**
- ✍️ **Create, Edit, Delete Blog Posts**
- 📚 **View All Posts on Home Page**
- 🧑‍💻 **Each Post Includes Author & Timestamp**
- 🎨 **Responsive Bootstrap 5 UI**
- ☁️ **Fully Deployed: Vercel (frontend) + Render (backend)**

---

## ⚙️ Tech Stack

| Part       | Tech                  |
|------------|------------------------|
| Frontend   | React.js, Bootstrap, Axios, React-Router, Toastify |
| Backend    | Node.js, Express.js, MongoDB, Mongoose, JWT, bcrypt |
| Database   | MongoDB Atlas |
| Hosting    | Vercel (frontend), Render (backend) |

---

## 📁 Folder Structure

mern-blog/
├── frontend/ # React app
│ └── src/pages/
│ ├── Home.js
│ ├── Login.js
│ ├── Register.js
│ └── Dashboard.js
├── backend/ # Express server
│ ├── routes/
│ ├── models/
│ └── server.js

---

## 🚀 How to Run Locally

### 1. Clone the Repo

```bash
git clone https://github.com/AkshatM1607/mern-blog
cd mern-blog
cd backend
npm install


Create .env file:

MONGO_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret

Start backend:
npm start

Frontend Setup

cd ../frontend
npm install
npm start

---


📄 License
This project is open-source and free to use.










