import express, { Router } from "express";
import ProdutoController from "../controller/produtoController";

const routes: Router = express.Router();

routes.get("/product", ProdutoController.listarProdutos);
routes.post("/product", ProdutoController.criarProduto);
routes.put("/product/:id", ProdutoController.atualizarProduto);

export default routes;
