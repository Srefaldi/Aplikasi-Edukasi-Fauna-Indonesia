const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const mysql = require('mysql2');

// Set up middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true
}));
app.set('view engine', 'ejs');

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'aplikasi_edukasi_fauna_indonesia'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
  } else {
    console.log('Connected to database');
  }
});

// Routes
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
    db.query(query, [email, password], (err, results) => {
      if (err) throw err;
  
      if (results.length > 0) {
        req.session.user = results[0];
        res.redirect('/');
      } else {
        res.redirect('/login?error=1');
      }
    });
  });

app.get('/register', (req, res) => {
  res.render('register');
});

app.post('/register', (req, res) => {
  // Handle registration logic here
  const { email, password, name } = req.body;
  const query = 'INSERT INTO user (email, password, name) VALUES (?, ?, ?)';
  db.query(query, [email, password, name], (err, results) => {
    if (err) throw err;

    // User registered, redirect to login page
    res.redirect('/login');
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
