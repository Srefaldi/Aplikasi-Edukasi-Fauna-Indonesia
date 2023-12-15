import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import Database from "./config/Database.js";
import router from "./routes/index.js";
import FaunaContentModel from "./models/FaunaContentModel.js";
import QuizModel from "./models/QuizModel.js";
import FileUpload from "express-fileupload";
import UserModel from "./models/UserModel.js";
import ReviewerModel from "./models/ReviewerModel.js";
import LeaderboardModel from "./models/LeaderboardModel.js";
import PassAdmin from "./models/PassAdminModel.js";

dotenv.config();
const app = express();

try {
    await Database.authenticate();
    console.log('Database Connected...');
    await FaunaContentModel.sync();
    await QuizModel.sync();
    await UserModel.sync();
    await ReviewerModel.sync();
    await LeaderboardModel.sync();
    await PassAdmin.sync();
} catch (error) {
    console.error(error);
}

app.use(cors({ credentials: true, origin: 'http://localhost:1234' }));
app.use(cookieParser());
app.use(express.json());
app.use(FileUpload());

app.use(express.static("public"));
app.use(router);

app.listen(5000, () => console.log('Server running at port 5000'));
