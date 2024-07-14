import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as z from 'zod';

import { SpecialTitle, Text, Title } from '../../components/global.styles';
import Button from '../../components/Button/button.component';
import SignupDesign from '../../components/Designs/SignupDesign/signup.design';
import { Actions, Container, InputControl } from './Login.styles';
import { Form } from 'screens/Signup/Signup.styles';
import { RoutesEnum } from 'routes/routes.enum';

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const schema = z.object({
    email: z.string().email({ message: 'Este e-mail está inválido.' }),
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
    console.log(data);
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
            <input
              type="text"
              placeholder="Digite seu e-mail"
              className={errors.email?.message && 'error'}
              {...register('email')}
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
