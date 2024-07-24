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

export const TopDashboard = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
  }
`;

export const BalanceContainer = styled.div`
  width: 50%;
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
`;

export const Divider = styled.div`
  width: 100%;
  border: 1px solid ${themes.colors.gray262626};
  margin: 0.5rem 0;
`;

export const BalanceAvailable = styled.div``;

export const BalanceContent = styled.div`
  background-color: ${themes.colors.gray202022};
  padding: 0.8rem;
  border-radius: 10px;
`;

export const BalanceMiddle = styled.div`
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

export const BalanceTop = styled.div`
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

export const InUse = styled.div``;

export const BoomingContainer = styled.div`
  height: 100%;

  h2 {
    margin-bottom: 1rem;
  }
`;

export const BoomingContent = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 800px) {
    gap: 0.5rem;
  }
`;

export const Booming = styled.div`
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

  p {
    font-size: 0.8rem;
    width: 200%;
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
