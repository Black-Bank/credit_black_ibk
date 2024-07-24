import axios from 'axios';
import { AUTHORIZATION_HEADER, BASE_URL } from 'config/env';

export const getPix = async () => {
  const apiUrl = `${BASE_URL}/pix/code`;

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
