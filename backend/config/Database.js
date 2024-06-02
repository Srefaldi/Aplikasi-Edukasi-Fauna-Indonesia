import { Sequelize } from "sequelize";

const Database = new Sequelize('LKM2024','root','',{
    host: "localhost",
    dialect: "mysql"
});

export default Database;
