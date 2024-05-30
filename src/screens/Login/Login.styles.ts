import styled from 'styled-components';

export const SafeAreaView = styled.div`
	width: 100%;
	height: 100vh;
	padding-top: 20px;
	padding-bottom: 20px;
	background-color: #141416;
	overflow-y: auto;
`;

export const LogoContainer = styled.div`
	margin-bottom: 20px;
`;
export const Logo = styled.img`
	width: 50px;
	height: auto;
`;
export const LoginContainer = styled.div`
	display: flex;
	height: 1000px;
`;

export const LoginMobileContainer = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #141416;
	color: white;
`;

export const LoginBlock = styled.div`
	width: 100vw;
	background-image: url('../../assets/safra.jpg');
	background-size: cover;
	background-position: center;
	background-repeat: repeat;

	@media screen and (max-width: 600px) {
		flex-direction: column;
		width: 100vw;
	}
`;

export const LoginSecoundBlockLogin = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 80px;
	width: 100vw;

	@media screen and (min-width: 600px) {
		margin-top: 100px;
	}
`;

export const LoginField = styled.div`
	display: flex;

	width: 100vw;
	margin-top: 50px;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const LoginTitle = styled.span`
	font-weight: bold;
	font-size: large;
`;

export const LoginWrapperFirst = styled.div`
	display: flex;
	flex-direction: column;
`;

export const LoginWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 60px;
`;

export const FieldInputValid = styled.input`
	min-width: 280px;
	height: 50px;
	color: green;
	border: none;
	border-radius: 10px;
	background-color: #181818;
	border-bottom: 1px solid #535252;

	font-size: 16px;
	outline: none;
	box-sizing: border-box;
	position: relative;

	&:focus {
		border-bottom-color: green;
	}
`;

export const FieldInputValidPass = styled(FieldInputValid)``;

export const FieldInputInvalid = styled.input`
	min-width: 400px;
	width: 10%;
	color: red;
	height: 100%;
	border: none;
	border-bottom: 1px solid #535252;
	font-size: 16px;
	outline: none;
	box-sizing: border-box;
	position: relative;

	&:focus {
		border-bottom-color: rgb(241, 4, 4);
	}
`;

export const ErrorMessage = styled.div`
	color: red;
	margin-top: 5px;
`;

export const ButtonLogin = styled.button`
	display: flex;
	height: 48px;
	width: 200px;
	margin-top: 30px;
	justify-content: center;
	align-items: center;
	border-radius: 25px;
	color: aliceblue;
	background-color: #624aa7;
	border: none;
	font-weight: bold;

	&:hover {
		opacity: 0.5;
		cursor: pointer;
		background-color: #483d69;
	}

	&.disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	&.active {
		cursor: pointer;
		opacity: 1;
	}
`;
