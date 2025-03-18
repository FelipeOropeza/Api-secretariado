import cors from "cors";
import express from "express";
import routes from "./routes/index.js";

const app = express();
app.use(cors({ origin: "*" }));
routes(app);

export default app;