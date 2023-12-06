import express from "express";
import { getUsers, Register, Login, Logout } from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { AddFauna, getAllfauna, getFaunaById } from "../controllers/FaunaContents.js";
import { AddQuiz } from "../controllers/QuizController.js";
 
const router = express.Router();
 
router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);


router.post('/add-fauna', AddFauna);
router.get('/get-allfauna', getAllfauna);
router.get('/get-fauna/:faunaId', getFaunaById)

router.post('/add-quiz', AddQuiz)
 
export default router;