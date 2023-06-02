import { Sequelize } from "sequelize";

export const db = new Sequelize(
  // process.env.DB_NAME,
  "farooq",
  "root",
  // process.env.DB_USER,
  // process.env.DB_PASSWORD,

  {
    port: 3304,
    host: "localhost",
    // host: process.env.HOST,
    // host: "localhost",
    dialect: "mysql",
    logging: false,
  }
);
