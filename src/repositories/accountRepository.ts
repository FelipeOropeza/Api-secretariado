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
    })

    if(account){
        return account;
    }

    return null;
  }
}

export default AccountRepository;
