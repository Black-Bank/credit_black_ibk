import { Header } from 'components/Header/header.component';
import { ScreenTypes } from 'components/Header/header.enum';
import { Container } from './home.styles';
import MainDesign from 'components/Designs/MainDesign/main.design';
import { SpecialTitle, Text, Title } from 'components/global.component';

const Home = () => {
  return (
    <Container>
      <MainDesign />
      <Header active="/" screen={ScreenTypes.SCREEN_HOME} />
      <Title>
        Bem-vindo ao Credit Black fortalecendo sua{' '}
        <SpecialTitle>jornada financeira</SpecialTitle>.
      </Title>
      <Text>
        No Credit Black, nossa missão é fornecer soluções bancárias abrangentes
        que capacitem indivíduos e empresas a atingir seus objetivos
        financeiros. Temos o compromisso de fornecer serviços personalizados e
        inovadores que priorizem as necessidades de nossos clientes.
      </Text>
    </Container>
  );
};

export default Home;
