// src/config.js
const dotenv = require("dotenv");
dotenv.config();

export const defaultConfig = {
  port: process.env.PORT || 4000,
  mssql: {
    host: process.env.MSSQL_HOST || "localhost",
    username: process.env.MSSQL_USERNAME || "test",
    password: process.env.MSSQL_PASSWORD || "test",
    database: process.env.MSSQL_DATABASE || "test",
  }
};
