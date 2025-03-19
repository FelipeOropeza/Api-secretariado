import { PrismaClient } from "@prisma/client";
import pkg from 'pg';
import "dotenv/config";

const { Client } = pkg;
const prisma = new PrismaClient();

const pgClient = new Client({
  connectionString: process.env.DATABASE_URL,
});

pgClient.connect();
pgClient.query("LISTEN new_product");

pgClient.on("notification", async (msg) => {
  if (msg.channel === "new_product") {
    const novoProduto = JSON.parse(msg.payload);
    console.log("🆕 Novo produto inserido:", novoProduto);

    global.io.emit("updateProdutos", novoProduto);
  }
});

export { prisma, pgClient };
