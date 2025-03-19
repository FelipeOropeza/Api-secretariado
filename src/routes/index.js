import express from "express";
import authRoutes from "./authRoutes.js";

const router = (app) => {
  app.use(express.json(), authRoutes);
};

export default router;
