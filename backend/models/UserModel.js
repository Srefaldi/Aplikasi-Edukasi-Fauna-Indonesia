import { Sequelize } from "sequelize";
import Database from "../config/Database.js";

const { DataTypes } =  Sequelize;

const UserModel = Database.define('user',{
    name:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    refresh_token:{
        type: DataTypes.TEXT
    },
},{
    freezeTableName:true
});

(async () => {
    await Database.sync();
})();

export default UserModel;