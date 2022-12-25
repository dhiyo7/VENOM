import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import routes from "./routes";
import morganMiddleware from "./middlewares/morgan.middleware";
import Logger from "./utils/logger";

dotenv.config();
const app: Express = express();
const port: string = process.env.PORT ?? "3000";

app.use(morganMiddleware);
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(routes);

app.get("/", (req: Request, res: Response) => {
  Logger.info("Checking the API status: Everything is OK");
  res.send(`Express + Typescript Server`);
});

app.listen(port, () => {
  Logger.info(`Server running on port : ${port}`);
});
