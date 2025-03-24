import express, { Application } from "express";
import authRoutes from "./authRoutes";
import Routes from "./produtoRoutes";

const router = (app: Application): void => {
  app.use(express.json());
  app.use(authRoutes);
  app.use(Routes);
};

export default router;
