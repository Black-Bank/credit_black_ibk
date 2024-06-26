/* eslint-disable react-hooks/exhaustive-deps */
import { Header } from 'components/Header/Header';
import { ScreenTypes } from 'components/Header/enum';
import { DashboardContainer, DashboardItem } from './Dashboard.styles';
import { Balance } from 'components/Balance/Balance';
import { UserService } from 'Services/UserService';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { IUser } from './interfaces';
import { Loading } from 'components/Loader/Loading';
import { TrendItems } from 'components/TrendItems/TrendItems';
import { ITrend } from 'components/TrendItems/types';
import BTC from '../../assets/bitcoin-logo.svg';
import ETH from '../../assets/eth-logo.svg';
import DOLLAR from '../../assets/usdt-logo.svg';
import { Statement } from 'components/Statement/Statement';
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
			<Header screen={ScreenTypes.SCREEN_DASHBOARD} />
			<DashboardContainer>
				<DashboardItem>
					<Balance
						availableBalance={Number(me?.amount) || 0}
						InvestedCapital={Number(me?.investedValue || 0)}
						loanValue={Number(me?.loanValue || 0)}
					/>
				</DashboardItem>
				<DashboardItem>
					<TrendItems items={trendingItems} />
				</DashboardItem>
				<DashboardItem>
					<Statement />
				</DashboardItem>
			</DashboardContainer>
		</>
	);
};
