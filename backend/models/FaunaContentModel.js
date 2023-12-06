import { Sequelize } from "sequelize";
import Database from "../config/Database.js";

const { DataTypes } =  Sequelize;

const FaunaContentModel = Database.define('fauna-content',{
    name:{
        type: DataTypes.STRING
    },
    image_name:{
        type: DataTypes.STRING
    },
    image_url:{
        type: DataTypes.STRING
    },
    kategori_1:{
        type: DataTypes.STRING
    },
    kategori_2:{
        type: DataTypes.STRING
    },
    description:{
        type: DataTypes.TEXT
    },
    desc_habitat:{
        type: DataTypes.TEXT
    },
    desc_populasi:{
        type: DataTypes.TEXT
    },
    
},{
    freezeTableName:true
});

(async () => {
    await Database.sync();
})();

export default FaunaContentModel;