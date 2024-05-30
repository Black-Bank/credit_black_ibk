/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
	LoginContainer,
	LoginMobileContainer,
	LoginBlock,
	LoginSecoundBlockLogin,
	LoginField,
	LoginTitle,
	LoginWrapper,
	LoginWrapperFirst,
	FieldInputValid,
	FieldInputValidPass,
	ButtonLogin,
	SafeAreaView,
	Logo,
	LogoContainer,
} from './Login.styles';
import { useNavigate } from 'react-router-dom';
import { Loading } from '../../components/Loader/Loading';
import { Header } from 'components/Header/Header';
import { ScreenTypes } from 'components/Header/enum';
import { unmaskCpf } from 'Utils/utils';
import { AuthService } from 'Services/AuthService';
import logo from '../../assets/logo.svg';

export const Login: React.FC = () => {
	const navigate = useNavigate();
	const authService = new AuthService();
	const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);
	const [password, setPassword] = useState<string>('');
	const [disabled, setDisabled] = useState<boolean>(true);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [cpf, setCpf] = useState('');
	const [windowWidth, setWindowWidth] = useState<number>(
		Number(window.innerWidth)
	);
	const [windowHeight, setWindowHeight] = useState<number>(
		Number(window.innerHeight)
	);

	const isValidCpf = unmaskCpf(cpf)?.length === 11;

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(Number(window.innerWidth));
			setWindowHeight(Number(window.innerHeight));
		};

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

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

	const isMobile = windowWidth <= 768;

	return (
		<SafeAreaView>
			{isLoading && <Loading />}
			<LoginMobileContainer>
				<div className="login-secound-block-login">
					<LoginField>
						<LogoContainer>
							<Logo
								src={logo}
								alt="Logo Credit Black"
							/>
						</LogoContainer>

						<LoginTitle>Acesse sua conta</LoginTitle>
						<LoginWrapper>
							<FieldInputValid
								type="text"
								value={cpf}
								onChange={(e) => handleCpfChange(e)}
								placeholder="Digite seu CPF"
								maxLength={16}
								className={isValidCpf ? '' : 'field-input-invalid'}
							/>
						</LoginWrapper>

						<LoginWrapper>
							<FieldInputValidPass
								type={hiddenPassword ? 'password' : 'text'}
								value={password}
								onChange={(e) => handlePassword(e.target.value)}
								placeholder="Senha"
							/>
						</LoginWrapper>

						{!isLoading && (
							<ButtonLogin
								className={`button-login ${disabled ? 'disabled' : 'active'}`}
								disabled={disabled}
							>
								<span
									className="button-title"
									onClick={handleContinue}
								>
									Entrar
								</span>
							</ButtonLogin>
						)}
					</LoginField>
				</div>
			</LoginMobileContainer>
		</SafeAreaView>
	);
};
