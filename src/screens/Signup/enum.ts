export enum ErrorTypes {
  INVALID_NAME = 'INVALID_NAME',
  INVALID_EMAIL = 'INVALID_EMAIL',
  INVALID_PASSWORD = 'INVALID_PASSWORD',
  PASSWORDS_DO_NOT_MATCH = 'PASSWORDS_DO_NOT_MATCH',
}

export interface IErrorSignup {
  error_name: boolean;
  error_password: boolean;
  error_isSamePassword: boolean;
  error_email: boolean;
  error_cellphone: boolean;
}
