import {
  getAllProdutos,
  createProduto,
  updateProduto,
} from "../service/produtoService.js";

import filaMemoria from "../queue/filaMemoria.js";

class ProdutoController {
  static async listarProdutos(req, res) {
    try{
    const produtos = await getAllProdutos();

    res.status(200).json(produtos);
    } catch (error){
      res.status(500).json({ error: "Erro ao buscar produtos" });
    }
  }

  static async criarProduto(req, res) {
    try {
      const { nome, preco } = req.body;
      const precoConvertido = parseFloat(preco);
      const novoProduto = await createProduto(nome, precoConvertido);
      const produtosAtualizados = await getAllProdutos();

      global.io.emit("updateProdutos", produtosAtualizados);

      res.status(201).json(novoProduto);
    } catch (error) {
      res.status(500).json({ error: "Erro ao criar produto" });
    }
  }

  static async atualizarProduto(req, res) {
    try {
      const { id } = req.params;
      const { nome, quantidade, tipo } = req.body;
      const idConvertido = parseInt(id);
  
      filaMemoria.adicionar(idConvertido, async () => {
        const produtoAtualizado = await updateProduto(
          idConvertido,
          nome,
          quantidade,
          tipo
        );
  
        if (!produtoAtualizado) {
          return res
            .status(400)
            .json({ error: "Falha ao atualizar o produto" });
        }
  
        console.log("Produto atualizado com sucesso!");
  
        const produtosAtualizados = await getAllProdutos();
  
        global.io.emit("updateProdutos", produtosAtualizados);
  
        res.status(200).json(produtoAtualizado);
      });
    } catch (error) {
      res.status(500).json({ error: "Erro ao atualizar produto" });
    }
  }
}

export default ProdutoController;
