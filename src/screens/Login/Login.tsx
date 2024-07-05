import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  LoginMobileContainer,
  LoginField,
  LoginTitle,
  LoginWrapper,
  FieldInputValid,
  FieldInputValidPass,
  ButtonLogin,
  SafeAreaView,
  Logo,
  LogoContainer,
  Eye,
  PassContainer,
  Link,
} from './login.styles';
import { useNavigate } from 'react-router-dom';
import { Loading } from '../../components/Loader/loading';
import { unmaskCpf } from 'utils/utils';
import { AuthService } from 'services/auth-service';
import logo from '../../assets/logo.svg';
import eye from '../../assets/eye.svg';
import eyeOff from '../../assets/eye-off.svg';
import { AxiosError } from 'axios';

export const Login = () => {
  const navigate = useNavigate();
  const authService = new AuthService();
  const [password, setPassword] = useState<string>('');
  const [disabled, setDisabled] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cpf, setCpf] = useState('');
  const [isEye, setIsEye] = useState<boolean>(false);

  const handleEye = () => {
    setIsEye(!isEye);
  };
  const isValidCpf = unmaskCpf(cpf)?.length === 11;

  useEffect(() => {
    const hasError = !isValidCpf || !password.length;

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
      },
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

        sessionStorage.setItem('identifier', unmaskCpf(cpf) || '');
        navigate('/dashboard');
      } else {
        toast.error(response?.message as string);
      }
    } catch (e) {
      const error = e as AxiosError;
      toast.error(error?.message as string);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView>
      {isLoading && <Loading />}
      <LoginMobileContainer>
        <div className="login-secound-block-login">
          <LoginField>
            <LogoContainer>
              <Logo src={logo} alt="Logo Credit Black" />
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

            <PassContainer>
              <FieldInputValidPass
                type={!isEye ? 'password' : 'text'}
                value={password}
                onChange={(e) => handlePassword(e.target.value)}
                placeholder="Senha"
              />
              {!isEye ? (
                <Eye src={eyeOff} alt="Esconder senha" onClick={handleEye} />
              ) : (
                <Eye src={eye} alt="Esconder senha" onClick={handleEye} />
              )}
            </PassContainer>

            {!isLoading && (
              <>
                <ButtonLogin
                  className={`button-login ${disabled ? 'disabled' : 'active'}`}
                  disabled={disabled}
                >
                  <span className="button-title" onClick={handleContinue}>
                    Entrar
                  </span>
                </ButtonLogin>
                <Link href="https://credit-black-ibk.vercel.app/">
                  Cadastre-se
                </Link>
              </>
            )}
          </LoginField>
        </div>
      </LoginMobileContainer>
    </SafeAreaView>
  );
};
