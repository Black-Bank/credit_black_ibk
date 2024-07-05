import styled from 'styled-components';

export const Svg = styled.svg`
  padding-left: 5rem;
  padding-top: 5rem;
  margin-left: 5rem;

  @media (max-width: 1200px) {
    display: none;
  }

  @media (min-width: 1201px) and (max-width: 1300px) {
    width: 20rem;
    margin-left: 7rem;
  }
`;
