const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

//custom imports
const userRoutes = require("./routes/users");

const app = express(); //instance of express created
const port = 9000;

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(userRoutes);

app.use((req, res, next) => {
  console.log("in the middleware here");
  next(); //allows to continue to the next middleware inline
});

app.use("/", (req, res, next) => {
  console.log("this always runs");
  //   res.send("hi");
  next(); //using this after sending any will result in error
});

app.get("/", (req, res) => {
  res.send("Hello with Express.js");
});

app.get("/redirect", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`started listening on port ${port}`);
});
