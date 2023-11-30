import express from "express";
import Database from "./config/Database.js";
import UserModel from "./models/UserModel.js";
const app = express();

try {
    await Database.authenticate();
    console.log('Database Connected...');
    await UserModel.sync()
} catch (error) {;
    console.error(error);
    
}

app.listen(5000, ()=> console.log('Server running at port 5000'));