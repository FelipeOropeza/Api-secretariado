import express, { Router } from "express";
import ProdutoController from "../controller/produtoController";

const routes: Router = express.Router();

routes.get("/produtos", ProdutoController.listarProdutos);
routes.post("/produtos", ProdutoController.criarProduto);
routes.put("/produtos/:id", ProdutoController.atualizarProduto);

export default routes;
