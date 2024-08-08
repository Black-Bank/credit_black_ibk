import { ICreateDeposit, IPayments } from './deposit.interface';
import * as DepositAPI from '../api/deposit';
import { getPayments } from 'api/payments';

export class CreateDepositService {
  private cachedPayments: IPayments | null = null;

  public createDeposit = async (deposit: ICreateDeposit) => {
    const res = await DepositAPI.deposit(deposit);
    return res;
  };

  private async fetchPayments(page: number): Promise<IPayments> {
    const payments = await getPayments(page);
    return payments;
  }

  public async getPayments(page: number): Promise<IPayments> {
    if (this.cachedPayments) {
      return this.cachedPayments;
    }

    try {
      const payments = await this.fetchPayments(page);
      this.cachedPayments = payments;
      return payments;
    } catch (error) {
      console.error('Error fetching user:', error);
      throw error;
    }
  }
}
