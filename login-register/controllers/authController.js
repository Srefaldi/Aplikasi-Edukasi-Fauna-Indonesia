const db = require("../config/db");

exports.registerUser = (req, res) => {
  const { email, password, name } = req.body;
  const query = "INSERT INTO user (email, password, name) VALUES (?, ?, ?)";
  db.query(query, [email, password, name], (err, results) => {
    if (err) {
      if (err.code === "ER_DUP_ENTRY") {
        req.session.message = "Registration failed, Email already registered";
      }
      res.redirect("/register");
    } else {
      req.session.message = "Registration success";
      res.redirect("/register");
    }
  });
};

exports.loginUser = (req, res) => {
  const { email, password } = req.body;
  const query = "SELECT * FROM user WHERE email = ? AND password = ?";
  db.query(query, [email, password], (err, results) => {
    if (err) throw err;

    if (results.length > 0) {
      req.session.user = results[0];
      req.session.message = "Login success";
      res.redirect("/");
    } else {
      req.session.message = "Login failed, incorrect email or password";
      res.redirect("/login?error=1");
    }
  });
};
