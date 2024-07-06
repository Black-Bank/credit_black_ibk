import MainDesign from 'components/Designs/MainDesign/main.design';
import Header from 'components/Header/header.component';
import { Container, MainContainer } from './default.styles';
import { Outlet, useLocation } from 'react-router-dom';
import { ScreenTypes } from 'components/Header/header.enum';
import Footer from 'components/Footer/footer.component';

const DefaultLayout = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Container>
        <Header active={pathname} screen={ScreenTypes.SCREEN_HOME} />
      </Container>
      {pathname === '/' && <MainDesign />}
      <MainContainer>
        <Outlet />
      </MainContainer>
      <Footer />
    </>
  );
};

export default DefaultLayout;
