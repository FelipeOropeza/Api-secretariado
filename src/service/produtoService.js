import { prisma } from "../config/database.js"; // Corrigido para importação nomeada

export const getAllProdutos = async () => {
  return await prisma.produtos.findMany();
};

export const createProduto = async (nome, preco) => {
  return await prisma.produtos.create({
    data: { nome: nome, preco: preco, qtd: 0 },
  });
};

export const updateProduto = async (id, nome, quantidade, tipo) => {
  const produto = await prisma.produtos.findUnique({
    where: { id: id },
    select: { qtd: true, nome: true },
  });

  if (tipo === "entrada") {
    await prisma.produtosHistorico.create({
      data: {
        nomeProd: produto.nome,
        tipoMovimento: tipo,
        qtd: quantidade,
        nomeUser: nome,
      },
    });
    return await prisma.produtos.update({
      where: { id: id },
      data: { qtd: produto.qtd + quantidade },
    });
  } else if (tipo === "saida") {
    if (produto.qtd >= quantidade) {
      await prisma.produtosHistorico.create({
        data: {
          nomeProd: produto.nome,
          tipoMovimento: tipo,
          qtd: quantidade,
          nomeUser: nome,
        },
      });

      return await prisma.produtos.update({
        where: { id: id },
        data: { qtd: produto.qtd - quantidade },
      });
    } else {
      return false;
    }
  } else {
    return false;
  }
};
