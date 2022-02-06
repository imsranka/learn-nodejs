const express = require("express");
const path = require("path");

const router = express.Router();

//chaining methods to a single route
router
  .route("/users")
  .get(function (req, res) {
    // res.send("Getting the user you asked for....");
    // res.redirect("/form.html"); OR
    res.sendFile(path.join(__dirname, "../public/form.html"));
  })
  .post(function (req, res) {
    console.log(req.body);
    res.send("Adding another user");
  })
  .put(function (req, res) {
    res.send("Updating the user");
  });

module.exports = router;
