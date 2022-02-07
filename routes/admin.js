const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/info", (req, res) => {
  res.send("Fetching info");
});

router.post("/add-info", (req, res) => {
  res.send("Added the data");
});

module.exports = router;
