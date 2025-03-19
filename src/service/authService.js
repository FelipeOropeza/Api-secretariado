import { prisma } from "../config/database.js"; // Corrigido para importação nomeada

export const userIsValid = async (ra, senha) => {
    const user = await prisma.usuarios.findUnique({
      where: { ra, senha },
    });

    if(user){
        return user;
    }
    else{
      return false;
    }
}