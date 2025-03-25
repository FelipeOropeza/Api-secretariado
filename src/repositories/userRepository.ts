import prisma from "../config/database";
import { User } from "../models/User";

class UserRepository {
  static async insertUser(
    name: string,
    ra: string,
    password: string,
    companyId: number
  ): Promise<User | null> {
    const user = await prisma.user.create({
      data: {
        name: name,
        ra: ra,
        password: password,
        companyId: companyId,
      },
    });

    if (user) {
      return user;
    }

    return null;
  }
}

export default UserRepository;
