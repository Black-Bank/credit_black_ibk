export interface ICreateUser {
	name: string;
	identifier: string;
	email: string;
	password: string;
	confirmPassword: string;
	amount: number;
	cellphone: string;
	createdAt: string;
}

export interface IAuthUser {
	identifier: string;
	password: string;
	timestamp: number;
}
