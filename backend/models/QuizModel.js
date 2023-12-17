import { Sequelize } from "sequelize";
import Database from "../config/Database.js";

const { DataTypes } = Sequelize;

const QuizModel = Database.define('quiz-model', {
  question: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  option_1: {
    type: DataTypes.STRING(250),
    allowNull: false,
  },
  option_2: {
    type: DataTypes.STRING(250),
    allowNull: false,
  },
  option_3: {
    type: DataTypes.STRING(250),
    allowNull: false,
  },
  option_4: {
    type: DataTypes.STRING(250),
    allowNull: false,
  },
  answer: {
    type: DataTypes.STRING(250),
    allowNull: false,
  },
  paket: {
    type: DataTypes.STRING(250),
    allowNull: false,
  },
}, {
  freezeTableName: true,
});

(async () => {
  await Database.sync();
})();

export default QuizModel;
