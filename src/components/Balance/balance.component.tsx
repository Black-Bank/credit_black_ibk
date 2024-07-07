import { formatMoney } from 'Utils/utils';
import {
  BalanceContainer,
  BalanceItem,
  BalanceWrapper,
  Divider,
  ItemRedValue,
  ItemTitle,
  ItemValue,
} from './Balance.styles';
import { IBalance } from './balance.interface';

export const Balance = ({
  availableBalance,
  InvestedCapital,
  loanValue,
}: IBalance) => {
  return (
    <BalanceContainer>
      <BalanceWrapper>
        <BalanceItem>
          <ItemTitle>Disponível</ItemTitle>
          <ItemValue>{formatMoney(availableBalance)}</ItemValue>
        </BalanceItem>
        <Divider />
        <BalanceItem>
          <ItemTitle>Investido</ItemTitle>
          <ItemValue>{formatMoney(InvestedCapital)}</ItemValue>
        </BalanceItem>
        <Divider />
        <BalanceItem>
          <ItemTitle>Empréstimo</ItemTitle>
          <ItemRedValue>{formatMoney(loanValue)}</ItemRedValue>
        </BalanceItem>
      </BalanceWrapper>
    </BalanceContainer>
  );
};
