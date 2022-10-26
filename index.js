const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const Port = process.env.Port || 5000;

const courses = require("./data/fakeData.json");

app.get("/", (req, res) => {
  res.send("server is running");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/courses/:name", (req, res) => {
  const name = req.params.name;
  const courseDetailsByName = courses.find((course) => course.title === name);
  res.send(courseDetailsByName);
});
app.get("/courseDetails/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const courseDetails = courses.find((course) => course.id === id);
  res.send(courseDetails);
});

app.listen(Port, () => {
  console.log("server running on port", Port);
});
