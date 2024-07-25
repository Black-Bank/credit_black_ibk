import {
  BalanceAvailable,
  BalanceContainer,
  BalanceContent,
  BalanceMiddle,
  BalanceTop,
  Booming,
  BoomingContainer,
  BoomingContent,
  Container,
  Divider,
  InUse,
  TopDashboard,
} from './dashboard.styles';
import { UserService } from '../../services/user.service';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { IUser } from './dashboard.interface';
import { Loading } from 'components/Loader/loading.component';
import { ExtractContext } from 'context/extract.context';

import bitcoin from '../../assets/coins/bitcoin-logo.svg';
import Button from 'components/Button/button.component';

export const Dashboard = () => {
  const coins = [
    {
      id: 1,
      image: bitcoin,
      name: 'Convex Finance',
      dots: 'Convex Fin...',
      money: 'R$ 17,02',
      percentage: '+13,47%',
    },
    {
      id: 2,
      image: bitcoin,
      name: 'Ethereum Service',
      money: 'R$ 160,67',
      percentage: '+5,30%',
    },
    {
      id: 3,
      image: bitcoin,
      name: 'USDC',
      money: 'R$ 5,6600',
      percentage: '+2,42%',
    },
    {
      id: 4,
      image: bitcoin,
      name: 'Tron',
      money: 'R$ 0,7597',
      percentage: '+2,15%',
    },
  ];

  const userService = UserService.getInstance();
  const accessToken = userService.getAccessToken();
  const [me, setMe] = useState<IUser>();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const context = useContext(ExtractContext);

  if (!context) {
    throw new Error('ChildComponent must be used within an AppProvider');
  }

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
        <TopDashboard>
          <BalanceContainer>
            <BalanceTop>
              <h2>Saldo</h2>
              <Button variant="purple">Depositar</Button>
            </BalanceTop>
            <BalanceContent>
              <BalanceAvailable>
                <span>Disponível</span>
                <p>R$ 0,00</p>
              </BalanceAvailable>
              <BalanceMiddle>
                <Divider />
                <a href="#">Depositar</a>
                <a href="#">Sacar</a>
              </BalanceMiddle>
              <InUse>
                <span>Em uso</span>
                <p>R$ 0,00</p>
              </InUse>
            </BalanceContent>
          </BalanceContainer>
          <BoomingContainer>
            <h2>Em alta</h2>
            <BoomingContent>
              {coins.map((coin) => (
                <Booming
                  key={coin.id}
                  $maxWidth="280px"
                  $mobileMaxWidth="150px"
                >
                  <img src={coin.image} alt={coin.name} />
                  <p>{coin.name}</p>
                  <span>{coin.money}</span>
                  <span id="booming-value">{coin.percentage}</span>
                </Booming>
              ))}
            </BoomingContent>
          </BoomingContainer>
        </TopDashboard>
      </Container>
    </>
  );
};
