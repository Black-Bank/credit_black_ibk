import {
  CircleButton,
  SpecialTitle,
  Text,
  Title,
} from 'components/global.styles';
import {
  Container,
  DepositButton,
  CardsContainer,
  SendContainer,
  SendButton,
  Activity,
  BackButtonContainer,
} from './pix-dashboard.styles';

import { PiHandDeposit } from 'react-icons/pi';

import { FaMoneyBillTransfer, FaRegCopy, FaQrcode } from 'react-icons/fa6';
import { formatMoney } from 'utils/utils';
import { IoArrowBackCircleSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { RoutesEnum } from 'routes/routes.enum';
import { useContext, useState } from 'react';
import { PixDeposit } from 'screens/PixDeposit/pix-deposit.screen';
import { ExtractContext } from 'context/extract.context';

export const PixDashboard = () => {
  const [deposit, setDeposit] = useState(false);
  const context = useContext(ExtractContext);

  if (!context) {
    throw new Error('ChildComponent must be used within an AppProvider');
  }

  const { extract } = context;

  switch (deposit) {
    case false:
      return (
        <Container>
          <Title>
            <SpecialTitle>Área pix</SpecialTitle>
          </Title>
          <Text>
            Envie e receba pagamentos em qualquer hora, sem pagar nada.
          </Text>
          <CardsContainer>
            <h3>Depósito</h3>
            <DepositButton>
              <CircleButton onClick={() => setDeposit(true)}>
                <PiHandDeposit />
              </CircleButton>
              <p>Depositar</p>
            </DepositButton>
          </CardsContainer>
          <CardsContainer>
            <h3>Enviar</h3>
            <SendButton>
              <SendContainer>
                <div>
                  <CircleButton>
                    <FaMoneyBillTransfer />
                  </CircleButton>
                  <p>Transferir</p>
                </div>
                <div>
                  <CircleButton>
                    <FaRegCopy />
                  </CircleButton>
                  <p>Copia e cola</p>
                </div>
                <div>
                  <CircleButton>
                    <FaQrcode />
                  </CircleButton>
                  <p>Ler QR Code</p>
                </div>
              </SendContainer>
            </SendButton>
          </CardsContainer>
          <CardsContainer>
            <h3>Extrato</h3>
            {extract.items.length > 0 ? (
              extract.items.map((item) => (
                <Activity key={item.id}>
                  <div>
                    <FaMoneyBillTransfer />
                    <div>
                      <p className="activity-name">{item.name}</p>
                      <p className="activity-footer">
                        Transferência feita com {item.type}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p>- {formatMoney(item.value)}</p>
                    <p className="activity-footer">{item.date}</p>
                  </div>
                </Activity>
              ))
            ) : (
              <p>Ainda não existe nenhum extrato para ser exibido.</p>
            )}
          </CardsContainer>
          <BackButtonContainer>
            <Link to={RoutesEnum.DASHBOARD_ROUTE}>
              <CircleButton>
                <IoArrowBackCircleSharp />
              </CircleButton>
            </Link>
          </BackButtonContainer>
        </Container>
      );
    case true:
      return <PixDeposit />;
    default:
      return <></>;
  }
};
