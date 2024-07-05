import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
	0% {
		transform: scale(1);
	}
	50% {
		transform: scale(1.5);
	}
	100% {
		transform: scale(1);
	}
`;

export const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(62, 60, 60, 0.8);

  backdrop-filter: blur(10px);
  z-index: 1000;

  .loading-icon-loading {
    width: 150px;
    height: 150px;
    animation: ${pulse} 2s infinite;
  }
`;
