const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

let username = "";


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});


app.post("/submit", (req, res) => {
  username = req.body.name;
  res.redirect("/hello");
});


app.get("/hello", (req, res) => {
  res.send(`<h1>Hello, ${username}!</h1><a href="/">Go Back</a>`);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});