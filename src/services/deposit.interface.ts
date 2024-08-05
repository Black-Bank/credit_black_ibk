export interface ICreateDeposit {
  identifier: string;
  payID: string;
  createdAt: string;
  value: number;
  status: string;
  base64?: string;
}
