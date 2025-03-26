import { Request, Response } from "express";
import { createAccount } from "../service/accountService";

class AccountController {
  static async createAccount(req: Request, res: Response): Promise<void> {
    try {
      const { description, amount, dueDate, status, type, companyId, userId } =
        req.body;

      const account = await createAccount(
        description,
        amount,
        dueDate,
        status,
        type,
        companyId,
        userId
      );

      if (account) {
        res.status(200).json({
          message: "Conta criada com sucesso!",
          account: account,
        });
      } else {
        res.status(401).json({ message: "Credenciais inválidas!" });
      }
    } catch (error) {
      res.status(500).json({ message: "Erro ao validar usuário", error });
    }
  }
}

export default AccountController;
