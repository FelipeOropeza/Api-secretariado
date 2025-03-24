import express, { Router } from "express";
import AuthController from "../controller/authController";

const routes: Router = express.Router();

routes.post("/login", AuthController.login);

export default routes;
