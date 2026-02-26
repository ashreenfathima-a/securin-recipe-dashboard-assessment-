# Securin Recipe Dashboard Assessment

## 📌 Project Overview
This is a Full Stack Recipe Dashboard Application developed as part of the assessment.

Tech Stack Used:
- Frontend: React.js
- Backend: Node.js + Express
- Database: SQLite
- API Type: RESTful APIs

The application reads recipe data from a JSON file, stores it in a SQLite database, and exposes APIs that are consumed by a React-based UI dashboard.

---

## 🚀 Features Implemented

### Backend
- JSON parsing and database insertion
- SQLite database schema creation
- REST API to fetch recipes
- Search API with filtering
- Pagination support

### Frontend
- Clean Dashboard UI
- Recipe Table with:
  - Title (truncated if long)
  - Cuisine
  - Star Rating
  - Total Time
  - Serves
- Field-level filtering
- Pagination (customizable from 15–50)
- Row click opens Right Side Drawer
- Drawer contains:
  - Title & Cuisine
  - Description
  - Total Time (expandable to show prep & cook time)
  - Nutrition section displayed in structured table

---

## 🗄 Database Schema

CREATE TABLE recipes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    cuisine TEXT,
    rating REAL,
    prep_time INTEGER,
    cook_time INTEGER,
    total_time INTEGER,
    description TEXT,
    calories TEXT,
    carbohydrateContent TEXT,
    cholesterolContent TEXT,
    fiberContent TEXT,
    proteinContent TEXT,
    saturatedFatContent TEXT,
    sodiumContent TEXT,
    sugarContent TEXT,
    fatContent TEXT,
    serves TEXT
);

---

## 🧪 API Testing

### Get All Recipes

GET:
http://localhost:5000/api/recipes?page=1&limit=10

### Search Recipes

GET:
http://localhost:5000/api/recipes/search?title=pie&minRating=4

---

## ▶️ How To Run

### Backend
cd backend
npm install
node server.js

Runs on:
http://localhost:5000

### Frontend
cd frontend
npm install
npm start

Runs on:
http://localhost:3000

---

## 🏗 Architecture Flow

JSON File → SQLite Database → Express API → React UI

---

## 🎯 Outcome

This project demonstrates:

- Full-stack development capability
- Clean UI/UX implementation
- REST API design
- Database schema structuring
- Pagination & filtering logic
- Component-based architecture
