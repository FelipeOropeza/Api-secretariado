export class Account{
    id?: number;
    description: string;
    amount: number;
    dueDate: string;
    status? : string;
    type : string;
    companyId? : number;
    userId?: number;

    constructor(description: string, amount: number, dueDate: string, type: string){
        this.description = description;
        this.amount = amount;
        this.dueDate = dueDate;
        this.type = type;
    }
}