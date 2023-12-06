import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import Database from "./config/Database.js";
import router from "./routes/index.js";
import FaunaContentModel from "./models/FaunaContentModel.js";
import QuizModel from "./models/QuizModel.js";
dotenv.config();
const app = express();

try {
    await Database.authenticate();
    console.log('Database Connected...');
    await FaunaContentModel.sync();
    await QuizModel.sync();
} catch (error) {;
    console.error(error);
}

app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(5000, ()=> console.log('Server running at port 5000'));