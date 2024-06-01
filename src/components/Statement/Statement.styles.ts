import styled from 'styled-components';

export const StatementContainer = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	background-color: #303030;
	min-width: 350px;
	min-height: 320px;
	padding: 15px;
	border-radius: 8px;
`;
export const Divider = styled.hr`
	border: none;
	border-top: 1px solid #e0e0e0;
	margin: 5px 0;
	width: 100%;
`;

export const HeaderInfo = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Title = styled.text`
	font-size: 16px;
	color: #b2b2b2;
`;
export const MainDescription = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-top: 5px;
	margin-bottom: 5px;
`;
export const MainDescriptionValue = styled.text`
	color: #fff;
`;
export const DescriptionPercentage = styled.text`
	color: #27d100;
	font-size: 22px;
`;
