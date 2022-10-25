const express = require("express");
const app = express();

const Port = process.env.Port || 5000;

const course = require("./data/fakeData.json");

app.get("/", (req, res) => {
  res.send("server is running");
});

app.get("/courses", (req, res) => {
  res.send(course);
});

app.listen(Port, () => {
  console.log("server running on port", Port);
});
