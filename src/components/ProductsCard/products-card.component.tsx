import { ReactNode } from 'react';

import { Container, IconContainer } from './products-card.styles';
import { Text, TitleSmall } from 'components/global.styles';

type ProductsCardProps = {
  title: string;
  image: string;
  children: ReactNode;
};

const ProductsCard = ({ title, image, children }: ProductsCardProps) => {
  return (
    <Container>
      <IconContainer>
        <img src={image} alt="ícone-produtos" />
      </IconContainer>
      <TitleSmall>{title}</TitleSmall>
      <Text>{children}</Text>
    </Container>
  );
};

export default ProductsCard;
