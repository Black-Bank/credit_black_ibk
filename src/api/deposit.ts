import axios from 'axios';
import { CryptoService } from '../services/crypto.services';
import { AUTHORIZATION_HEADER, BASE_URL } from '../config/env';
import { ICreateDeposit } from 'services/deposit.interface';

export const deposit = async (depositData: ICreateDeposit) => {
  const cryptoService = new CryptoService();
  const apiUrl = `${BASE_URL}/pix/payment`;

  const headers = {
    'Content-Type': 'application/json',
    Authorization: AUTHORIZATION_HEADER,
  };
  const depositDataString = JSON.stringify(depositData);
  const token = cryptoService.encrypt(depositDataString);
  const requestBody = {
    token: token,
  };

  try {
    const response = await axios.post(apiUrl, requestBody, { headers });

    if (!response.data) {
      throw new Error('Erro ao criar um depósito');
    }

    return response.data;
  } catch (error) {
    throw new Error('Erro ao criar um depósito');
  }
};
