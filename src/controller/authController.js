import { userIsValid } from "../service/authService.js";

class AuthController {
  static async login(req, res) {
    const { ra, senha } = req.body;
    const user = await userIsValid(ra, senha);

    if (user) {
      res
        .status(200)
        .json({ message: "Usuário validado com sucesso!", user: user });
    } else {
      res.status(401).json({ message: "Credencias inválidas!" });
    }
  }
}

export default AuthController;
