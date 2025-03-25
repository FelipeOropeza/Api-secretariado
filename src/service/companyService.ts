import CompanyRepository from "../repositories/companyRepository"

export const createCompany = async(name: string, cnpj: string) => {
    const company = await CompanyRepository.insertCompany(name, cnpj)
    return company;
}