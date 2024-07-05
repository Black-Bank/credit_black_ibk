import './header.css';
import logo from '../../assets/logo.svg';
import LoginLogo from '../../assets/login.svg';
import { ScreenTypes } from './enum';
import { useNavigate } from 'react-router-dom';

export const Header = ({ screen }: { screen: string }) => {
  const navigate = useNavigate();
  if (!screen) {
    return <></>;
  }
  const handleLogin = () => {
    navigate('/login');
  };
  switch (screen) {
    case ScreenTypes.SCREEN_LOGIN:
      return (
        <div className="Header">
          <div className="container">
            <div className="login-logo">
              <img src={logo} alt="Login" className="loading-icon" />
            </div>
          </div>
        </div>
      );
    case ScreenTypes.SCREEN_HOME:
      return (
        <div className="Header-home">
          <div className="container">
            <div className="logo">
              <img src={logo} alt="Loading" className="loading-icon" />
            </div>
            <div className="login-logo" onClick={handleLogin}>
              <span className="login-text">Login</span>
              <img src={LoginLogo} alt="Login" className="loading-icon" />
            </div>
          </div>
        </div>
      );
    case ScreenTypes.SCREEN_DASHBOARD:
      return (
        <div className="Header-home">
          <div className="container">
            <div className="logo">
              <img src={logo} alt="Loading" className="loading-icon" />
            </div>
          </div>
        </div>
      );

    default:
      return <></>;
  }
};
