export const unmaskCpf = (cpf: string) => {
	return cpf.replace(/[.-]/g, '');
};

export const isValidEmail = (email: string) => {
	const atIndex = email.indexOf('@');
	const dotComIndex = email.lastIndexOf('.com');

	return atIndex !== -1 && dotComIndex !== -1 && dotComIndex > atIndex;
};
