import styled, { css } from 'styled-components';
import themes from 'styles/themes.styles';

export const Container = styled.div`
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
