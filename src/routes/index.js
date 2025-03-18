import express from "express";
import usuariosRoutes from "./usuarios.js";

const router = (app) => {
  app.use(express.json(), usuariosRoutes);
};

export default router;
