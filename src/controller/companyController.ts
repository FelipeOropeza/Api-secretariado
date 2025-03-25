import { Request, Response } from "express";
import { createCompany } from "../service/companyService";

class CompanyController{
    static async companyRegistration(req: Request, res: Response): Promise<void> {
        const { name, cnpj} = req.body;

        try{
            const company = await createCompany(name, cnpj);

            if (company) {
                res.status(200).json({
                  message: "Empresa criada com sucesso!",
                  user: company,
                });
              } else {
                res.status(401).json({ message: "Credenciais inválidas!" });
              }
        } catch(error){
            res.status(500).json({ message: "Erro ao cadastra empresa", error });
        }
    }
}

export default CompanyController;