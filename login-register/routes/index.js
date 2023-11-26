const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Home Route
router.get("/", (req, res) => {
  res.render("home");
});

module.exports = router;
