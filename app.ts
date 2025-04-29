import dotenv from "dotenv";
import express, { Express, NextFunction, Request, Response } from "express";
import { AppDataSource } from "./src/config/databaseConnection";
import cors from "cors";
import routes from "./src/api/routes";

dotenv.config();

// Apply CORS middleware
const app: Express = express();
let isDatabaseConnected = false;

async function initializeApp(): Promise<void> {
  try {
    await AppDataSource.initialize();
    isDatabaseConnected = true;
    console.log("Connected to the MySQL database");
  } catch (error) {   
    console.log("Error connecting to the database:", error);
    process.exit(1);
  }
}

async function startServer(): Promise<void> {
  await initializeApp();
  const port = process.env.PORT || 4000;
  const corsOptions = {
    origin: "*", 
    credentials: true,
  };  
  app.use(cors(corsOptions));
  app.use("/api", routes)

  app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
  });
}

startServer();
