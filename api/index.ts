import express, { Application, Request, Response, NextFunction } from "express";
import rateLimit from "express-rate-limit";
import bodyParser from "body-parser";
import cors from "cors";
import { getIp } from "../utils/middleware";
import v1Routes from "./routes";
import listEndpoints from "express-list-endpoints";
import db from "../models";

const PORT = process.env.PORT || 3000;
const app: Application = express();

const limiter = rateLimit({
  windowMs: 1000, // 5 requests per second
  max: 5,
});

app.use(cors({ preflightContinue: true, origin: true }));

// Custom CORS middleware
app.use((req: Request, res: Response, next: NextFunction): void => {
  const origin = req?.headers?.origin || "*";
  res.setHeader("Access-Control-Allow-Origin", origin);
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS,POST,GET,DELETE,PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  next();
});

app.use(bodyParser.json());
app.use(limiter);
app.use(getIp);
app.use("/v1", v1Routes);

// export default app;

// Local test runner (for dev only)
let sqlz: any;
app.listen(PORT, () => {
  if (!sqlz) {
    db.sequelize()
      .then((sequelizeInstance) => {
        sqlz = sequelizeInstance;
        console.log(`Listening on port ${PORT}`);
      })
      .catch((error: Error) => console.error("Error connecting to DB:", error));
  } else {
    sqlz?.connectionManager.initPools();

    if (
      Object.prototype.hasOwnProperty.call(
        sqlz.connectionManager,
        "getConnection"
      )
    ) {
      delete sqlz.connectionManager.getConnection;
    }
  }
});
