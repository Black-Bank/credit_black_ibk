import {
  ActivitiesContainer,
  Activity,
  Balance,
  BalanceContainer,
  Container,
  Investments,
} from './dashboard.styles';
import { UserService } from '../../services/user.service';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { IUser } from './dashboard.interface';
import { Loading } from 'components/Loader/loading.component';
import { ITrend } from 'components/TrendItems/types';
import BTC from '../../assets/bitcoin-logo.svg';
import ETH from '../../assets/eth-logo.svg';
import DOLLAR from '../../assets/usdt-logo.svg';

import { GoEye, GoEyeClosed } from 'react-icons/go';

import { FaMoneyBillTransfer } from 'react-icons/fa6';
import { formatMoney } from 'utils/utils';

const trendingItems: ITrend[] = [
  {
    id: '1',
    name: 'Bitcoin',
    image: BTC,
    value: 100000.0,
    profit: 10.5,
  },
  {
    id: '2',
    name: 'Ethereum',
    image: ETH,
    value: 20000.0,
    profit: -15.0,
  },
  {
    id: '3',
    name: 'Dollar',
    image: DOLLAR,
    value: 5.23,
    profit: 20.0,
  },
];
export const Dashboard = () => {
  const userService = UserService.getInstance();
  const accessToken = userService.getAccessToken();
  const [me, setMe] = useState<IUser>();
  const [moneyVisible, setMoneyVisible] = useState(false);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

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
        </BalanceContainer>
        <ActivitiesContainer>
          <h3>Sua atividade</h3>
          <Activity>
            <div>
              <FaMoneyBillTransfer />
              <div>
                <p className="activity-name">Nome</p>
                <p className="activity-footer">Transferência via Pix</p>
              </div>
            </div>
            <div>
              <p>- R$ 00,00</p>
              <p className="activity-footer">30/jul</p>
            </div>
          </Activity>
        </ActivitiesContainer>
      </Container>
    </>
  );
};
