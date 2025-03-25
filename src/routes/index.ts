import express, { Application } from "express";
import authRoutes from "./authRoutes";
import companyRoutes from "./companyRoutes";
import userRoutes from "./userRoutes";

const router = (app: Application): void => {
  app.use(express.json());
  app.use(authRoutes);
  app.use(companyRoutes);
  app.use(userRoutes);
};

export default router;
