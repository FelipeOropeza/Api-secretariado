import express, { Router } from "express";
import UserController from "../controller/userController";

const routes: Router = express.Router();

routes.post("/user", UserController.userRegistration);

export default routes;
