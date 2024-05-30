/* eslint-disable react-hooks/exhaustive-deps */
import { Header } from 'components/Header/Header';
import { ScreenTypes } from 'components/Header/enum';
import { DashboardContainer, DashboardItem } from './Dashboard.styles';
import { Balance } from 'components/Balance/Balance';
import { UserService } from 'Services/UserService';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const Dashboard = () => {
	const userService = new UserService();
	const me = userService.getMe();

	const navigate = useNavigate();

	useEffect(() => {
		const currentTimestamp = Date.now();

		if (!me.exp) {
			navigate('/');
		} else if (currentTimestamp >= me.exp) {
			toast.error('Sua sessão expirou. Faça login novamente.');

			navigate('/');
		}
	}, [me]);
	return (
		<>
			<Header screen={ScreenTypes.SCREEN_DASHBOARD} />
			<DashboardContainer>
				<DashboardItem>
					<Balance
						availableBalance={0}
						InvestedCapital={0}
					/>
				</DashboardItem>
			</DashboardContainer>
		</>
	);
};
