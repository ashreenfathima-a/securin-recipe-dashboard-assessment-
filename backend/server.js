const express = require("express");
const cors = require("cors");
const fs = require("fs");
const db = require("./database");

const app = express();
app.use(cors());
app.use(express.json());


db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS recipes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      cuisine TEXT,
      title TEXT,
      rating REAL,
      prep_time INTEGER,
      cook_time INTEGER,
      total_time INTEGER,
      description TEXT,
      nutrients TEXT,
      ingredients TEXT,
      serves TEXT,
      image TEXT
    )
  `);
});

function cleanNumber(value) {
  if (!value || value === "NaN" || isNaN(value)) {
    return null;
  }
  return Number(value);
}

function loadJSON() {
  db.get("SELECT COUNT(*) AS count FROM recipes", (err, row) => {
    if (err) {
      console.error("Error checking count:", err);
      return;
    }

    if (row && row.count > 0) {
      console.log("Data already exists. Skipping JSON load.");
      return;
    }

    const rawData = fs.readFileSync("./recipes.json");
    const recipes = JSON.parse(rawData);

    recipes.forEach((recipe) => {
      db.run(
        `
        INSERT INTO recipes (
          cuisine,
          title,
          rating,
          prep_time,
          cook_time,
          total_time,
          description,
          nutrients,
          ingredients,
          serves,
          image
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `,
        [
          recipe.cuisine,
          recipe.title,
          cleanNumber(recipe.rating),
          cleanNumber(recipe.prep_time),
          cleanNumber(recipe.cook_time),
          cleanNumber(recipe.total_time),
          recipe.description,
          JSON.stringify(recipe.nutrients || {}),
          JSON.stringify(recipe.ingredients || []),
          recipe.serves,
          recipe.image || ""
        ]
      );
    });

    console.log("JSON data inserted into database.");
  });
}

loadJSON();

app.get("/api/recipes", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 15;
  const offset = (page - 1) * limit;

  db.all(
    `
    SELECT * FROM recipes
    ORDER BY rating DESC
    LIMIT ? OFFSET ?
    `,
    [limit, offset],
    (err, rows) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      db.get("SELECT COUNT(*) AS total FROM recipes", (err2, countRow) => {
        if (err2) {
          return res.status(500).json({ error: err2.message });
        }

        res.json({
          page,
          limit,
          total: countRow.total,
          data: rows.map((row) => ({
            ...row,
            nutrients: JSON.parse(row.nutrients || "{}"),
            ingredients: JSON.parse(row.ingredients || "[]"),
          })),
        });
      });
    }
  );
});

app.get("/api/recipes/search", (req, res) => {
  let query = "SELECT * FROM recipes WHERE 1=1";
  let params = [];

  if (req.query.title) {
    query += " AND title LIKE ?";
    params.push(`%${req.query.title}%`);
  }

  if (req.query.cuisine) {
    query += " AND cuisine LIKE ?";
    params.push(`%${req.query.cuisine}%`);
  }

  if (req.query.rating) {
    query += " AND rating >= ?";
    params.push(Number(req.query.rating));
  }

  if (req.query.total_time) {
    query += " AND total_time <= ?";
    params.push(Number(req.query.total_time));
  }

  db.all(query, params, (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json({
      total: rows.length,
      data: rows.map((row) => ({
        ...row,
        nutrients: JSON.parse(row.nutrients || "{}"),
        ingredients: JSON.parse(row.ingredients || "[]"),
      })),
    });
  });
});


app.get("/", (req, res) => {
  res.send("Recipe API Running Successfully ");
});


const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});