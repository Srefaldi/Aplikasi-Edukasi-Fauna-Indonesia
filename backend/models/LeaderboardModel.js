import { Sequelize } from "sequelize";
import Database from "../config/Database.js";

const { DataTypes } = Sequelize;

const LeaderboardModel = Database.define('leaderboard', {
    nama: {
        type: DataTypes.STRING,
        allowNull: false
    },
    paket: {
        type: DataTypes.STRING,
        allowNull: false
    },
    score: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    freezeTableName: true
});

(async () => {
    await Database.sync();
})();

export default LeaderboardModel;