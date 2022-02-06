const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express(); //instance of express created
const port = 9000;

app.use(bodyParser.urlencoded({ extended: false }));

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

//chaining methods to a single route
app
  .route("/users")
  .get(function (req, res) {
    // res.send("Getting the user you asked for....");
    res.sendFile(path.join(__dirname, "form.html"));
  })
  .post(function (req, res) {
    console.log(req.body);
    res.send("Adding another user");
  })
  .put(function (req, res) {
    res.send("Updating the user");
  });

app.get("/redirect", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`started listening on port ${port}`);
});
