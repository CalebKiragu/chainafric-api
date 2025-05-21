import express, { Application } from "express";
import bodyParser from "body-parser";
import { corsConfig, getIp, limiter } from "./middleware";
import v1Routes from "./routes";
import { sequelizeInit } from "../models";
import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Custom CORS middleware
app.use(corsConfig);
app.use(bodyParser.json());
app.use(limiter);
app.use(getIp);
app.use("/v1", v1Routes);

// export default app;

// Local test runner (for dev only)
let sqlz: Sequelize | null;
app.listen(PORT, async () => {
  try {
    sqlz = await sequelizeInit();
    console.log(`Listening on port ${PORT}`);
  } catch (error) {
    console.error("Error connecting to DB:", error);
  }
});
