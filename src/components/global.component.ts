import styled from 'styled-components';
import themes from 'styles/themes.styles';

export const Title = styled.h1`
  width: 35rem;
  font-size: 40px;
  line-height: 150%;

  @media (max-width: 600px) {
    width: 25rem;
  }

  @media (min-width: 601px) and (max-width: 800px) {
    width: 30rem;
  }
`;

export const SpecialTitle = styled.span`
  color: ${themes.colors.primary};
`;

export const Text = styled.p`
  color: ${themes.colors.gray};
  font-size: 15px;
  font-weight: 300;
  line-height: 24px;
  width: 32rem;

  @media (max-width: 600px) {
    width: 25rem;
  }

  @media (min-width: 601px) and (max-width: 800px) {
    width: 30rem;
  }
`;
