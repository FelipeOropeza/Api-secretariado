import prisma from "../config/database.js";
import ProductRepository from "../repositories/productRepository";

export const getAll = async () => {
  return await prisma.products.findMany();
};

export const createProduto = async (name: string, price: number) => {
  const product = await ProductRepository.insertProduct(name, price);
  return product;
};

export const updateProduto = async (
  id: number,
  nomeUsuario: string,
  quantidade: number,
  tipo: string
) => {
  const produto = await prisma.products.findUnique({
    where: { id: id },
    select: { amount: true, name: true },
  });

  if (!produto) {
    return false;
  }

  if (tipo === "entrada") {
    await prisma.productsHistory.create({
      data: {
        productname: produto.name,
        typeMovement: tipo,
        amount: quantidade,
        username: nomeUsuario,
      },
    });

    return await prisma.products.update({
      where: { id: id },
      data: { amount: produto.amount + quantidade },
    });
  } else if (tipo === "saida") {
    if (produto.amount >= quantidade) {
      await prisma.productsHistory.create({
        data: {
          productname: produto.name,
          typeMovement: tipo,
          amount: quantidade,
          username: nomeUsuario,
        },
      });

      return await prisma.products.update({
        where: { id: id },
        data: { amount: produto.amount - quantidade },
      });
    } else {
      return false; // Quantidade insuficiente para a saída
    }
  } else {
    return false; // Tipo inválido
  }
};
