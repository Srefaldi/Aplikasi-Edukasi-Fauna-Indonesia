import { Sequelize } from "sequelize";

const Database = new Sequelize('db_apl_edu_fauna_indonesia','root','nandajein24',{
    host: "localhost",
    dialect: "mysql"
});

export default Database;
