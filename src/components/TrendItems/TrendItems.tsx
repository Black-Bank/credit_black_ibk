import React from 'react';
import { ITrend } from './types';
import {
	TrendContainer,
	ItemContainer,
	ItemTitle,
	LogoItem,
	ItemDescription,
	ItemProfitGreen,
	ItemProfitRed,
} from './TrendItem.styles';
import { formatMoney } from 'Utils/utils';

interface TrendItemsProps {
	items: ITrend[];
}

export const TrendItems: React.FC<TrendItemsProps> = ({ items }) => {
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
