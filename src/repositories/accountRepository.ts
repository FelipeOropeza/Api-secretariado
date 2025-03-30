import prisma from "../config/database";
import { Account } from "../models/Account";

class AccountRepository {
  static async insertAccount(
    description: string,
    amount: number,
    dueDate: string,
    status: string,
    type: string,
    companyId: number,
    userId: number
  ): Promise<Account | null> {
    const account = await prisma.account.create({
      data: {
        description: description,
        amount: amount,
        dueDate: dueDate,
        status: status,
        type: type,
        companyId: companyId,
        userId: userId,
      },
    });

    if (account) {
      return account;
    }

    return null;
  }

  static async getAll(): Promise<Account[]> {
    return await prisma.account.findMany();
  }

  static async getSum() {
    const [totalRecebido, despesasPendentes] = await Promise.all([
      prisma.account.aggregate({
        _sum: { amount: true },
        where: { type: "receita", status: "recebido" },
      }),
      prisma.account.findMany({
        where: { type: "despesa", status: "pendente" },
      }),
    ]);
  
    return {
      totalRecebido: totalRecebido._sum.amount || 0,
      despesasPendentes,
    };
  }  
}

export default AccountRepository;
