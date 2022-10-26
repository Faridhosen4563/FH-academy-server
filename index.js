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

app.get("/courses/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id);
  const courseDetailsById = courses.find((course) => course.id === id);
  res.send(courseDetailsById);
});
app.get("/courseDetails/:name", (req, res) => {
  const name = req.params.name;
  console.log(name);
  const courseDetails = courses.find((course) => course.title === name);
  console.log(courseDetails);
  res.send(courseDetails);
});

app.listen(Port, () => {
  console.log("server running on port", Port);
});
