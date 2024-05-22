export const unmaskCpf = (cpf: string) => {
	return cpf.replace(/[.-]/g, '');
};
