import MainDesign from 'components/Designs/MainDesign/main.design';
import Header from 'components/Header/header.component';
import { Container, MainContainer } from './default.styles';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { ScreenTypes } from 'components/Header/header.enum';
import Footer from 'components/Footer/footer.component';
import { RoutesEnum } from 'routes/routes.enum';
import { useEffect } from 'react';

const DefaultLayout = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);

    if (sessionStorage.getItem('accessToken')) {
      if (
        pathname === RoutesEnum.MAIN_ROUTE ||
        pathname === RoutesEnum.LOGIN_ROUTE ||
        pathname === RoutesEnum.SIGNUP_ROUTE
      ) {
        navigate(RoutesEnum.DASHBOARD_ROUTE);
      }
    } else if (!sessionStorage.getItem('accessToken')) {
      if (pathname === RoutesEnum.DASHBOARD_ROUTE) {
        navigate(RoutesEnum.MAIN_ROUTE);
      }
    }
  });

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
