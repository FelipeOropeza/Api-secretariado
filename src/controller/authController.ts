import { Request, Response } from "express";
import { userIsValid } from "../service/authService";

class AuthController {
  static async login(req: Request, res: Response): Promise<void> {
    const { ra, password } = req.body;

    try {
      const result = await userIsValid(ra, password);

      if (result) {
        const { user, token } = result;
        if (user) {
          res.status(200).json({
            message: "Usuário validado com sucesso!",
            user: user,
            token: token,
          });
        }
      } else {
        res.status(401).json({ message: "Credenciais inválidas!" });
      }
    } catch (error) {
      res.status(500).json({ message: "Erro ao validar usuário", error });
    }
  }
}

export default AuthController;
