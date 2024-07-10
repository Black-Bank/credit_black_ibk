import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Login } from '../screens/Login/login.screen';
import Home from '../screens/Home/home.screen';
import Signup from '../screens/Signup/signup.screen';
import { Dashboard } from 'screens/Dashboard/dashboard.screen';
import DefaultLayout from 'layouts/default.layout';
import { RoutesEnum } from 'layouts/default.enum';

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path={RoutesEnum.MAIN_ROUTE} element={<Home />} />
          <Route path={RoutesEnum.LOGIN_ROUTE} element={<Login />} />
          <Route path={RoutesEnum.SIGNUP_ROUTE} element={<Signup />} />
          <Route path={RoutesEnum.DASHBOARD_ROUTE} element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
};
