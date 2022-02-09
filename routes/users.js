const express = require("express");
const path = require("path");

const rootDir = require("../helpers/path");

const router = express.Router();

router.use((req, res) => console.log("hi"));
//chaining methods to a single route
router
  .route("/users")
  .get(function (req, res) {
    // res.send("Getting the user you asked for....");
    // res.redirect("/form.html"); OR
    res.sendFile(path.join(rootDir, "views", "form.html"));
  })
  .post(function (req, res) {
    // console.log(req.body);
    res.send("Adding another user");
  })
  .put(function (req, res) {
    res.send("Updating the user");
  });

// cannot chain /show-all to above request
router.get("/users/show-all", function (req, res) {
  // res.send("Getting the user you asked for....");
  // res.redirect("/form.html"); OR
  res.send("ji");
});

module.exports = router;
