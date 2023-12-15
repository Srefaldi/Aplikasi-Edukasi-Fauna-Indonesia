import express from "express";
import QuizModel from "../models/QuizModel.js";
import { getUsers, Register, Login, Logout } from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { AddFauna, deleteFaunaById, editFaunaById, getAllfauna, getFaunaById } from "../controllers/FaunaContents.js";
import { addQuiz, deleteQuizById, editQuizById, getAllQuizzes, getQuizById } from "../controllers/QuizController.js";
import { addReview, deleteReviewById, getAllReviews, getReviewById, updateReviewById } from "../controllers/Reviewer.js";
import { getAllLeaderboard, editLeaderboardById, deleteLeaderboardById, addLeaderboard, getLeaderboardByPackage } from "../controllers/LeaderboardController.js"; 
import { addPassAdmin, getPassAdmin } from "../controllers/PassAdminController.js";
import PassAdmin from "../models/PassAdminModel.js";
import bcrypt from "bcrypt";

const router = express.Router();


// Login
router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);

router.post('/add-pass-admin-edfaid', addPassAdmin);
router.get('/get-pass-admin-edfaid', getPassAdmin);
router.post('/compare-password', async (req, res) => {
  try {
    const { enteredPassword } = req.body;

    // Ambil kata sandi terenkripsi dari database
    const passAdminData = await PassAdmin.findOne({
      attributes: ['password'],
    });

    if (!passAdminData) {
      return res.status(404).json({ success: false, error: 'Data kata sandi tidak ditemukan' });
    }

    const storedPasswordHash = passAdminData.password;

    // Bandingkan kata sandi yang dimasukkan dengan kata sandi terenkripsi yang tersimpan
    const isPasswordValid = await bcrypt.compare(enteredPassword, storedPasswordHash);

    if (isPasswordValid) {
      // Set cookie untuk menyimpan status sesi
      res.cookie('loggedIn', true);
      res.json({ success: true, isPasswordValid });
    } else {
      res.json({ success: false, isPasswordValid });
    }
  } catch (error) {
    console.error('Kesalahan membandingkan kata sandi:', error);
    res.status(500).json({ success: false, error: 'Kesalahan Internal Server', details: error.message });
  }
});

router.get('/register', (req, res) => {
  // Periksa apakah pengguna telah masuk atau belum
  const loggedIn = req.cookies.loggedIn === 'true'; // Sesuaikan ini dengan metode yang Anda gunakan

  if (!loggedIn) {
    // Jika pengguna belum masuk, arahkan kembali ke halaman login
    return res.redirect('/login');
  }

  // Jika pengguna telah masuk, tampilkan halaman register
  res.render('register'); // Sesuaikan ini dengan metode yang Anda gunakan
});



// Fauna
router.post('/add-fauna', AddFauna);
router.get('/get-allfauna', getAllfauna);
router.get('/get-fauna/:faunaId', getFaunaById);
router.put('/edit-fauna/:faunaId', editFaunaById);
router.delete('/delete-fauna/:faunaId', deleteFaunaById);

// Quiz
router.post('/add-quiz', addQuiz);
router.get('/get-allquizzes', getAllQuizzes);
router.get('/get-quiz/:quizId', getQuizById);
router.get('/get-quizzes-by-package/:package', async (req, res) => {
    try {
      const { package: selectedPackage } = req.params;
  
      const quizzesByPackage = await QuizModel.findAll({
        where: {
          paket: selectedPackage,
        },
      });
  
      res.status(200).json(quizzesByPackage);
    } catch (error) {
      console.error('Error getting quizzes by package:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});
router.put('/edit-quiz/:quizId', editQuizById);
router.delete('/delete-quiz/:quizId', deleteQuizById);

// Reviewer
router.post('/add-review', addReview);
router.get('/get-allreview', getAllReviews);
router.get('/get-review/:reviewId', getReviewById);
router.put('/edit-review/:reviewId', updateReviewById);
router.delete('/delete-review/:reviewId', deleteReviewById);

// Leaderboard
router.post('/add-leaderboard', addLeaderboard); 
router.get('/get-allleaderboard', getAllLeaderboard); 
router.get('/get-leaderboard-by-package/:package', getLeaderboardByPackage); // New endpoint for filtering by package
router.put('/edit-leaderboard/:leaderboardId', editLeaderboardById); 
router.delete('/delete-leaderboard/:leaderboardId', deleteLeaderboardById);

export default router;
