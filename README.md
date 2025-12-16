# LogiTrack Lite 🚚

**LogiTrack Lite** is a modern, full-stack logistics management system designed to streamline shipment tracking and fleet management. Built with the robust MERN stack (MongoDB, Express, React, Node.js) and containerized with Docker, it offers a seamless experience for administrators, drivers, and customers.

## 🚀 Features

- **📦 Shipment Management**: Comprehensive CRUD operations for managing shipments.
- **🔍 Public Tracking**: Real-time shipment tracking for customers using unique tracking numbers.
- **🔐 Role-Based Authentication**: Secure JWT-based access control for Admins and Drivers.
- **🚛 Driver Portal**: Dedicated interface for drivers to view and update their assigned shipments.
- **🎨 Modern UI**: Responsive and intuitive dashboard built with React and Tailwind CSS.
- **🐳 Dockerized**: Fully containerized backend for consistent deployment environments.

## 🛠️ Tech Stack

### Frontend (`logitrack-lite`)
- **Framework**: React (Vite)
- **Styling**: Tailwind CSS, clsx, tailwind-merge
- **State Management**: Zustand
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **HTTP Client**: Axios
- **Forms**: React Hook Form

### Backend (`logitrack-backend`)
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose)
- **Authentication**: JWT (JSON Web Tokens) & Cookies
- **Security**: Helmet, CORS, Bcryptjs
- **Documentation**: Swagger UI
- **Containerization**: Docker & Docker Compose

## 📂 Project Structure

```bash
logitrack/
├── logitrack-backend/   # Node.js & Express API
└── logitrack-lite/      # React Frontend
```

## 🏁 Getting Started

Follow these instructions to set up the project locally.

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Docker](https://www.docker.com/) & Docker Compose
- [MongoDB](https://www.mongodb.com/) (if running locally without Docker)

### 1. Backend Setup

The backend is configured to run easily with Docker.

```bash
cd logitrack-backend

# Create environment file (or use the example)
cp .env.example .env

# Start the backend services
docker-compose up --build
```
*The API will be available at `http://localhost:5000`.*

### 2. Frontend Setup

```bash
cd logitrack-lite

# Install dependencies
npm install

# Start the development server
npm run dev
```
*The application will be available at `http://localhost:5173`.*

## 🔑 Default Credentials

When using the seeded database:

| Role | Email | Password |
|------|-------|----------|
| **Admin** | `admin@logitrack.com` | `password123` |
| **Driver** | `abebe@logitrack.com` | `password123` |

## 📄 License

This project is licensed under the ISC License.
