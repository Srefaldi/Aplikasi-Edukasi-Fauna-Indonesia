import { Sequelize } from "sequelize";
import Database from "../config/Database.js";

const { DataTypes } =  Sequelize;

const PassAdmin = Database.define('pass_admin',{
    password:{
        type: DataTypes.STRING
    },
},{
    freezeTableName:true
});

(async () => {
    await Database.sync();
})();

export default PassAdmin;