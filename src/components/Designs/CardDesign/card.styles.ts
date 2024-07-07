import styled from 'styled-components';

export const Svg = styled.svg`
  position: absolute;
  right: 73%;
  top: 209%;
  z-index: -1;

  @media (max-width: 800px) {
    display: none;
  }

  @media (min-width: 801px) and (max-width: 1000px) {
    top: 391%;
    right: 64%;
  }

  @media (min-width: 1001px) and (max-width: 1200px) {
    top: 391%;
    right: 69%;
  }
`;
