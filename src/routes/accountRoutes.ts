import express, { Router } from "express";
import AccountController from "../controller/accountController";

const routes: Router = express.Router();

routes.post("/account", AccountController.createAccount);
routes.get("/account", AccountController.getAll);
routes.get("/account/sum", AccountController.getSum);
routes.put('/account/:id', AccountController.updateAccount);


export default routes;
