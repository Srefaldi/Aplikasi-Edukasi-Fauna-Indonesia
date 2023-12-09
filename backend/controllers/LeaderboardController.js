import LeaderboardModel from "../models/LeaderboardModel.js";

export const getAllLeaderboard = async (req, res) => {
    try {
        const topScores = await LeaderboardModel.findAll({
            attributes: ['id', 'nama', 'score'],
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

        const { nama, score } = req.body;

        await leaderboard.update({
            nama: nama || leaderboard.nama, 
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
