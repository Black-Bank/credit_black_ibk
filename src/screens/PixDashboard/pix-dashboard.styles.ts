import styled from 'styled-components';
import themes from 'styles/themes.styles';

export const Container = styled.div`
  p {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

export const CardsContainer = styled.div`
  h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.9rem;
  }

  @media (max-width: 800px) {
    width: 71%;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (min-width: 801px) and (max-width: 1000px) {
    gap: 2rem;
  }
`;

export const DepositButton = styled.div`
  width: 6%;

  button {
    margin: 0.5rem auto;
  }
`;
export const SendButton = styled.div`
  width: 30%;

  button {
    margin: 0.5rem auto;
  }
`;

export const SendContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 800px) {
    width: 71%;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (min-width: 801px) and (max-width: 1000px) {
    gap: 2rem;
  }
`;

export const Activity = styled.div`
  padding-top: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

  div:first-child {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  svg {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
    margin: 0;
  }

  .activity-footer {
    font-size: 0.8rem;
    color: ${themes.colors.gray};
  }

  .activity-name {
    font-weight: bold;
  }

  .activity-value {
    width: 25%;
  }

  @media (max-width: 600px) {
    display: block;

    .activity-value {
      margin-top: 1rem;
      width: 100%;
    }
  }

  @media (min-width: 601px) and (max-width: 1000px) {
    .activity-value {
      margin-top: 1rem;
      width: 40%;
    }
  }
`;

export const BackButtonContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
`;
