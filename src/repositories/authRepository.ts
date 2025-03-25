import prisma from "../config/database";
import { User } from "../models/User";

class UserRepository {
  static async findByRaAndSenha(
    ra: string,
    password: string
  ): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { ra },
    });
    if (user) {
      return user;
    }
    return null;
  }
}

export default UserRepository;
