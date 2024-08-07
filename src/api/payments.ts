import axios from 'axios';
import { AUTHORIZATION_HEADER, BASE_URL } from 'config/env';

export const getPayments = async () => {
  const identifier = sessionStorage.getItem('identifier') as string;
  const apiUrl = `${BASE_URL}/pix/payments?identifier=${identifier}&page=0`;

  const headers = {
    'Content-Type': 'application/json',
    Authorization: AUTHORIZATION_HEADER,
  };

  try {
    const response = await axios.get(apiUrl, { headers });

    if (!response.data) {
      return { code: 500, message: 'erro ao carregar dados' };
    }

    return response.data;
  } catch (error) {
    console.log(error);
    return { code: 500, message: 'erro ao carregar dados' };
  }
};
