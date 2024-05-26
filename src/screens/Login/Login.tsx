/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { Loading } from '../../components/Loader/Loading';
import { Header } from 'components/Header/Header';
import { ScreenTypes } from 'components/Header/enum';
import { unmaskCpf } from 'Utils/utils';
import { AuthService } from 'Services/AuthService';

export const Login: React.FC = () => {
	const navigate = useNavigate();
	const authService = new AuthService();
	const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);
	const [password, setPassword] = useState<string>('');
	const [disabled, setDisabled] = useState<boolean>(true);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [cpf, setCpf] = useState('');
	const isValidCpf = unmaskCpf(cpf)?.length === 11;

	useEffect(() => {
		const hasError = !isValidCpf || !Boolean(password.length);

		setDisabled(hasError);
	}, [cpf, password]);

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
		const timeStamp = now.getTime();
		const userData = {
			identifier: unmaskCpf(cpf),
			password: password,
			timestamp: Number(timeStamp),
		};
		try {
			const response = await authService.AuthUser(userData);

			if (response.status === 200) {
				handleClean();
				navigate('/dashboard');
			} else {
				toast.error(response?.message as string);
			}
		} catch (e: any) {
			toast.error(e?.message as string);
		} finally {
			setIsLoading(false);
		}
	};

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
							<button
								className={`button-login ${disabled ? 'disabled' : 'active'}`}
								disabled={disabled}
							>
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
