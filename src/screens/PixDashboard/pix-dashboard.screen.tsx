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
import { useState } from 'react';
import { PixDeposit } from 'screens/PixDeposit/pix-deposit.screen';

export const PixDashboard = () => {
  const [deposit, setDeposit] = useState(false);

  const activities = [
    {
      id: 1,
      name: 'Gabriel Santos de Oliveira',
      transferType: 'Pix',
      value: 50,
      date: '30/jul',
    },
    {
      id: 2,
      name: 'Gabriel Santos de Oliveira',
      transferType: 'Pix',
      value: 23,
      date: '23/mar',
    },
    {
      id: 3,
      name: 'Gabriel Santos de Oliveira',
      transferType: 'Pix',
      value: 97,
      date: '30/jul',
    },
  ];

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
            {activities.map((activity) => (
              <Activity key={activity.id}>
                <div>
                  <FaMoneyBillTransfer />
                  <div>
                    <p className="activity-name">{activity.name}</p>
                    <p className="activity-footer">
                      Transferência feita com {activity.transferType}
                    </p>
                  </div>
                </div>
                <div>
                  <p>- {formatMoney(activity.value)}</p>
                  <p className="activity-footer">{activity.date}</p>
                </div>
              </Activity>
            ))}
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
