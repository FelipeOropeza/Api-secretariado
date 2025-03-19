import express from "express";
import AuthController from "../controller/authController.js";

const routes = express.Router();

routes.post("/login", AuthController.login);
export default routes;