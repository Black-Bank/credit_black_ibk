import { useState } from 'react';
import { Header } from '../../components/Header/Header';
import './Home.css';
import { unmaskCpf } from '../../Utils/utils';
import { useNavigate } from 'react-router-dom';
import { ScreenTypes } from 'components/Header/enum';

export const Home = () => {
	const navigate = useNavigate();

	const [cpf, setCpf] = useState('');

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
	const handleContinue = () => {
		if (isValidCpf) {
			sessionStorage.setItem('identifier', unmaskCpf(cpf));
			navigate('/signup');
		}
	};

	const isValidCpf = unmaskCpf(cpf)?.length === 11;

	return (
		<>
			<Header screen={ScreenTypes.SCREEN_HOME} />

			<div className="home-container">
				<div className="info-container">
					<span className="info-title">Coloque sua riqueza sobre a rocha</span>
					<span className="info-description">
						Não retire o dinheiro do seu país
					</span>
					<span className="info-description">
						Retire o país do seu dinheiro
					</span>
				</div>
				<div className="create-account-card">
					<span className="info-create-account">
						Crie sua conta Credit Black
					</span>
					<div className="info-document">
						<input
							type="text"
							value={cpf}
							onChange={handleCpfChange}
							placeholder="Digite seu CPF"
							className={isValidCpf ? 'cpf-input-valid' : 'cpf-input-invalid'}
						/>
					</div>
					<button className={`button ${!isValidCpf ? 'disabled' : 'active'}`}>
						<span
							className="buton-title"
							onClick={handleContinue}
						>
							Continuar
						</span>
					</button>
				</div>
			</div>
		</>
	);
};
