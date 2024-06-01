import styled from 'styled-components';

export const DashboardContainer = styled.div`
	width: 100%;
	height: 100vh;
	background-color: #141416;
	overflow-y: auto;
	display: flex;
	flex-wrap: wrap;
`;

export const DashboardItem = styled.div`
	flex: 0 0 calc(33.33% - 20px);
	margin: 5px;
	padding: 10px;
	box-sizing: border-box;

	@media screen and (max-width: 768px) {
		flex: 0 0 calc(100% - 20px);
	}
`;
