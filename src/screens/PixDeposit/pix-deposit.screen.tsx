import { CircleButton, SpecialTitle } from 'components/global.styles';
import {
  IoArrowBackCircleSharp,
  IoArrowForwardCircleSharp,
} from 'react-icons/io5';
import {
  Actions,
  CodeContainer,
  Container,
  KeyContainer,
} from './pix-deposit.styles';
import { CurrencyInput } from 'react-currency-mask';
import { useContext, useEffect, useState } from 'react';
import { getPix } from 'api/pix';

import Button from 'components/Button/button.component';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { ExtractContext } from 'context/extract.context';
import { UserService } from 'services/user.service';
import { IUser } from 'screens/Dashboard/dashboard.interface';
import { getCurrentDateFormatted } from 'utils/date.util';
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export const PixDeposit = () => {
  const [step, setStep] = useState(1);

  const [base64, setBase64] = useState('');
  const [pixKey, setPixKey] = useState('');
  const [me, setMe] = useState<IUser>();
  const [value, setValue] = useState(0);

  const [imageUrl, setImageUrl] = useState('');

  const context = useContext(ExtractContext);

  const userService = UserService.getInstance();

  if (!context) {
    throw new Error('ChildComponent must be used within an AppProvider');
  }

  const { addItem } = context;

  const navigate = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      const { code, base64QRCode } = await getPix();
      const userData = await userService.getMe();

      setBase64(base64QRCode);
      setPixKey(code);
      setMe(userData);
    };

    const createImageUrl = () => {
      try {
        if (base64.startsWith('data:image')) {
          setImageUrl(base64);
        } else {
          const dataUrl = `data:image/png;base64,${base64}`;
          setImageUrl(dataUrl);
        }
      } catch (err) {
        console.error('Erro ao processar o base64:', err);
      }
    };

    fetch();
    createImageUrl();
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleAddExtract = () => {
    const date = getCurrentDateFormatted();

    addItem({
      id: Math.random() * 5000,
      type: 'pix',
      name: me?.name as string,
      value: value,
      date,
    });

    setTimeout(() => {
      navigate('/dashboard');
    }, 5000);
  };

  type Inputs = {
    value: number;
  };

  const schema = z.object({
    value: z.number().min(0.01),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    nextStep();
    setValue(data.value);
  };

  const handleCopyKey = () => {
    navigator.clipboard.writeText(pixKey);
    toast.success('Chave copiada');
  };

  switch (step) {
    case 1:
      return (
        <Container>
          <h2>Qual o valor gostaria de depositar usando o Pix?</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <CurrencyInput
              onChangeValue={function (): void {}}
              {...register('value', {
                setValueAs(value: string): number {
                  if (!value) return 0;
                  const cleanedValue = value.replace(/R\$\s?/g, '');
                  const dotValue = cleanedValue
                    .replace(/\./g, '')
                    .replace(',', '.');
                  const numberValue = parseFloat(dotValue);
                  return isNaN(numberValue) ? 0 : numberValue;
                },
              })}
              max={1000000000}
              InputElement={
                <input
                  placeholder="R$ 0,00"
                  className={errors.value?.message ? 'error' : ''}
                />
              }
            />
            <Actions $buttontype="next">
              <CircleButton>
                <IoArrowForwardCircleSharp />
              </CircleButton>
            </Actions>
          </form>
        </Container>
      );
    case 2:
      return (
        <Container>
          <h2>Tudo certo até aqui!</h2>
          <p>
            Agora, apenas pague escaneando o QR Code, ou pela chave encontrada
            abaixo.
          </p>
          <CodeContainer>
            <img src={imageUrl} alt="qr-code" />
          </CodeContainer>
          <KeyContainer>
            <p>{pixKey}</p>
            <Button variant="purple" onClick={handleCopyKey}>
              Clique aqui para copiar
            </Button>
          </KeyContainer>
          <Actions $buttontype="back">
            <CircleButton onClick={prevStep}>
              <IoArrowBackCircleSharp />
            </CircleButton>
            <CircleButton
              onClick={() => {
                window.scrollTo(0, 0);
                nextStep();
                handleAddExtract();
              }}
            >
              <IoArrowForwardCircleSharp />
            </CircleButton>
          </Actions>
        </Container>
      );
    case 3:
      return (
        <Container>
          <h2>Tudo certo!</h2>
          <p>
            Nós recebemos o seu Pix e deverá estar na sua conta em até 24 horas.
            Obrigado por confiar na <SpecialTitle>CreditBlack</SpecialTitle>!
          </p>
          <Actions $buttontype="back">
            <CircleButton onClick={() => navigate('/dashboard')}>
              <IoArrowBackCircleSharp />
            </CircleButton>
          </Actions>
        </Container>
      );
    default:
      return <></>;
  }
};
