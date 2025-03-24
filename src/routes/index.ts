import express, { Application } from "express";
import authRoutes from "./authRoutes";
import produtosRoutes from "./produtoRoutes";

const router = (app: Application): void => {
  app.use(express.json());
  app.use(authRoutes);
  app.use(produtosRoutes);
};

export default router;
