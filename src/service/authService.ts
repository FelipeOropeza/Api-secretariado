import UserRepository from "../repositories/userRepository"; // Importe o repositório

export const userIsValid = async (ra: string, senha: string) => {
  const user = await UserRepository.findByRaAndSenha(ra, senha);
  return user;
};
