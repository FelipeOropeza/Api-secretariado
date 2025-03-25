import UserRepository from "../repositories/userRepository";
import PasswordHelper from "../helper/passwordHelper";

export const createUser = async (
  name: string,
  ra: string,
  password: string,
  companyId: number
) => {
    const passwordHash = await PasswordHelper.hashPassword(password);
    const user = await UserRepository.insertUser(name, ra, passwordHash, companyId);
    return user;
};
