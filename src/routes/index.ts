import express, { Application } from "express";
import authRoutes from "./authRoutes";
import companyRoutes from "./companyRoutes";
import userRoutes from "./userRoutes";
import accountRoutes from "./accountRoutes";

const router = (app: Application): void => {
  app.use(express.json());
  app.use(authRoutes);
  app.use(companyRoutes);
  app.use(userRoutes);
  app.use(accountRoutes);
};

export default router;
