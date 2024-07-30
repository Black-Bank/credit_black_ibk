import {
  LeftContainer,
  LeftContent,
  LeftMiddle,
  LeftTop,
  Booming,
  RightContainer,
  RightContent,
  Container,
  Divider,
  DashboardFlex,
  PortfolioTop,
  PortfolioBar,
  Portfolio,
  ExtractContainer,
  Extract,
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
import { FaMoneyBillTransfer } from 'react-icons/fa6';
import { formatMoney } from 'utils/utils';
import { getDataFormatted } from 'utils/date.util';

import { RiCoinsLine } from 'react-icons/ri';

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

  const portfolio = [
    {
      id: 1,
      image: bitcoin,
      name: 'Ethereum',
      coin: '0.00000008972 ETH',
      unitMoney: 'R$ 5,96',
      money: 'R$ 19.280,83',
      percentage: '-1,36%',
    },
    {
      id: 2,
      image: bitcoin,
      name: 'Tether',
      coin: '0.2093928 USDT',
      unitMoney: 'R$ 1,12',
      money: 'R$ 5,555',
      percentage: '+0,29%',
    },
  ];

  const extracts = [
    {
      id: 1,
      transferType: 'transfer',
      coin: 'Ethereum',
      type: 'send',
      value: 0.00455121,
      date: '02/07/2023',
    },
    {
      id: 2,
      transferType: 'transfer',
      coin: 'Ethereum',
      type: 'send',
      value: 0.00455121,
      date: '02/08/2023',
    },
    {
      id: 3,
      transferType: 'deposit',
      coin: 'Real',
      type: 'brazil',
      value: 100,
      date: '02/12/2023',
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
        <DashboardFlex>
          <LeftContainer>
            <LeftTop>
              <h2>Saldo</h2>
              <Button variant="purple">Depositar</Button>
            </LeftTop>
            <LeftContent>
              <div>
                <span>Disponível</span>
                <p>R$ 0,00</p>
              </div>
              <LeftMiddle>
                <Divider />
                <a href="#">Depositar</a>
                <a href="#">Sacar</a>
              </LeftMiddle>
              <div>
                <span>Em uso</span>
                <p>R$ 0,00</p>
              </div>
            </LeftContent>
          </LeftContainer>
          <RightContainer>
            <h2>Em alta</h2>
            <RightContent>
              {coins.map((coin) => (
                <Booming key={coin.id} $maxWidth="280px" $mobileMaxWidth="50px">
                  <img src={coin.image} alt={coin.name} />
                  <p>
                    <abbr title={coin.name}>{coin.name}</abbr>
                  </p>
                  <span>{coin.money}</span>
                  <span id="booming-value">{coin.percentage}</span>
                </Booming>
              ))}
            </RightContent>
          </RightContainer>
        </DashboardFlex>
        <DashboardFlex>
          <LeftContainer>
            <h2>Portfólio</h2>
            <LeftContent>
              <PortfolioTop>
                <div>
                  <span>Total</span>
                  <p>R$ 8,00</p>
                </div>
                <p className="percentage">-1,10%</p>
              </PortfolioTop>
              <LeftMiddle>
                <PortfolioBar />
              </LeftMiddle>
              {portfolio.map((port) => (
                <Portfolio key={port.id}>
                  <div className="left-side">
                    <img src={bitcoin} alt="bitcoin" />
                    <div>
                      <p>{port.name}</p>
                      <p>{port.coin}</p>
                      <span>{port.unitMoney}</span>
                    </div>
                  </div>
                  <div>
                    <p>{port.money}</p>
                    <p
                      className={
                        port.percentage.includes('-')
                          ? 'negative-percentage'
                          : 'positive-percentage'
                      }
                    >
                      {port.percentage}
                    </p>
                  </div>
                </Portfolio>
              ))}
              <Button variant="none">Ver tudo</Button>
            </LeftContent>
          </LeftContainer>
          <RightContainer>
            <h2>Extrato</h2>
            <RightContent>
              <ExtractContainer>
                {extracts.map((extract) => (
                  <Extract key={extract.id}>
                    <div className="extract-right">
                      {extract.transferType === 'transfer' ? (
                        <FaMoneyBillTransfer />
                      ) : (
                        <RiCoinsLine />
                      )}

                      <div>
                        <p>
                          {extract.transferType === 'transfer'
                            ? `Transferência de ${extract.coin}`
                            : `Depósito em ${extract.coin}`}
                        </p>
                        <span>
                          {extract.type === 'send' ? 'Envio' : 'Brasil Plural'}
                        </span>
                      </div>
                    </div>
                    <div className="extract-informations">
                      <p>
                        {extract.transferType === 'transfer'
                          ? `- ${extract.value}`
                          : `+ ${formatMoney(extract.value)}`}
                      </p>
                      <span>{getDataFormatted(extract.date)}</span>
                    </div>
                  </Extract>
                ))}
                <Button variant="none">Ver tudo</Button>
              </ExtractContainer>
            </RightContent>
          </RightContainer>
        </DashboardFlex>
      </Container>
    </>
  );
};
