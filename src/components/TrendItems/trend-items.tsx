import { ITrend } from './types';
import {
  TrendContainer,
  ItemContainer,
  ItemTitle,
  LogoItem,
  ItemDescription,
  ItemProfitGreen,
  ItemProfitRed,
} from './trend-items.styles';
import { formatMoney } from 'Utils/utils';

interface TrendItemsProps {
  items: ITrend[];
}

export const TrendItems = ({ items }: TrendItemsProps) => {
  return (
    <TrendContainer>
      {items.map((item) => (
        <ItemContainer key={item.id}>
          <LogoItem src={item.image} />
          <ItemTitle>{item.name}</ItemTitle>
          <ItemDescription> {formatMoney(item.value)}</ItemDescription>
          {item.profit < 0 ? (
            <ItemProfitRed>{item.profit}%</ItemProfitRed>
          ) : (
            <ItemProfitGreen>+{item.profit}%</ItemProfitGreen>
          )}
        </ItemContainer>
      ))}
    </TrendContainer>
  );
};
