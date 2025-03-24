import cors from "cors";
import express, { Application } from "express";
import routes from "./routes";

const app: Application = express();

app.use(cors({ origin: "*" }));

app.use(express.json());

routes(app);

export default app;
