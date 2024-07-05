import CryptoJS from 'crypto-js';
import { AUTH_PRIVATE_KEY, IV } from '../config/env';

export class CryptoService {
	public encrypt(plaintext: string): string {
		const key = CryptoJS.enc.Hex.parse(AUTH_PRIVATE_KEY);

		const iv = CryptoJS.enc.Hex.parse(IV);

		const ciphertext = CryptoJS.AES.encrypt(plaintext, key, { iv }).toString();
		return ciphertext;
	}

	public decrypt(ciphertext: string): string {
		const key = CryptoJS.enc.Hex.parse(AUTH_PRIVATE_KEY);

		const iv = CryptoJS.enc.Hex.parse(IV);

		const bytes = CryptoJS.AES.decrypt(ciphertext, key, { iv });

		const plaintext = bytes.toString(CryptoJS.enc.Utf8);

		return plaintext;
	}
}
