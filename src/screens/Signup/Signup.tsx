/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import './Signup.css';
import { IErrorSignup } from './enum';
import { formatCellphone, isValidEmail } from '../../Utils/utils';

const errorInitialValues = {
	error_name: false,
	error_password: false,
	error_isSamePassword: false,
	error_email: false,
	error_cellphone: false,
};
export const Signup: React.FC = () => {
	const [name, setName] = useState<string>('');
	const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);
	const [password, setPassword] = useState<string>('');
	const [confirmPassword, setConfirmPassword] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [cellphone, setCellphone] = useState<string>('');
	const [disabled, setDisabled] = useState<boolean>(true);
	const [errorType, setErrorType] = useState<IErrorSignup>(errorInitialValues);
	const cpf = sessionStorage.getItem('identifier');

	useEffect(() => {
		const validateName = () => name.length > 3 && /\s/.test(name);
		const validatePassword = () =>
			/(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(
				password
			);
		const validateSamePassword = () => password === confirmPassword;
		const validateEmail = () => isValidEmail(email);
		const validateCellphone = () => cellphone.length === 16;

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
	const handleContinue = () => {
		console.log({
			name: name,
			identifier: cpf,
			email: email,
			password: password,
			confirmPassword: confirmPassword,
			amount: 0,
		});
	};
	return (
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
							{errorType.error_cellphone && 'Digite o número do seu celular'}
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
							{errorType.error_password && 'As senhas precisam ser as iguais'}
						</span>
					</div>
					<div className={`button ${disabled ? 'disabled' : 'active'}`}>
						<span
							className="buton-title"
							onClick={handleContinue}
						>
							Continuar
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};
