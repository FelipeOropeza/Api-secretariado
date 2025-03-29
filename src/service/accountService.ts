import AccountRepository from "../repositories/accountRepository";

export const createAccount = async (
  description: string,
  amount: number,
  dueDate: string,
  status: string,
  type: string,
  companyId: number,
  userId: number
) => {
  const today = new Date().toISOString().split("T")[0]; 
  const updatedStatus = dueDate === today ? "recebido" : status;

  const account = await AccountRepository.insertAccount(
    description,
    amount,
    dueDate,
    updatedStatus,
    type,
    companyId,
    userId
  );

  return account;
};

export const getAll = async () => {
  const account = AccountRepository.getAll();
  return account;
};
