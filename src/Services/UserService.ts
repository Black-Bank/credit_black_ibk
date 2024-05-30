import { CryptoService } from './CryptoService';

export class UserService {
	cryptoService: CryptoService;
	constructor() {
		this.cryptoService = new CryptoService();
	}

	getMe() {
		const encryptedToken = sessionStorage.getItem('accessToken');
		if (encryptedToken) {
			const token = this.cryptoService.decrypt(encryptedToken);
			const response = JSON.parse(token);
			return response;
		}
		return null;
	}
}
