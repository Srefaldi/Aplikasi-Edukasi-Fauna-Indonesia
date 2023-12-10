import QuizModel from "../models/QuizModel.js";

export const addQuiz = async (req, res) => {
    try {
        const { question, option_1, option_2, option_3, option_4, answer, paket } = req.body;

        const newQuiz = await QuizModel.create({
            question: question,
            option_1: option_1,
            option_2: option_2,
            option_3: option_3,
            option_4: option_4,
            answer: answer,
            paket: paket,
        });

        res.status(201).json(newQuiz);
    } catch (error) {
        console.error("Error adding quiz:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const getAllQuizzes = async (req, res) => {
    try {
        const allQuizzes = await QuizModel.findAll();

        res.status(200).json(allQuizzes);
    } catch (error) {
        console.error('Error getting quizzes:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const getQuizById = async (req, res) => {
    try {
        const { quizId } = req.params;

        const quiz = await QuizModel.findByPk(quizId);

        if (!quiz) {
            return res.status(404).json({ error: 'Quiz not found' });
        }

        res.status(200).json(quiz);
    } catch (error) {
        console.error('Error getting quiz by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const editQuizById = async (req, res) => {
    try {
        const { quizId } = req.params;

        const quiz = await QuizModel.findByPk(quizId);

        if (!quiz) {
            return res.status(404).json({ error: 'Quiz not found' });
        }

        const { question, option_1, option_2, option_3, option_4, answer, paket } = req.body;
        await quiz.update({
            question: question,
            option_1: option_1,
            option_2: option_2,
            option_3: option_3,
            option_4: option_4,
            answer: answer,
            paket: paket,
        });

        res.status(200).json({ msg: `Berhasil Mengedit pertanyaan: ${quiz.question}` });
    } catch (error) {
        console.error('Error editing quiz:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const deleteQuizById = async (req, res) => {
    try {
        const { quizId } = req.params;

        const quiz = await QuizModel.findByPk(quizId);

        if (!quiz) {
            return res.status(404).json({ error: 'Quiz not found' });
        }

        await quiz.destroy();

        res.status(200).json({ msg: `Berhasil Menghapus pertanyaan: ${quiz.question}` });
    } catch (error) {
        console.error('Error deleting quiz:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
