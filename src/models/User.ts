export class User {
  id?: number;
  name: string;
  ra: string;
  password: string;

  constructor(ra: string, nome: string, senha: string) {
    this.ra = ra;
    this.name = nome;
    this.password = senha;
  }
}
