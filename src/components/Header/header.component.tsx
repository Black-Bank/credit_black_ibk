import logo from '../../assets/logo.svg';
import { ScreenTypes } from './header.enum';
import {
  Container,
  Item,
  Items,
  Logo,
  LogoutText,
  Responsive,
  ResponsiveHidden,
} from './header.styles';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import ResponsiveBar from 'components/ResponsiveBar/responsive-bar.component';
import Button from 'components/Button/button.component';
import { RoutesEnum } from 'routes/routes.enum';
import { toast } from 'react-toastify';

type HeaderProps = {
  screen: string;
  active: string;
};

const Header = ({ screen, active }: HeaderProps) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleLogout = () => {
    toast.success('Até mais! Redirecionando...');
    setTimeout(() => {
      navigate(RoutesEnum.MAIN_ROUTE);
      sessionStorage.clear();
    }, 3000);
  };

  const DrawerList = (
    <Box sx={{ width: 400 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Home', 'Carreiras', 'Sobre', 'Segurança'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => navigate('/')}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  if (!screen) {
    return <></>;
  }

  switch (screen) {
    case ScreenTypes.SCREEN_NOTLOGGED:
      return (
        <Container>
          <Logo>
            <div>
              <img src={logo} alt="logo-creditblack" />
            </div>
            <h1>Credit Black</h1>
          </Logo>
          <ResponsiveHidden>
            <Items>
              <Item $active={active === RoutesEnum.MAIN_ROUTE}>
                <Link to={RoutesEnum.MAIN_ROUTE}>Home</Link>
              </Item>
              <Item $active={active === '/carreiras'}>Carreiras</Item>
              <Item $active={active === '/sobre'}>Sobre</Item>
              <Item $active={active === '/segurança'}>Segurança</Item>
            </Items>
          </ResponsiveHidden>
          <ResponsiveHidden>
            <Button variant="none">
              <Link to={RoutesEnum.SIGNUP_ROUTE}>Cadastrar</Link>
            </Button>
            <Link to={RoutesEnum.LOGIN_ROUTE}>
              <Button variant="purple">Logar</Button>
            </Link>
          </ResponsiveHidden>
          <Responsive>
            <ResponsiveBar onClick={toggleDrawer(true)} />
          </Responsive>
          <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
        </Container>
      );
    case ScreenTypes.SCREEN_LOGGED:
      return (
        <Container>
          <Logo>
            <div>
              <img src={logo} alt="logo-creditblack" />
            </div>
            <h1>Credit Black</h1>
          </Logo>
          <ResponsiveHidden>
            <Items>
              <Item $active={active === '/'}>
                <Link to={RoutesEnum.MAIN_ROUTE}>Home</Link>
              </Item>
              <Item $active={active === '/carreiras'}>Carreiras</Item>
              <Item $active={active === '/sobre'}>Sobre</Item>
              <Item $active={active === '/segurança'}>Segurança</Item>
            </Items>
          </ResponsiveHidden>
          <Responsive>
            <ResponsiveBar onClick={toggleDrawer(true)} />
          </Responsive>
          <Button variant="none" onClick={handleLogout}>
            <Link to={RoutesEnum.MAIN_ROUTE}>
              <LogoutText>Sair</LogoutText>
            </Link>
          </Button>
          <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
        </Container>
      );

    default:
      return <></>;
  }
};

export default Header;
