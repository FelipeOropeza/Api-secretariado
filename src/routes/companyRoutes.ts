import express, { Router } from "express";
import CompanyController from "../controller/companyController";

const routes: Router = express.Router();

routes.post("/company", CompanyController.companyRegistration);

export default routes;
