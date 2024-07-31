import logo from '../../assets/logo.svg';
import { ScreenTypes } from './header.enum';
import {
  Container,
  ContainerLogged,
  ContainerResponsiveLogged,
  CriptoButton,
  Item,
  Items,
  Logo,
  Responsive,
  ResponsiveHidden,
} from './header.styles';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
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
import { IoIosArrowDown, IoIosNotifications } from 'react-icons/io';
import { GiPresent } from 'react-icons/gi';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

import { LuCalculator } from 'react-icons/lu';
import { IUser } from 'screens/Dashboard/dashboard.interface';
import { UserService } from 'services/user.service';
import ReactLoading from 'react-loading';

type HeaderProps = {
  screen: string;
  active: string;
};

const Header = ({ screen, active }: HeaderProps) => {
  const [open, setOpen] = useState(false);
  const userService = UserService.getInstance();
  const [me, setMe] = useState<IUser>();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await userService.getMe();
        setMe(userData);
      } catch (error) {
        toast.error('Erro ao carregar o usuário.');
        navigate('/');
      }
    };

    if (!me) {
      fetchUserData();
    }
  }, []);

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

  const navItens = [
    {
      id: 1,
      name: 'Início',
      path: '/',
    },
    {
      id: 2,
      name: 'Negociar',
      path: '/',
    },
    {
      id: 3,
      name: 'Depositar',
      path: '/dashboard/deposit',
    },
    {
      id: 4,
      name: 'Sacar',
      path: '/',
    },
    {
      id: 5,
      name: 'Pagar',
      path: '/',
    },
    {
      id: 6,
      name: 'Extrato',
      path: '/',
    },
  ];

  const DrawerListResponsive = (
    <Box sx={{ width: 400 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {navItens.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton onClick={() => navigate(item.path)}>
              <ListItemText primary={item.name} />
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
        <>
          <ContainerLogged>
            <div className="left-side">
              <Logo>
                <div>
                  <img src={logo} alt="logo-creditblack" />
                </div>
                <h1>Credit Black</h1>
              </Logo>
              <Items>
                <Item $active={active === '/'}>
                  <Link to={RoutesEnum.MAIN_ROUTE}>Início</Link>
                </Item>
                <Item $active={active === '/'}>
                  <div className="btn-negotiate">
                    Negociar
                    <IoIosArrowDown />
                  </div>
                </Item>
                <Item $active={active === '/'}>Depositar</Item>
                <Item $active={active === '/'}>Sacar</Item>
                <Item $active={active === '/'}>Pagar</Item>
                <Item $active={active === '/'}>Extrato</Item>
              </Items>
            </div>
            <div className="right-side">
              <CriptoButton>
                <GiPresent />
                Cripto grátis
              </CriptoButton>
              <p>{me ? me.name : <ReactLoading type="spin" />}</p>
              <LuCalculator />
              <IoIosNotifications />
              <HiOutlineMenuAlt3 />
            </div>
          </ContainerLogged>
          <ContainerResponsiveLogged>
            <div className="left-side">
              <Logo>
                <div>
                  <img src={logo} alt="logo-creditblack" />
                </div>
                <h1>Credit Black</h1>
              </Logo>
            </div>
            <div className="right-side">
              <CriptoButton>
                <GiPresent />
                Cripto grátis
              </CriptoButton>
              <HiOutlineMenuAlt3 onClick={toggleDrawer(true)} />
              <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerListResponsive}
              </Drawer>
            </div>
          </ContainerResponsiveLogged>
        </>
      );

    default:
      return <></>;
  }
};

export default Header;
