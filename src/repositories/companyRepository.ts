import prisma from "../config/database";
import { Company } from "../models/Company";

class CompanyRepository {
  static async insertCompany(
    name: string,
    cnpj: string
  ): Promise<Company | null> {
    const company = await prisma.company.create({
      data: {
        name: name,
        cnpj: cnpj,
      },
    });

    if (company) {
      return company;
    }

    return null;
  }
}

export default CompanyRepository;