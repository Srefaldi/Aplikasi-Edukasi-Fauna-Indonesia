import express from "express";
import { getUsers, Register, Login, Logout } from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { AddFauna, deleteFaunaById, editFaunaById, getAllfauna, getFaunaById } from "../controllers/FaunaContents.js";
import { addQuiz, deleteQuizById, editQuizById, getAllQuizzes, getQuizById } from "../controllers/QuizController.js";
import { addReview, deleteReviewById, getAllReviews, getReviewById, updateReviewById } from "../controllers/Reviewer.js";
 
const router = express.Router();
 
router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);

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
router.put('/edit-quiz/:quizId', editQuizById);
router.delete('/delete-quiz/:quizId', deleteQuizById);

// Reviewer
router.post('/add-review', addReview);
router.get('/get-allreview', getAllReviews);
router.get('/get-review/:reviewId', getReviewById);
router.put('/edit-review/:reviewId', updateReviewById);
router.delete('/delete-review/:reviewId', deleteReviewById);

 
export default router;