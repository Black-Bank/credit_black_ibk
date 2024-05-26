/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';
import { IErrorLogin } from './enum';
import { isValidEmail, unmaskCpf } from '../../Utils/utils';
import { CreateUserService } from '../../Services/CreateUserService';
import { useNavigate } from 'react-router-dom';
import { Loading } from '../../components/Loader/Loading';
import { Header } from 'components/Header/Header';
import { ScreenTypes } from 'components/Header/enum';

const errorInitialValues = {
	error_name: false,
	error_password: false,
	error_isSamePassword: false,
	error_email: false,
	error_cellphone: false,
};

export const Login: React.FC = () => {
	const createUserService = new CreateUserService();
	const navigate = useNavigate();
	const [name, setName] = useState<string>('');
	const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);
	const [password, setPassword] = useState<string>('');
	const [confirmPassword, setConfirmPassword] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [cellphone, setCellphone] = useState<string>('');
	const [disabled, setDisabled] = useState<boolean>(true);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [errorType, setErrorType] = useState<IErrorLogin>(errorInitialValues);
	const [cpf, setCpf] = useState('');

	useEffect(() => {
		const validateName = () => name?.length > 3 && /\s/.test(name);
		const validatePassword = () =>
			/(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(
				password
			);
		const validateSamePassword = () => password === confirmPassword;
		const validateEmail = () => isValidEmail(email);
		const validateCellphone = () => cellphone?.length === 16;

		const hasError =
			!validateName() ||
			!validatePassword() ||
			!validateSamePassword() ||
			!validateEmail() ||
			!validateCellphone();

		setErrorType({
			error_name: !validateName(),
			error_password: !validatePassword(),
			error_isSamePassword: !validateSamePassword(),
			error_email: !validateEmail(),
			error_cellphone: !validateCellphone(),
		});
		setDisabled(hasError);
	}, [name, email, password, confirmPassword, cellphone]);

	const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		let inputValue = e.target.value.replace(/\D/g, '');

		inputValue = inputValue.slice(0, 11);

		const cpfWithMask = inputValue.replace(
			/^(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/,
			(match, g1, g2, g3, g4) => {
				let maskedCpf = '';
				if (g1) maskedCpf += g1 + '.';
				if (g2) maskedCpf += g2 + '.';
				if (g3) maskedCpf += g3;
				if (g4) maskedCpf += '-' + g4;
				return maskedCpf;
			}
		);

		setCpf(cpfWithMask);
	};

	const handlePassword = (password: string) => {
		setPassword(password);
	};

	const handleClean = () => {
		setPassword('');
		setCpf('');
	};
	const handleContinue = async () => {
		setIsLoading(true);
		const now = new Date();
		const isoDateString = now.toISOString();
		const userData = {
			name: name,
			identifier: cpf,
			email: email,
			password: password,
			confirmPassword: confirmPassword,
			amount: 0,
			cellphone: cellphone,
			createdAt: isoDateString,
		};
		try {
			const response = await createUserService.createUser(userData);

			if (response.status === 200) {
				handleClean();
				navigate('/');
			} else {
				toast.error(response.message as string);
			}
		} catch (e: any) {
			toast.error(e?.message as string);
		} finally {
			setIsLoading(false);
		}
	};
	const isValidCpf = unmaskCpf(cpf)?.length === 11;

	return (
		<>
			{isLoading && <Loading />}

			<div className="login-container">
				<div className="login-block">
					<Header screen={ScreenTypes.SCREEN_LOGIN as string} />
				</div>
				<div className="login-secound-block-login">
					<div className="login-field">
						<span className="login-title">Acesse sua conta</span>
						<div className="login-wrapper">
							<input
								type="text"
								value={cpf}
								onChange={(e) => handleCpfChange(e)}
								placeholder="Digite seu CPF"
								maxLength={16}
								className={
									isValidCpf ? 'field-input-valid' : 'field-input-invalid'
								}
							/>
						</div>

						<div className="login-wrapper">
							<input
								type={hiddenPassword ? 'password' : 'text'}
								value={password}
								onChange={(e) => handlePassword(e.target.value)}
								placeholder="Senha"
								className={'field-input-valid-pass'}
							/>
						</div>

						{!isLoading && (
							<button className={`button ${disabled ? 'disabled' : 'active'}`}>
								<span
									className="button-title"
									onClick={handleContinue}
								>
									Entrar
								</span>
							</button>
						)}
					</div>
				</div>
			</div>
		</>
	);
};
