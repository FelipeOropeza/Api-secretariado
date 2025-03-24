import prisma from "../config/database";
import { User } from "../models/User";

class UserRepository {
  static async findByRaAndSenha(
    ra: string,
    password: string
  ): Promise<User | null> {
    const user = await prisma.users.findUnique({
      where: { ra },
    });
    if (user && user.password === password) {
      return user;
    }
    return null;
  }
}

export default UserRepository;
