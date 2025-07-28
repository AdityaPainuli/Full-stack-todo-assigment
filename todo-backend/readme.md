# 🚀 Nooro Task Tracker – Backend

A robust backend service for the Nooro Full-Stack Take-Home Test, built with modern technologies and best practices.

## 📋 Overview

This backend provides a RESTful API for task management, featuring full CRUD operations with a clean, scalable architecture.

## 🛠️ Tech Stack

- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js
- **Database**: MySQL with Prisma ORM
- **API Style**: RESTful architecture
- **Development**: Hot reload with nodemon

## 🏗️ Project Structure

```
nooro-task-backend/
├── src/
│   ├── routes/          # API route handlers
│   ├── controllers/     # Business logic
│   ├── models/          # Data models
│   └── middleware/      # Custom middleware
├── prisma/
│   ├── schema.prisma    # Database schema
│   └── migrations/      # Database migrations
└── package.json
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- MySQL (v8.0 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/nooro-task-backend.git
   cd nooro-task-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL="mysql://USER:PASSWORD@localhost:3306/nooro_db"
   PORT=4000
   NODE_ENV=development
   ```
   
   > **Note**: Replace `USER` and `PASSWORD` with your MySQL credentials

4. **Set up the database**
   ```bash
   # Create and apply migrations
   npx prisma migrate dev --name init
   
   # Generate Prisma client
   npx prisma generate
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

   🎉 Server will be running at: [http://localhost:4000](http://localhost:4000)

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | Retrieve all tasks |
| POST | `/api/tasks` | Create a new task |
| GET | `/api/tasks/:id` | Get task by ID |
| PUT | `/api/tasks/:id` | Update task by ID |
| DELETE | `/api/tasks/:id` | Delete task by ID |

## 🗄️ Database Schema

```prisma
model Task {
  id        Int      @id @default(autoincrement())
  title     String
  color     String   @default("blue")
  completed Boolean  @default(false)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server with hot reload
npm run build        # Build for production
npm run start        # Start production server

```

**Built with ❤️ for the Nooro Full-Stack Take-Home Test**
