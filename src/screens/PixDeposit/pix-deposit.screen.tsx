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
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { getPix } from 'api/pix';

import Button from 'components/Button/button.component';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { ExtractContext } from 'context/extract.context';
import { UserService } from 'services/user.service';
import { IUser } from 'screens/Dashboard/dashboard.interface';
import { log } from 'console';
import { getCurrentDateFormatted } from 'utils/date.util';

export const PixDeposit = () => {
  const [value, setValue] = useState<number | string>(0);
  const [step, setStep] = useState(0);
  const [numberError, setNumberError] = useState(false);

  const [base64, setBase64] = useState('');
  const [pixKey, setPixKey] = useState('');
  const [me, setMe] = useState<IUser>();

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

  const handleChangeStep = (newStep: number) => {
    window.scrollTo(0, 0);

    if (step === 1) {
      setStep(newStep);
    } else {
      if ((value as number) > 0) {
        setStep(newStep);
        setValue(0);

        const date = getCurrentDateFormatted();

        addItem({
          id: Math.random() * 5000,
          type: 'pix',
          name: me?.name as string,
          value: value as number,
          date,
        });
      } else {
        setNumberError(true);
      }
    }
  };

  const handleCopyKey = () => {
    navigator.clipboard.writeText(pixKey);
    toast.success('Chave copiada');
  };

  switch (step) {
    case 0:
      return (
        <Container>
          <h2>Qual o valor gostaria de depositar usando o Pix?</h2>
          <CurrencyInput
            onChangeValue={function (
              _: ChangeEvent<HTMLInputElement>,
              originalValue: number | string,
            ): void {
              setValue(originalValue);
              if ((originalValue as number) > 0) setNumberError(false);
            }}
            max={1000000000}
            InputElement={
              <input
                placeholder="R$ 0,00"
                className={numberError ? 'error' : ''}
              />
            }
          />
          <Actions $buttontype="next">
            <CircleButton onClick={() => handleChangeStep(1)}>
              <IoArrowForwardCircleSharp />
            </CircleButton>
          </Actions>
        </Container>
      );
    case 1:
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
            <CircleButton onClick={() => handleChangeStep(0)}>
              <IoArrowBackCircleSharp />
            </CircleButton>
            <CircleButton onClick={() => handleChangeStep(2)}>
              <IoArrowForwardCircleSharp />
            </CircleButton>
          </Actions>
        </Container>
      );
    case 2:
      return (
        <Container>
          <h2>Tudo certo!</h2>
          <p>
            Nós recebemos o seu Pix e deverá estar na sua conta em até 24 horas.
            Obrigado por confiar na <SpecialTitle>CreditBlack</SpecialTitle>!
          </p>
          <Actions $buttontype="back">
            <CircleButton onClick={() => navigate('/')}>
              <IoArrowBackCircleSharp />
            </CircleButton>
          </Actions>
        </Container>
      );
    default:
      return <></>;
  }
};
