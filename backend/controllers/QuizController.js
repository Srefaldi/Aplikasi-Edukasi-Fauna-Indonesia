import QuizModel from "../models/QuizModel.js";

export const AddQuiz = async (req, res) => {
    try {
        const { question, option_1, option_2, option_3, option_4, answer } = req.body;

        const newQuiz = await QuizModel.create({
            question: question,
            option_1: option_1,
            option_2: option_2,
            option_3: option_3,
            option_4: option_4,
            answer: answer,
        });

        res.status(201).json(newQuiz);
    } catch (error) {
        console.error("Error adding quiz:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
