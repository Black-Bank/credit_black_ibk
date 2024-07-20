import styled, { css } from 'styled-components';
import themes from 'styles/themes.styles';

export const Container = styled.main``;

export const MainContainer = styled.div`
  display: flex;
  align-items: flex-start;

  @media (max-width: 800px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
`;

export const BalanceContainer = styled.div`
  width: 25%;
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.25);
  padding: 1rem;
  color: ${themes.colors.gray};
  border-radius: 5px;

  span:first-child {
    font-size: 0.8rem;
  }

  @media (max-width: 800px) {
    width: 75%;
  }
`;

export const Investments = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  margin-top: 0.5rem;
`;

type BalanceProps = {
  $visible: boolean;
};

export const Balance = styled.div<BalanceProps>`
  display: flex;
  align-items: center;
  gap: 1rem;

  h2 {
    font-size: 2rem;
    color: ${themes.colors.primary};
    ${(props) =>
      !props.$visible &&
      css`
        filter: blur(10px);
      `}
  }

  span {
    position: relative;
    bottom: 1rem;
    right: 0.8rem;
    color: ${themes.colors.primary};
  }

  svg {
    color: ${themes.colors.gray};
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

export const ActivitiesContainer = styled.div`
  width: 75%;
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.25);
  margin: 0 3rem;
  padding: 1rem;
  border-radius: 5px;

  h3 {
    border-bottom: 1px solid ${themes.colors.gray};
    padding-bottom: 0.5rem;
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

  .activity-footer {
    font-size: 0.8rem;
    color: ${themes.colors.gray};
  }

  .activity-name {
    font-weight: bold;
  }
`;

export const TransferContainer = styled.div`
  display: flex;
  justify-content: center;

  svg {
    font-size: 1.3rem;
    color: ${themes.colors.primary};
  }
`;

export const Transfer = styled.div`
  font-size: 0.9rem;
  text-align: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Divider = styled.div`
  width: 75%;
  border: 1px solid ${themes.colors.gray262626};
  margin: 1rem auto;
`;

export const InvestmentsContainer = styled.div`
  margin-top: 2rem;

  section {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;

    @media (max-width: 800px) {
      flex-direction: column;
      align-items: center;
    }
  }

  button {
    display: block;
    margin: 1rem auto;
    width: 75%;
    color: ${themes.colors.white};
  }
`;

export const InvestmentsCard = styled.div`
  display: flex;
  gap: 2rem;
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.25);
  padding: 1.5rem;
  border-radius: 5px;
  margin-top: 1rem;
  cursor: pointer;
  width: 25%;

  img {
    width: 3rem;
  }

  @media (max-width: 800px) {
    width: 90%;
  }
`;

export const LoanContainer = styled.div`
  margin-top: 5rem;

  .balance {
    text-align: center;
    margin-top: 2rem;
  }

  .balance span {
    color: ${themes.colors.error};
  }
`;

export const Limits = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15rem;
`;

export const LimitBar = styled.div`
  width: 42%;
  height: 0.3rem;
  border: 1px solid ${themes.colors.gray};
  margin: 1rem auto;
  border-radius: 50px;
`;

type LimitBarFillProps = {
  $limitused: number;
  $availablelimit: number;
};

export const LimitBarFill = styled.div<LimitBarFillProps>`
  width: ${(props) => {
    return (props.$limitused / props.$availablelimit) * 100 + '%';
  }};
  height: 0.2rem;
  border: 1px solid ${themes.colors.primary};
  background: ${themes.colors.primary};
  border-radius: 50px;
`;

export const CircleButton = styled.button`
  display: flex;
  border-radius: 10px;
  padding: 0.5rem;
  background: transparent;
  border: 1px solid ${themes.colors.primary};
  color: ${themes.colors.white};
  cursor: pointer;
  margin-bottom: 0.5rem;
  transition: 0.3s;

  &:hover {
    background-color: ${themes.colors.primary};

    svg {
      color: ${themes.colors.gray};
    }
  }
`;
