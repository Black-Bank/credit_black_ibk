import { IAuthUser } from './interfaces';
import * as AuthAPI from '../api/Authenticate';

export class AuthService {
	public AuthUser = async (user: IAuthUser) => {
		const res = await AuthAPI.Authenticate(user);
		return res;
	};
}
