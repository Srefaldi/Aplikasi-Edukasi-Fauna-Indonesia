const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Login Route
router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", authController.loginUser);

// Register Route
router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/register", authController.registerUser);

module.exports = router;
