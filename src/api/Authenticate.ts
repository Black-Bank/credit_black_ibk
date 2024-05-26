import axios from 'axios';
import { CryptoService } from '../Services/CryptoService';
import { AUTHORIZATION_HEADER, BASE_URL } from '../config/env';
import { IAuthUser } from '../Services/interfaces';

export const Authenticate = async (userData: IAuthUser) => {
	const cryptoService = new CryptoService();
	const apiUrl = `${BASE_URL}/login/token`;

	const headers = {
		'Content-Type': 'application/json',
		Authorization: AUTHORIZATION_HEADER,
	};
	const userDataString = JSON.stringify(userData);
	const token = cryptoService.encrypt(userDataString);
	const requestBody = {
		token: token,
	};

	try {
		const response = await axios.put(apiUrl, requestBody, { headers });

		if (!response.data) {
			throw new Error('Erro ao autenticar usuário');
		}

		return response.data;
	} catch (error) {
		console.log(error);
		throw new Error('Erro ao criar usuário');
	}
};
