import { ICreateDeposit } from './deposit.interface';
import * as DepositAPI from '../api/deposit';

export class CreateDepositService {
  public createUser = async (deposit: ICreateDeposit) => {
    const res = await DepositAPI.deposit(deposit);
    return res;
  };
}
