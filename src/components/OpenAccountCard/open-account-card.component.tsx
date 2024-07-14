import { Link } from 'react-router-dom';

import Button from 'components/Button/button.component';
import { Container } from './open-account-card.styles';
import CardDesign from 'components/Designs/CardDesign/card.design';
import { SpecialTitle } from 'components/global.styles';
import { RoutesEnum } from 'routes/routes.enum';

const OpenAccountCard = () => {
  return (
    <Container>
      <div>
        <CardDesign />
        <h2>
          Inicie sua jornada financeira com o{' '}
          <SpecialTitle>Credit Black hoje</SpecialTitle>!
        </h2>
        <p>
          Pronto para assumir o controle de suas finanças? Junte-se ao Credit
          Black agora e deixe-nos ajudá-lo a atingir seus objetivos financeiros
          com nossas soluções personalizadas e atendimento ao cliente
          excepcional
        </p>
      </div>
      <Link to={RoutesEnum.SIGNUP_ROUTE}>
        <Button variant="purple">Abrir conta</Button>
      </Link>
    </Container>
  );
};

export default OpenAccountCard;
