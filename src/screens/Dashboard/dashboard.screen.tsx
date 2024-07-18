import {
  ActivitiesContainer,
  Activity,
  Balance,
  BalanceContainer,
  Container,
  Divider,
  Investments,
  InvestmentsCard,
  InvestmentsContainer,
  MainContainer,
  Transfer,
  TransferContainer,
} from './dashboard.styles';
import { UserService } from '../../services/user.service';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { IUser } from './dashboard.interface';
import { Loading } from 'components/Loader/loading.component';

import bitcoin from '../../assets/coins/bitcoin-logo.svg';

import { FaPix } from 'react-icons/fa6';

import { GoEye, GoEyeClosed } from 'react-icons/go';

import { FaMoneyBillTransfer } from 'react-icons/fa6';
import { formatMoney } from 'utils/utils';
import Button from 'components/Button/button.component';

export const Dashboard = () => {
  const userService = UserService.getInstance();
  const accessToken = userService.getAccessToken();
  const [me, setMe] = useState<IUser>();
  const [moneyVisible, setMoneyVisible] = useState(false);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

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

  const investments = [
    {
      id: 1,
      type: 'bitcoin',
      name: 'Meu investimento 1',
      coinValue: '0.0000034661',
      investmentValue: 'BRL 56,00',
    },
    {
      id: 2,
      type: 'bitcoin',
      name: 'Meu investimento 2',
      coinValue: '0.0000039361',
      investmentValue: 'BRL 100,00',
    },
    {
      id: 3,
      type: 'bitcoin',
      name: 'Meu investimento 3',
      coinValue: '0.00000312221',
      investmentValue: 'BRL 150,00',
    },
    {
      id: 4,
      type: 'bitcoin',
      name: 'Meu investimento 3',
      coinValue: '0.00000312221',
      investmentValue: 'BRL 150,00',
    },
  ];

  useEffect(() => {
    const currentTimestamp = Date.now();

    if (accessToken?.exp && currentTimestamp >= accessToken?.exp) {
      toast.error('Sua sessão expirou. Faça login novamente.');

      navigate('/');
    }
  }, [accessToken]);
  useEffect(() => {
    const fetchUserData = async () => {
      setIsLoading(true);
      try {
        const userData = await userService.getMe();
        setMe(userData);
      } catch (error) {
        toast.error('Erro ao carregar o usuário.');
        navigate('/');
      } finally {
        setIsLoading(false);
      }
    };

    if (!me) {
      fetchUserData();
    }
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      <Container>
        <MainContainer>
          <BalanceContainer>
            <span>Saldo total</span>
            <Balance $visible={moneyVisible}>
              <h2>{formatMoney(Number(me?.amount)).replace('R$', '')}</h2>
              <span>BRL</span>
              {!moneyVisible ? (
                <GoEyeClosed onClick={() => setMoneyVisible(true)} />
              ) : (
                <GoEye onClick={() => setMoneyVisible(false)} />
              )}
            </Balance>
            <Investments>
              <span>≈ 2.000,00</span>
              <span>Este mês: +7.65%</span>
            </Investments>
            <Divider />
            <TransferContainer>
              <Transfer>
                <FaPix />
                <p>Pix</p>
              </Transfer>
            </TransferContainer>
          </BalanceContainer>
          <ActivitiesContainer>
            <h3>Sua atividade</h3>
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
          </ActivitiesContainer>
        </MainContainer>
        <InvestmentsContainer>
          <h3>Investimentos atuais</h3>
          <section>
            {investments.map((investment) => (
              <InvestmentsCard key={investment.id}>
                <img src={bitcoin} alt="bitcoin" />
                <div>
                  <h4>{investment.name}</h4>
                  <p>{investment.coinValue}</p>
                  <p>{investment.investmentValue}</p>
                </div>
              </InvestmentsCard>
            ))}
          </section>
          <Button variant="purple">Gerenciar investimentos</Button>
        </InvestmentsContainer>
      </Container>
    </>
  );
};
