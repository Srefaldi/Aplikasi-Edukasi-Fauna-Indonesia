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

const router = express.Router();


// Login
router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);

router.post('/add-pass-admin-edfaid', addPassAdmin);
router.get('/get-pass-admin-edfaid', getPassAdmin);

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
