import styled from 'styled-components';

export const BalanceContainer = styled.div`
	width: 100%;
	min-width: 451;
	min-height: 132;
`;

export const BalanceWrapper = styled.div`
	background-color: #303030;
	justify-content: center;
	width: 100%;
	padding: 10px;
	border-radius: 8px;
	border: 1px solid transparent;
`;

export const BalanceItem = styled.div`
	display: flex;
	flex-direction: column;
	margin: 10px;
`;
export const Divider = styled.hr`
	border: none;
	border-top: 1px solid #e0e0e0;
	margin: 5px 0;
	width: 100%;
`;

export const ItemTitle = styled.text`
	font-size: 18px;
	color: gray;
`;
export const ItemValue = styled.text`
	font-weight: bold;
	color: green;
	margin-top: 5px;
`;

export const ItemRedValue = styled.text`
	font-weight: bold;
	color: #ff6666;
	margin-top: 5px;
`;
