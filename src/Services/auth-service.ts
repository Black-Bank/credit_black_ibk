import { IAuthUser } from './interfaces';
import * as AuthAPI from '../api/authenticate';
import { CryptoService } from './crypto-service';

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
