const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

//custom imports
const userRoutes = require("./routes/users");
const adminRoutes = require("./routes/admin");

const app = express(); //instance of express created
const port = 9000;

app.use(express.static(path.join(__dirname, "views")));
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
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

// wrong route handling
// always write at the end
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(port, () => {
  console.log(`started listening on port ${port}`);
});
