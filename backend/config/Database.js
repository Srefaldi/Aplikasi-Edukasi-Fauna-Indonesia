import { Sequelize } from "sequelize";

const Database = new Sequelize('db_apl_edu_fauna_indonesia','root','123',{
    host: "localhost",
    dialect: "mysql"
});

export default Database;