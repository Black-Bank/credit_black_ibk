import { getMe } from 'api/user';
import { CryptoService } from './crypto.services';
import { IUser } from 'screens/Dashboard/dashboard.interface';

export class UserService {
  private static instance: UserService;
  private cachedUser: IUser | null = null;
  private cryptoService: CryptoService;

  private constructor() {
    this.cryptoService = new CryptoService();
  }

  public static getInstance(): UserService {
    if (!UserService.instance) {
      UserService.instance = new UserService();
    }
    return UserService.instance;
  }
  public setLoan(value: number): void {
    if (this.cachedUser) {
      this.cachedUser.loanValue = value;
    }
  }

  private async fetchUser(): Promise<IUser> {
    const user = await getMe();
    return user;
  }

  public async getMe(): Promise<IUser> {
    if (this.cachedUser) {
      return this.cachedUser;
    }

    try {
      const user = await this.fetchUser();
      this.cachedUser = user;
      return user;
    } catch (error) {
      console.error('Error fetching user:', error);
      throw error;
    }
  }

  public getAccessToken() {
    const encryptedToken = sessionStorage.getItem('accessToken');
    if (encryptedToken) {
      const token = this.cryptoService.decrypt(encryptedToken);
      const { accessToken } = JSON.parse(token);
      return accessToken;
    }
    return null;
  }
}
