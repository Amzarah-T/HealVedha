import { Sequelize } from "sequelize";
import mysql from 'mysql2';

const sequelize = new Sequelize({
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    dialect: "mysql",
    port: process.env.DATABASE_PORT,
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