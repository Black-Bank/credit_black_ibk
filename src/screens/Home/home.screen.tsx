import { Header } from 'components/Header/header.component';
import { ScreenTypes } from 'components/Header/header.enum';
import { Container } from './home.styles';
import MainDesign from 'components/Designs/MainDesign/main.design';
import {
  Flex,
  Spacer,
  SpecialTitle,
  Text,
  Title,
} from 'components/global.styles';
import Button from 'components/Button/button.component';
import ExchangeDesign from 'components/Designs/ExchangeDesign/exchange.design';
import ExchangeArrowDesign from 'components/Designs/ExchangeArrowDesign/exchange-arrow.design';
import OurProducts from 'container/OurProducts/our-products.container';
import OpenAccountCard from 'components/OpenAccountCard/open-account-card.component';

const Home = () => {
  return (
    <>
      <MainDesign />
      <Header active="/" screen={ScreenTypes.SCREEN_HOME} />
      <Container>
        <Flex>
          <div>
            <Title>
              Bem-vindo ao Credit Black fortalecendo sua{' '}
              <SpecialTitle>jornada financeira</SpecialTitle>.
            </Title>
            <Text>
              No Credit Black, nossa missão é fornecer soluções bancárias
              abrangentes que capacitem indivíduos e empresas a atingir seus
              objetivos financeiros. Temos o compromisso de fornecer serviços
              personalizados e inovadores que priorizem as necessidades de
              nossos clientes.
            </Text>
            <Spacer size={2} />
            <Button variant="purple" width={47}>
              Abrir conta
            </Button>
          </div>
          <div>
            <ExchangeDesign />
            <ExchangeArrowDesign />
          </div>
        </Flex>
        <OurProducts />
        <OpenAccountCard />
      </Container>
    </>
  );
};

export default Home;
