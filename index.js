const express = require("express");
const app = express();

const Port = process.env.Port || 5000;

const courses = require("./data/fakeData.json");

app.get("/", (req, res) => {
  res.send("server is running");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/courses/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const courseDetails = courses.find((course) => course.id === id);
  console.log(courseDetails);
  res.send(courseDetails);
});

app.listen(Port, () => {
  console.log("server running on port", Port);
});
