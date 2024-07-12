import MainDesign from 'components/Designs/MainDesign/main.design';
import Header from 'components/Header/header.component';
import { Container, MainContainer } from './default.styles';
import { Outlet, useLocation } from 'react-router-dom';
import { ScreenTypes } from 'components/Header/header.enum';
import Footer from 'components/Footer/footer.component';
import { RoutesEnum } from './default.enum';

const DefaultLayout = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Container>
        <Header
          active={pathname}
          screen={
            pathname === RoutesEnum.MAIN_ROUTE ||
            pathname === RoutesEnum.LOGIN_ROUTE ||
            pathname === RoutesEnum.SIGNUP_ROUTE
              ? ScreenTypes.SCREEN_NOTLOGGED
              : ScreenTypes.SCREEN_LOGGED
          }
        />
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
