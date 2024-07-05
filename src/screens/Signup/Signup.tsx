/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Signup.css';
import { IErrorSignup } from './enum';
import { formatCellphone, isValidEmail, unmaskCpf } from '../../utils/utils';
import { CreateUserService } from '../../services/create-user-service';
import { useNavigate } from 'react-router-dom';
import { Loading } from '../../components/Loader/loading';
import logo from '../../assets/logo.svg';
import eye from '../../assets/eye.svg';
import eyeOff from '../../assets/eye-off.svg';
import {
	ButtonSignup,
	Eye,
	FieldInputValid,
	FieldInputValidPass,
	Logo,
	LogoContainer,
	PassContainer,
	PassWrapper,
	SignupField,
	SignupMobileContainer,
	SignupTitle,
	SignupWrapper,
} from './signup.styles';

const errorInitialValues = {
	error_name: false,
	error_password: false,
	error_isSamePassword: false,
	error_email: false,
	error_cellphone: false,
};

export const Signup = () => {
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
	const [errorType, setErrorType] = useState<IErrorSignup>(errorInitialValues);
	const cpf = sessionStorage.getItem('identifier') as string;

	const [isEye, setIsEye] = useState<boolean>(false);
	const [windowSize, setWindowSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	useEffect(() => {
		const handleResize = () => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	useEffect(() => {
		const validateName = () => name?.length > 3 && /\s/.test(name);
		const validatePassword = () =>
			/(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(
				password
			);
		const validateSamePassword = () => password === confirmPassword;
		const validateEmail = () => isValidEmail(email);
		const validateCellphone = () => cellphone?.length === 16;

		if (!cpf) {
			navigate('/');
		}

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

	const handleCellphone = (input: string) => {
		const formattedInput = input.replace(/\D/g, '');
		const formattedCellphone = formatCellphone(formattedInput);
		setCellphone(formattedCellphone);
	};

	const handleName = (name: string) => {
		setName(name);
	};

	const handleEmail = (email: string) => {
		setEmail(email);
	};
	const handlePassword = (password: string) => {
		setPassword(password);
	};
	const handleConfirmPassword = (password: string) => {
		setConfirmPassword(password);
	};
	const handleEye = () => {
		setIsEye(!isEye);
	};
	const handleClean = () => {
		setPassword('');
		setEmail('');
		setCellphone('');
		setConfirmPassword('');
		setName('');
	};
	const handleContinue = async () => {
		setIsLoading(true);
		const now = new Date();
		const isoDateString = now.toISOString();
		const userData = {
			name: name,
			identifier: unmaskCpf(cpf),
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
				navigate('/Signup');
			} else {
				toast.error(response.message as string);
			}
		} catch (e: any) {
			toast.error(e?.message as string);
		} finally {
			setIsLoading(false);
		}
	};

	const isMobile = windowSize.width <= 700;
	return (
		<>
			{isLoading && <Loading />}
			{isMobile ? (
				<SignupMobileContainer>
					<div className="Signup-secound-block-Signup">
						<SignupField>
							<LogoContainer>
								<Logo
									src={logo}
									alt="Logo Credit Black"
								/>
							</LogoContainer>

							<SignupTitle>Cadastre sua conta</SignupTitle>
							<SignupWrapper>
								<FieldInputValid
									type="text"
									value={name}
									onChange={(e) => handleName(e.target.value)}
									placeholder="Nome Completo"
									maxLength={16}
									className={
										!errorType.error_name
											? 'field-input-valid'
											: 'field-input-invalid'
									}
								/>
								<span className="error-message">
									{errorType.error_name && 'Digite o seu nome completo'}
								</span>
							</SignupWrapper>
							<SignupWrapper>
								<FieldInputValid
									type="text"
									value={cellphone}
									onChange={(e) => handleCellphone(e.target.value)}
									placeholder="Celular"
									maxLength={16}
									className={
										!errorType.error_name
											? 'field-input-valid'
											: 'field-input-invalid'
									}
								/>
								<span className="error-message">
									{errorType.error_cellphone &&
										'Digite o número do seu celular'}
								</span>
							</SignupWrapper>
							<SignupWrapper>
								<FieldInputValid
									type="text"
									value={email}
									onChange={(e) => handleEmail(e.target.value)}
									placeholder="Email"
									className={
										!errorType.error_name
											? 'field-input-valid'
											: 'field-input-invalid'
									}
								/>
								<span className="error-message">
									{errorType.error_email && 'Digite o seu email'}
								</span>
							</SignupWrapper>

							<PassContainer>
								<PassWrapper>
									<FieldInputValidPass
										type={!isEye ? 'password' : 'text'}
										value={password}
										onChange={(e) => handlePassword(e.target.value)}
										placeholder="Senha"
									/>
									{!isEye ? (
										<Eye
											src={eyeOff}
											alt="Esconder senha"
											onClick={handleEye}
										/>
									) : (
										<Eye
											src={eye}
											alt="Esconder senha"
											onClick={handleEye}
										/>
									)}
									<span className="error-message">
										{errorType.error_password && 'Mínimo 8 Caracteres'}
									</span>
									<span className="error-message">
										{errorType.error_password &&
											'letras, números e caracteres especiais'}
									</span>
								</PassWrapper>
							</PassContainer>
							<PassContainer>
								<PassWrapper>
									<FieldInputValidPass
										type={!isEye ? 'password' : 'text'}
										value={confirmPassword}
										onChange={(e) => handleConfirmPassword(e.target.value)}
										placeholder="Confirmar Senha"
									/>
									{!isEye ? (
										<Eye
											src={eyeOff}
											alt="Esconder senha"
											onClick={handleEye}
										/>
									) : (
										<Eye
											src={eye}
											alt="Esconder senha"
											onClick={handleEye}
										/>
									)}
									<span className="error-message">
										{errorType.error_isSamePassword &&
											'As senhas precisam ser as iguais'}
									</span>
								</PassWrapper>
							</PassContainer>

							{!isLoading && (
								<>
									<ButtonSignup
										className={`button-Signup ${
											disabled ? 'disabled' : 'active'
										}`}
										disabled={disabled}
									>
										<span
											className="button-title"
											onClick={handleContinue}
										>
											Continuar
										</span>
									</ButtonSignup>
								</>
							)}
						</SignupField>
					</div>
				</SignupMobileContainer>
			) : (
				<div className="signup-container">
					<div className="signup-block"></div>
					<div className="signup-secound-block">
						<div className="signup-field">
							<div className="signup-wrapper-first">
								<input
									type="text"
									value={name}
									onChange={(e) => handleName(e.target.value)}
									placeholder="Nome completo"
									className={
										!errorType.error_name
											? 'field-input-valid'
											: 'field-input-invalid'
									}
								/>
								<span className="error-message">
									{errorType.error_name && 'Digite o seu nome completo'}
								</span>
							</div>

							<div className="signup-wrapper">
								<input
									type="tel"
									value={cellphone}
									onChange={(e) => handleCellphone(e.target.value)}
									placeholder="Celular"
									maxLength={11}
									className={
										!errorType.error_cellphone
											? 'field-input-valid'
											: 'field-input-invalid'
									}
								/>
								<span className="error-message">
									{errorType.error_cellphone &&
										'Digite o número do seu celular'}
								</span>
							</div>
							<div className="signup-wrapper">
								<input
									type="text"
									value={email}
									onChange={(e) => handleEmail(e.target.value)}
									placeholder="Email"
									className={
										!errorType.error_email
											? 'field-input-valid'
											: 'field-input-invalid'
									}
								/>
								<span className="error-message">
									{errorType.error_email && 'Digite o seu email'}
								</span>
							</div>
							<div className="signup-wrapper">
								<input
									type={hiddenPassword ? 'password' : 'text'}
									value={password}
									onChange={(e) => handlePassword(e.target.value)}
									placeholder="Senha"
									className={
										!errorType.error_password
											? 'field-input-valid'
											: 'field-input-invalid'
									}
								/>
								<span className="error-message">
									{errorType.error_password && 'Mínimo 8 Caracteres'}
								</span>
								<span className="error-message">
									{errorType.error_password &&
										'letras, números e caracteres especiais'}
								</span>
							</div>
							<div className="signup-wrapper">
								<input
									type={hiddenPassword ? 'password' : 'text'}
									value={confirmPassword}
									onChange={(e) => handleConfirmPassword(e.target.value)}
									placeholder="Confirmação de Senha"
									className={
										!errorType.error_isSamePassword
											? 'field-input-valid'
											: 'field-input-invalid'
									}
								/>
								<span className="error-message">
									{errorType.error_isSamePassword &&
										'As senhas precisam ser as iguais'}
								</span>
							</div>
							{!isLoading && (
								<button
									className={`button ${disabled ? 'disabled' : 'active'}`}
								>
									<span
										className="button-title"
										onClick={handleContinue}
									>
										Continuar
									</span>
								</button>
							)}
						</div>
					</div>
				</div>
			)}
		</>
	);
};
