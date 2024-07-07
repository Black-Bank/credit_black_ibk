import { Text } from '../global.styles';

import CheckMark from '../../assets/check-mark.svg';
import { Container } from './warning-card.styles';

const WarningCard = () => {
  return (
    <Container>
      <img src={CheckMark} alt="Check mark" />
      <Text>Não é necessário de LLC e sem cartão de crédito.</Text>
    </Container>
  );
};

export default WarningCard;
