const express = require("express");
const path = require("path");
const adminController = require("../controllers/admin");

const router = express.Router();

router.get("/info", adminController.getInfo);

router.post("/add-info", adminController.addInfo);

module.exports = router;
