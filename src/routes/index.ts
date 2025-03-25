import express, { Application } from "express";
import authRoutes from "./authRoutes";

const router = (app: Application): void => {
  app.use(express.json());
  app.use(authRoutes);
};

export default router;
