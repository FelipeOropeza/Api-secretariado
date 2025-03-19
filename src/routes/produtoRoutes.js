import express from "express";
import ProdutoController from "../controller/produtoController.js";

const routes = express.Router();

routes.get("/produtos", ProdutoController.listarProdutos);
routes.post("/produtos", ProdutoController.criarProduto);

export default routes;