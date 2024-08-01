import { Sequelize } from "sequelize";
import mysql from 'mysql2';

const sequelize = new Sequelize({
    host: "localhost",
    username: "root",
    password: "24MY@root",
    database: "heal_vedha",
    dialect: "mysql",
    port: 3306, 
    dialectModule: mysql,
    benchmark: true
});
(async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
        // Sync defined models to the database
        await sequelize.sync({ alter: true }); // This will create tables if they don't exist or update the existing on

        // You can now start using your models to interact with the database
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
})()
export default sequelize;