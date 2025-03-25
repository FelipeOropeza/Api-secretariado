export class User {
  id?: number;
  name: string;
  ra: string;
  password: string;
  companyId?: number;

  constructor(ra: string, nome: string, senha: string) {
    this.ra = ra;
    this.name = nome;
    this.password = senha;
  }
}
