const express = require("express");
const myyql = require("mysql2");
const app = express();

app.use(express.json());

const con = myyql.createConnection({
  host: "localhost",
  user: "root",
  password: null,
  database: "nodejs-mysql-post",
});

con.connect((error) => {
  if (error) {
    console.error;
  } else {
    console.log("connected! to the database!!");
  }
});

app.post("/post", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const mark = req.body.mark;

  con.query(
    "insert into myTable values(?,?,?)",
    [id, name, mark],
    (error, result) => {
      if (error) {
        console.error;
      } else {
        res.status(200).json("Posted");
      }
    }
  );
});

app.listen(3000, (error) => {
  if (error) {
    console.error;
  } else {
    console.log("Listen Up!!!");
  }
});
