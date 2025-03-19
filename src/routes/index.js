import express from "express";
import authRoutes from "./authRoutes.js";
import proutosRoutes from "./produtoRoutes.js";

const router = (app) => {
  app.use(express.json(), authRoutes, proutosRoutes);
};

export default router;
