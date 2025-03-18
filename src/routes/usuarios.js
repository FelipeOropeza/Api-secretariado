import express from "express";
import prisma from "../config/database.js";

const router = express.Router();

router.get("/usuarios", async (req, res) => {
  try {
    const usuarios = await prisma.usuarios.findMany({
      orderBy: { id: "desc" },
    });
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar usuários" });
  }
});

router.post("/usuarios", async (req, res) => {
  try {
    const { nome } = req.body;
    const novoUsuario = await prisma.usuarios.create({
      data: { nome },
    });

    // Notificar todos os clientes (iremos configurar no server.js)
    global.io.emit("novo_usuario", novoUsuario);

    res.json(novoUsuario);
  } catch (error) {
    res.status(500).json({ error: "Erro ao adicionar usuário" });
  }
});

export default router;
