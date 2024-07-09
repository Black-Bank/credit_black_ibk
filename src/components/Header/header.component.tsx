import logo from '../../assets/logo.svg';
import { ScreenTypes } from './header.enum';
import {
  Container,
  Item,
  Items,
  Logo,
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
              <Item $active={active === '/'}>
                <Link to={'/'}>Home</Link>
              </Item>
              <Item $active={active === '/carreiras'}>Carreiras</Item>
              <Item $active={active === '/sobre'}>Sobre</Item>
              <Item $active={active === '/segurança'}>Segurança</Item>
            </Items>
          </ResponsiveHidden>
          <ResponsiveHidden>
            <Button variant="none">
              <Link to={'/signup'}>Cadastrar</Link>
            </Button>
            <Link to={'/logar'}>
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
                <Link to={'/'}>Home</Link>
              </Item>
              <Item $active={active === '/carreiras'}>Carreiras</Item>
              <Item $active={active === '/sobre'}>Sobre</Item>
              <Item $active={active === '/segurança'}>Segurança</Item>
            </Items>
          </ResponsiveHidden>
          <ResponsiveHidden>
            <Button variant="none">
              <Link to={'/'}>Sair</Link>
            </Button>
          </ResponsiveHidden>
          <Responsive>
            <ResponsiveBar onClick={toggleDrawer(true)} />
          </Responsive>
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
