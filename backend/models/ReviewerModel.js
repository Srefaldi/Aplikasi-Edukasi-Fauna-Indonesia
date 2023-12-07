import { Sequelize } from "sequelize";
import Database from "../config/Database.js";

const { DataTypes } =  Sequelize;

const ReviewerModel = Database.define('Reviewer',{
    name:{
        type: DataTypes.STRING
    },
    rating:{
        type: DataTypes.INTEGER
    },
    review:{
        type: DataTypes.TEXT
    },    
},{
    freezeTableName:true
});

(async () => {
    await Database.sync();
})();

export default ReviewerModel;