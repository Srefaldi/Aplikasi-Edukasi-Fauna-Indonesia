const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
const db = require("./config/db");
const indexRoutes = require("./routes/index");
const authRoutes = require("./routes/authRoute");

// Set up middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: true,
  })
);
app.set("view engine", "ejs");

// Middleware untuk menyimpan pesan di sesi
app.use((req, res, next) => {
  res.locals.message = req.session.message || ""; // Menambahkan default value ""
  delete req.session.message;
  next();
});

// Use Routes
app.use("/", indexRoutes);
app.use("/", authRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
