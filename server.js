const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// DB CONNECTION
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "shubham@2884#",
  database: "reclaim_furniture"
});

// API
app.post("/book", (req, res) => {
  const { name, phone, email, address, area, service_type, details } = req.body;

  const sql = "INSERT INTO bookings (name, phone, email, address, area, service_type, details) VALUES (?, ?, ?, ?, ?, ?, ?)";

  db.query(sql, [name, phone, email, address, area, service_type, details], (err, result) => {
    if (err) {
      res.status(500).send("Error saving data");
    } else {
      res.send("Booking successful");
    }
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});