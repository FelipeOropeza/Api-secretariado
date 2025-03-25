export class Company{
    id? : number;
    name : string;
    cnpj: string;

    constructor(name: string, cnpj: string){
        this.name = name;
        this.cnpj = cnpj;
    }
}