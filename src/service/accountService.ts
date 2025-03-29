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
  const account = await AccountRepository.insertAccount(
    description,
    amount,
    dueDate,
    status,
    type,
    companyId,
    userId
  );

  return account;
};

export const getAll = async () => {
  const account = AccountRepository.getAll();
  return account;
}
