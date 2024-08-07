import { IAuthUser } from './user.interface';
import * as AuthAPI from '../api/Authenticate';
import { CryptoService } from './crypto.services';

export class AuthService {
  private cryptoService: CryptoService;

  constructor() {
    this.cryptoService = new CryptoService();
  }
  public AuthUser = async (user: IAuthUser) => {
    const res = await AuthAPI.Authenticate(user);

    sessionStorage.setItem('accessToken', res?.token || '');
    const token = res.token ? this.cryptoService.decrypt(res.token) : undefined;
    const result = {
      status: res.status,
      token: token,
      message: res?.message,
    };
    return result;
  };
}
