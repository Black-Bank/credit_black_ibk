export const unmaskCpf = (cpf: string) => {
	return cpf.replace(/[.-]/g, '');
};

export const isValidEmail = (email: string) => {
	const atIndex = email.indexOf('@');
	const dotComIndex = email.lastIndexOf('.com');

	return atIndex !== -1 && dotComIndex !== -1 && dotComIndex > atIndex;
};

export const formatCellphone = (input: string) => {
	const cleaned = ('' + input).replace(/\D/g, '');
	const match = cleaned.match(/^(\d{2})(\d{1})(\d{4})(\d{4})$/);

	if (match) {
		return '(' + match[1] + ') ' + match[2] + ' ' + match[3] + '-' + match[4];
	}

	return input;
};

export const formatMoney = (value: number) => {
	return value.toLocaleString('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	});
};
