import axios from 'axios';
import { CryptoService } from '../services/crypto.services';
import { AUTHORIZATION_HEADER, BASE_URL } from '../config/env';
import { ICreateUser } from '../services/user.interface';

export const createUser = async (userData: ICreateUser) => {
  const cryptoService = new CryptoService();
  const apiUrl = `${BASE_URL}/signup/create-user`;

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
    const response = await axios.post(apiUrl, requestBody, { headers });

    if (!response.data) {
      throw new Error('Erro ao criar usuário');
    }

    return response.data;
  } catch (error) {
    throw new Error('Erro ao criar usuário');
  }
};
