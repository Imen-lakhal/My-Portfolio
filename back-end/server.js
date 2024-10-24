const mysql = require("mysql");
const express = require("express");
const cors = require("cors");
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());

const port = 8000;

const con = mysql.createConnection({
  user: process.env.DB_USER,           
  host: "localhost",
  password: process.env.DB_PASSWORD,   
  database: process.env.DB_NAME,       
});

con.connect((err) => {
  if (err) {
    console.error("Error in connection:", err.code); // Affiche le code d'erreur
    console.error("Error message:", err.message);    // Affiche le message d'erreur
    return;
  }
  console.log("Connected to MySQL database.");
});


app.get("/", (req, res) => {
  res.send("Hello !");
});

app.post("/create", (req, res) => {
  const sql =
    "INSERT INTO contact (`name`,`mail`,`subject`,`message`) VALUES (?)";
  const values = [
    req.body.name,
    req.body.mail,
    req.body.subject,
    req.body.message,
  ];
  con.query(sql, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(port, () => {
  console.log(`Exemple app on port ${port}`);
});
