import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import * as z from 'zod';

import { SpecialTitle, Text, Title } from '../../components/global.styles';
import Button from '../../components/Button/button.component';
import SignupDesign from '../../components/Designs/SignupDesign/signup.design';
import { Actions, Container, InputControl } from './Login.styles';
import { Form } from 'screens/Signup/Signup.styles';
import { RoutesEnum } from 'routes/routes.enum';
import { AuthService } from 'services/auth.service';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import ReactInputMask from 'react-input-mask';

type Inputs = {
  cpf: string;
  password: string;
};

const Login = () => {
  const authService = new AuthService();
  const navigate = useNavigate();

  const schema = z.object({
    cpf: z.string().regex(/[0-9]{3}[.][0-9]{3}[.][0-9]{3}[-][0-9]{2}/),
    password: z
      .string()
      .trim()
      .min(8, { message: 'A senha é preciso ter, pelo menos, 8 caracteres' }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const now = new Date();
    const timeStamp = now.getTime();
    const userData = {
      identifier: data.cpf,
      password: data.password,
      timestamp: Number(timeStamp),
    };

    try {
      const response = await authService.AuthUser(userData);

      if (response.status === 200) {
        sessionStorage.setItem('identifier', data.cpf || '');
        toast.success('Você foi autenticado, redirecionando...');
        setTimeout(() => {
          navigate(RoutesEnum.DASHBOARD_ROUTE);
          location.reload();
        }, 3000);
        const userTimestamp = JSON.parse(response.token as string);
        console.log(userTimestamp.exp - timeStamp);
      } else if (response.status === 401) {
        toast.error('CPF ou senha estão incorretos.');
      } else {
        toast.error(response?.message as string);
      }
    } catch (e) {
      const error = e as AxiosError;
      toast.error(error?.message as string);
    }
  };

  return (
    <Container>
      <SignupDesign />

      <Title>
        <SpecialTitle>Login</SpecialTitle>
        <Text>
          Bem-vindo de volta! Por favor, logue para acessar sua conta.
        </Text>
      </Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputControl>
          <div>
            <ReactInputMask
              mask={'999.999.999-99'}
              placeholder="Digite seu CPF"
              className={errors.cpf?.message && 'error'}
              {...register('cpf')}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Digite sua senha"
              className={errors.password?.message && 'error'}
              {...register('password')}
            />
          </div>
        </InputControl>
        <Actions>
          <Button variant="purple">Logar</Button>
          <Link to={RoutesEnum.SIGNUP_ROUTE}>
            <Button variant="none" id="login">
              Cadastrar
            </Button>
          </Link>
        </Actions>
      </Form>
    </Container>
  );
};

export default Login;
