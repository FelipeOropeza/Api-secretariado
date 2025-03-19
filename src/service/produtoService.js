import { prisma } from "../config/database.js"; // Corrigido para importação nomeada

export const getAllProdutos = async () => {
  return await prisma.produtos.findMany();
};

export const createProduto = async (nome, preco) => {
  return await prisma.produtos.create({
    data: { nome: nome, preco: preco, qtd: 0 },
  });
};
