import express, { Router } from "express";
import ProdutoController from "../controller/produtoController";

const routes: Router = express.Router();

routes.get("/", ProdutoController.listarProdutos);
routes.post("/", ProdutoController.criarProduto);
routes.put("//:id", ProdutoController.atualizarProduto);

export default routes;
