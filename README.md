# 🍽 Securin Recipe Dashboard Assessment

## 📌 Project Overview

This is a Full Stack Recipe Dashboard Application developed as part of the assessment.

The application reads recipe data from a JSON file, stores it into a SQLite database, and exposes RESTful APIs which are consumed by a React-based UI dashboard.

The focus of this implementation was:

- Clean UI/UX Design
- Structured API development
- Database schema design
- Pagination & filtering logic
- Expandable detailed view

---

## 🛠 Tech Stack

### Frontend
- React.js
- Material UI
- Axios

### Backend
- Node.js
- Express.js
- SQLite3

### Database
- SQLite

---

## 🏗 Architecture Flow

JSON File  
⬇  
SQLite Database  
⬇  
Express REST APIs  
⬇  
React Dashboard UI  

---

# 🔹 Backend Implementation

### ✔ JSON Parsing
- Recipes are read from `recipes.json`
- Data is inserted into SQLite database

### ✔ REST APIs

#### 1️⃣ Get All Recipes
```
GET /api/recipes?page=1&limit=25
```

#### 2️⃣ Search Recipes
```
GET /api/recipes/search?title=pie&cuisine=Southern&minRating=4
```

### ✔ Features Implemented
- Pagination support
- Field-level filtering
- Search functionality
- Structured SQL schema

---

# 🗄 Database Schema

| Column Name           | Type      | Description |
|-----------------------|----------|-------------|
| id                    | INTEGER  | Primary Key (Auto Increment) |
| title                 | TEXT     | Recipe Title |
| cuisine               | TEXT     | Cuisine Category |
| rating                | REAL     | Recipe Rating |
| prep_time             | INTEGER  | Preparation Time |
| cook_time             | INTEGER  | Cooking Time |
| total_time            | INTEGER  | Total Time |
| description           | TEXT     | Recipe Description |
| calories              | TEXT     | Calories Info |
| carbohydrateContent   | TEXT     | Carbohydrates |
| cholesterolContent    | TEXT     | Cholesterol |
| fiberContent          | TEXT     | Fiber |
| proteinContent        | TEXT     | Protein |
| saturatedFatContent   | TEXT     | Saturated Fat |
| sodiumContent         | TEXT     | Sodium |
| sugarContent          | TEXT     | Sugar |
| fatContent            | TEXT     | Total Fat |
| serves                | TEXT     | Number of Servings |

---

# 🎨 Frontend (UI/UX) Features

## Dashboard Layout
- App bar with title
- Clean modern UI
- Responsive layout

## Recipe Table
- Title (truncated if overflow)
- Cuisine
- Rating (Star format)
- Total Time
- Serves

## Filtering
- Title filter
- Cuisine filter
- Minimum Rating
- Maximum Total Time

## Pagination
- Customizable results per page (15–50)
- Previous / Next navigation

## Detailed View (Right Drawer)
When clicking a row:

Displays:

- Title & Cuisine (header)
- Description
- Total Time (Expandable)
- Prep Time
- Cook Time
- Nutrition Section (Table format)

### Nutrition Table Includes:
- Calories
- Carbohydrate Content
- Cholesterol Content
- Fiber Content
- Protein Content
- Saturated Fat Content
- Sodium Content
- Sugar Content
- Fat Content

---

# 🧪 API Testing Instructions

## Run Backend

```
cd backend
npm install
node server.js
```

Runs on:
```
http://localhost:5000
```

---

## Run Frontend

```
cd frontend
npm install
npm start
```

Runs on:
```
http://localhost:3000
```

---

## Example API Call

```
http://localhost:5000/api/recipes?page=1&limit=10
```

---

# 📂 Project Structure

```
recipeapp/
│
├── backend/
│   ├── server.js
│   ├── database.js
│   ├── recipes.json
│   └── recipes.db
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── RecipeTable.js
│   │   │   ├── RecipeDrawer.js
│   │   │   └── Filters.js
│   │   ├── App.js
│   │   └── App.css
│
└── README.md
```

---

# 🎯 Key Highlights

- Full-stack implementation
- Clean UI/UX focused design
- RESTful API architecture
- SQL schema structuring
- Pagination & filtering logic
- Component-based frontend architecture
- Expandable detail view with nutrition breakdown

---

# ✅ Conclusion

This project demonstrates my ability to:

- Design structured APIs
- Build clean and responsive UI
- Implement pagination & filtering
- Manage full-stack architecture
- Convert requirements into working application

