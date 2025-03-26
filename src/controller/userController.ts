import { Request, Response } from "express";
import { createUser } from "../service/userService";

class UserController {
  static async userRegistration(req: Request, res: Response): Promise<void> {
    try {
      const { name, ra, password, companyId } = req.body;

      const user = await createUser(name, ra, password, companyId);

      if (user) {
        res.status(200).json({
          message: "Usuario criado com sucesso!",
          user: user,
        });
      } else {
        res.status(401).json({ message: "Credenciais inválidas!" });
      }
    } catch (error) {
      res.status(500).json({ message: "Erro ao cadastra usuario", error });
    }
  }
}

export default UserController;
