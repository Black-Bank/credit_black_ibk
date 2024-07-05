import styled from 'styled-components';

export const TrendContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
`;

export const ItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 10px;
	background-color: #303030;
	min-width: 120px;
	min-height: 120px;
	padding: 15px;
	border-radius: 8px;
`;
export const ItemTitle = styled.text`
	font-size: 18px;
	color: #fff;
`;
export const ItemDescription = styled.text`
	font-size: 14px;
	margin-top: 5px;
	color: gray;
`;

export const ItemProfitGreen = styled.text`
	font-size: 22px;
	margin-top: 5px;
	color: #27d100;
`;
export const ItemProfitRed = styled.text`
	font-size: 22px;
	margin-top: 5px;
	color: red;
`;
export const LogoItem = styled.img`
	width: 30px;
	height: auto;
	margin-bottom: 10px;
`;
