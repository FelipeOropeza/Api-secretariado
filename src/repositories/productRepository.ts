import prisma from "../config/database";
import { Product } from "../models/Product";

class ProductRepository {
  static async insertProduct(name: string, price: number) : Promise<Product | null> {
    const product =  await prisma.products.create({
      data: { name: name, price: price, amount: 0 },
    });

    if(product) {
        return product;
    }
    return null;
  }
}

export default ProductRepository;
