const express = require("express");
const app = express(); //instance of express created
const port = 9000;

app.get("/", (req, res) => {
  res.send("Hello with Express.js");
});

app.listen(port, () => {
  console.log(`started listening on port ${port}`);
});
