import LeaderboardModel from "../models/LeaderboardModel.js";

export const getAllLeaderboard = async (req, res) => {
    try {
        const topScores = await LeaderboardModel.findAll({
            attributes: ['id', 'nama', 'paket', 'score'], // Update 'package' to 'paket'
            order: [['score', 'DESC']], 
            limit: 10 
        });

        const leaderboardData = [...topScores];

        res.status(200).json(leaderboardData);
    } catch (error) {
        console.error('Error getting leaderboard:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const editLeaderboardById = async (req, res) => {
    try {
        const { leaderboardId } = req.params;

        const leaderboard = await LeaderboardModel.findByPk(leaderboardId);

        if (!leaderboard) {
            return res.status(404).json({ error: 'Leaderboard entry not found' });
        }

        const { nama, paket, score } = req.body; // Update 'package' to 'paket'

        await leaderboard.update({
            nama: nama || leaderboard.nama, 
            paket: paket || leaderboard.paket, // Update 'package' to 'paket'
            score: score || leaderboard.score
        });

        res.status(200).json({ msg: `Berhasil Mengedit entry leaderboard dengan ID ${leaderboardId}` });
    } catch (error) {
        console.error('Error editing leaderboard entry:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const deleteLeaderboardById = async (req, res) => {
    try {
        const { leaderboardId } = req.params;

        const leaderboard = await LeaderboardModel.findByPk(leaderboardId);

        if (!leaderboard) {
            return res.status(404).json({ error: 'Leaderboard entry not found' });
        }

        await leaderboard.destroy();

        res.status(200).json({ msg: `Berhasil Menghapus entry leaderboard dengan ID ${leaderboardId}` });
    } catch (error) {
        console.error('Error deleting leaderboard entry:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const addLeaderboard = async (req, res) => {
    try {
        const { nama, paket, score } = req.body;

        const newLeaderboardEntry = await LeaderboardModel.create({
            nama,
            paket,
            score
        });

        res.status(201).json({ msg: 'Berhasil menambahkan entry leaderboard baru', newLeaderboardEntry });
    } catch (error) {
        console.error('Error adding leaderboard entry:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const getLeaderboardByPackage = async (req, res) => {
    try {
        const { package: selectedPackage } = req.params;

        const leaderboardByPackage = await LeaderboardModel.findAll({
            where: {
                paket: selectedPackage,
            },
            order: [['score', 'DESC']],
            limit: 10,
        });

        res.status(200).json(leaderboardByPackage);
    } catch (error) {
        console.error('Error getting leaderboard by package:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};