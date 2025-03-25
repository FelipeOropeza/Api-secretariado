import express, { Application } from "express";
import authRoutes from "./authRoutes";
import companyRoutes from "./companyRoutes";

const router = (app: Application): void => {
  app.use(express.json());
  app.use(authRoutes);
  app.use(companyRoutes);
};

export default router;
