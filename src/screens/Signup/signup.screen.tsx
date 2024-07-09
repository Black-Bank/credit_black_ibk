import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as z from 'zod';

import { SpecialTitle, Text, Title } from '../../components/global.styles';
import Button from '../../components/Button/button.component';
import SignupDesign from '../../components/Designs/SignupDesign/signup.design';
import { Actions, Container, Form } from './signup.styles';

import 'react-toastify/dist/ReactToastify.css';
import ReactInputMask from 'react-input-mask';
import { CreateUserData } from './signup.interface';

type Inputs = {
  fullName: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUp = () => {
  const schema = z
    .object({
      fullName: z
        .string()
        .trim()
        .min(1, { message: 'O nome é preciso ter, pelo menos, 2 caracteres.' }),
      phone: z
        .string()
        .regex(
          /\(?\b([0-9]{2,3}|0((x|[0-9]){2,3}[0-9]{2}))\)?\s*[0-9]{4,5}[- ]*[0-9]{4}\b/gm,
          {
            message: 'O celular está incorreto.',
          },
        ),
      email: z.string().email({ message: 'Este e-mail está inválido.' }),
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
    console.log(data);
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
            mask={'(99) 99999-9999'}
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
          <Link to={'/login'}>
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
