const mysql = require("mysql");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const port = 8000;

const con = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "portfolio",
});

con.connect(function (err) {
  if (err) {
    console.log("Error in connection");
  } else {
    console.log("Connected");
  }
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
