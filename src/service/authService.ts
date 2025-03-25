import UserRepository from "../repositories/authRepository";
import PasswordHelper from "../helper/passwordHelper";
import TokenHelper from "../helper/tokenHelper";

export const userIsValid = async (ra: string, password: string) => {
  const user = await UserRepository.findByRaAndSenha(ra, password);

  if (!user) {
    return null;
  }

  const validPassword = await PasswordHelper.comparePassword(password, user.password);

  if (validPassword) {
    const token = TokenHelper.generateToken(user.id!, user.name, user.ra);
    return { user, token };
  }

  return null;
};
