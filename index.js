const express = require("express");
const app = express();

const Port = process.env.Port || 5000;

app.get("/", (req, res) => {
  res.send("server is running");
});

app.listen(Port, () => {
  console.log("server running on port", Port);
});
