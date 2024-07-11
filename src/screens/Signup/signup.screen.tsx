import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as z from 'zod';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { SpecialTitle, Text, Title } from '../../components/global.styles';
import Button from '../../components/Button/button.component';
import SignupDesign from '../../components/Designs/SignupDesign/signup.design';
import { Actions, Container, Form } from './signup.styles';

import 'react-toastify/dist/ReactToastify.css';
import ReactInputMask from 'react-input-mask';
import { CreateUserData } from './signup.interface';
import { CreateUserService } from 'services/create-user-service';
import { AxiosError } from 'axios';
import { useEffect } from 'react';
import { RoutesEnum } from 'layouts/default.enum';

type Inputs = {
  fullName: string;
  phone: string;
  email: string;
  cpf: string;
  password: string;
  confirmPassword: string;
};

const SignUp = () => {
  const createUserService = new CreateUserService();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const schema = z
    .object({
      fullName: z
        .string()
        .trim()
        .min(1, { message: 'O nome é preciso ter, pelo menos, 2 caracteres.' }),
      phone: z.string().regex(/.[0-9]{2}. [0-9].[0-9]{4}[-][0-9]{4}/),
      email: z.string().email({ message: 'Este e-mail está inválido.' }),
      cpf: z.string().regex(/[0-9]{11}/),
      password: z
        .string()
        .trim()
        .min(8, { message: 'A senha é preciso ter, pelo menos, 8 caracteres' }),
      confirmPassword: z
        .string()
        .trim()
        .min(8, { message: 'A senha é preciso ter, pelo menos, 8 caracteres' }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: 'As senhas não coincidem.',
      path: ['confirmPassword'],
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<Inputs> = async (data: CreateUserData) => {
    const now = new Date();
    const isoDateString = now.toISOString();
    const userData = {
      name: data.fullName,
      identifier: data.cpf,
      email: data.email,
      cpf: data.cpf,
      password: data.password,
      confirmPassword: data.confirmPassword,
      amount: 0,
      cellphone: data.phone,
      createdAt: isoDateString,
    };

    try {
      const response = await createUserService.createUser(userData);

      if (response.status === 200) {
        toast.success('Usuário criado com sucesso');
      } else if (response.status === 409) {
        toast.error('Este usuário já existe');
      } else {
        toast.error(response.message as string);
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
        <SpecialTitle>Cadastro</SpecialTitle>
        <Text>
          Junte-se à nossa comunidade hoje! Crie uma conta para desbloquear
          recursos exclusivos e experiências personalizadas.
        </Text>
      </Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            placeholder="Nome completo"
            className={errors.fullName?.message && 'error'}
            {...register('fullName')}
          />
        </div>
        <div>
          <ReactInputMask
            mask={'(99) 9 9999-9999'}
            placeholder="Celular"
            className={errors.phone?.message && 'error'}
            {...register('phone')}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="E-mail"
            className={errors.email?.message && 'error'}
            {...register('email')}
          />
        </div>
        <div>
          <ReactInputMask
            mask={'99999999999'}
            placeholder="CPF"
            className={errors.cpf?.message && 'error'}
            {...register('cpf')}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Senha"
            className={errors.password?.message && 'error'}
            {...register('password')}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Confirmar senha"
            className={errors.confirmPassword?.message && 'error'}
            {...register('confirmPassword')}
          />
        </div>
        <Actions>
          <Button variant="purple">Cadastrar</Button>
          <Link to={RoutesEnum.LOGIN_ROUTE}>
            <Button variant="none" id="login">
              Logar
            </Button>
          </Link>
        </Actions>
      </Form>
    </Container>
  );
};

export default SignUp;
