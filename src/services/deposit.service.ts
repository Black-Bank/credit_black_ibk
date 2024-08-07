import { ICreateDeposit } from './deposit.interface';
import * as DepositAPI from '../api/deposit';
import { getPayments } from 'api/payments';

export class CreateDepositService {
  private cachedPayments: ICreateDeposit[] | null = null;

  public createUser = async (deposit: ICreateDeposit) => {
    const res = await DepositAPI.deposit(deposit);
    return res;
  };

  private async fetchPayments(): Promise<ICreateDeposit[]> {
    const payments = await getPayments();
    return payments;
  }

  public async getPayments(): Promise<ICreateDeposit[]> {
    if (this.cachedPayments) {
      return this.cachedPayments;
    }

    try {
      const payments = await this.fetchPayments();
      this.cachedPayments = payments;
      return payments;
    } catch (error) {
      console.error('Error fetching user:', error);
      throw error;
    }
  }
}
