import styled from 'styled-components';

export const Svg = styled.svg`
  position: absolute;
  right: 73%;
  top: 201%;
  z-index: -1;

  @media (max-width: 800px) {
    display: none;
  }

  @media (min-width: 801px) and (max-width: 1000px) {
    top: 380%;
    right: 62%;
  }

  @media (min-width: 1001px) and (max-width: 1200px) {
    top: 375%;
    right: 67%;
  }
`;
