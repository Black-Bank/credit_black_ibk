import styled from 'styled-components';
import themes from 'styles/themes.styles';

export const Container = styled.main`
  width: 80%;
  margin: 0 auto;

  h2 {
    font-weight: normal;
  }

  span {
    color: ${themes.colors.gray};
    font-size: 0.8rem;
    display: block;
  }

  @media (max-width: 800px) {
    width: 85%;
  }
`;

export const DashboardFlex = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
  }
`;

export const LeftContainer = styled.div`
  width: 35%;
  height: 100%;

  h2 {
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }

  @media (min-width: 1001px) {
    width: 70%;
  }
`;

export const Divider = styled.div`
  width: 100%;
  border: 1px solid ${themes.colors.gray262626};
  margin: 0.5rem 0;
`;

export const LeftContent = styled.div`
  background-color: ${themes.colors.gray202022};
  padding: 0.8rem;
  border-radius: 10px;

  button {
    display: block;
    margin: 0.5rem auto;
    color: ${themes.colors.primary};
  }
`;

export const LeftMiddle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  a {
    color: ${themes.colors.primary};

    @media (max-width: 1000px) {
      display: none;
    }
  }

  a:hover {
    text-decoration: underline;
  }
`;

export const LeftTop = styled.div`
  button {
    display: none;
  }

  @media (max-width: 1000px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;

    button {
      display: block;
    }
  }
`;

export const RightContainer = styled.div`
  height: 100%;
  width: 60%;

  h2 {
    margin-bottom: 1rem;
  }

  @media (max-width: 1000px) {
    width: 100%;
    order: -1;
  }
`;

export const RightContent = styled.div`
  display: flex;
  gap: 1rem;

  button {
    display: block;
    margin: 0.5rem auto;
    color: ${themes.colors.primary};
  }

  @media (max-width: 800px) {
    gap: 0.5rem;
  }
`;

type BoomingProps = {
  $maxWidth: string;
  $mobileMaxWidth: string;
};

export const Booming = styled.div<BoomingProps>`
  background: ${themes.colors.gray202022};
  border-radius: 10px;
  padding: 1.2rem 2rem;
  padding-left: 1rem;
  width: 5rem;

  img {
    width: 2rem;

    @media (max-width: 600px) {
      width: 1.3rem;
    }
    @media (min-width: 601px) and (max-width: 800px) {
      width: 1.5rem;
    }
  }

  span {
    width: 200%;
  }

  p {
    font-size: 0.8rem;
    width: 100%;
    max-width: ${(props) => props.$maxWidth || '300px'};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 800px) {
      max-width: ${(props) => props.$mobileMaxWidth || '150px'};
    }
  }

  span#booming-value {
    color: ${themes.colors.positiveValue};
    font-size: 1.3rem;

    @media (max-width: 600px) {
      font-size: 0.9rem;
    }

    @media (min-width: 601px) and (max-width: 800px) {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 600px) {
    padding: 0.5rem;
  }
`;

export const Portfolio = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid ${themes.colors.gray262626};
  padding: 1rem 0;

  img {
    width: 2rem;
  }

  p {
    font-size: 0.8rem;
  }

  div.left-side {
    display: flex;
    gap: 0.5rem;
  }

  p.negative-percentage {
    color: ${themes.colors.negativeValue};
    text-align: right;
  }
  p.positive-percentage {
    color: ${themes.colors.positiveValue};
    text-align: right;
  }
`;

export const PortfolioTop = styled.div`
  display: flex;
  justify-content: space-between;

  p.percentage {
    color: ${themes.colors.negativeValue};
  }
`;

export const PortfolioBar = styled.div`
  border: 1px solid ${themes.colors.primary};
  width: 100%;
  margin: 1rem 0;
`;

export const ExtractContainer = styled.div`
  background-color: ${themes.colors.gray202022};
  width: 100%;
  border-radius: 10px;
  padding: 0.8rem;
`;

export const Extract = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid ${themes.colors.gray262626};
  padding: 1rem 0;

  svg {
    font-size: 1.5rem;
  }

  .extract-right {
    display: flex;
    gap: 1rem;
  }

  .extract-informations {
    width: 9.375rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 600px) {
      width: 10.375rem;
    }
  }
`;
