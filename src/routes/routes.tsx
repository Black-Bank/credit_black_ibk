import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Login from '../screens/Login/login.screen';
import Signup from '../screens/Signup/signup.screen';
import Home from '../screens/Home/home.screen';
import { Dashboard } from 'screens/Dashboard/dashboard.screen';
import DefaultLayout from 'layouts/default.layout';
import { RoutesEnum } from './routes.enum';

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path={'/'} element={<Home />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/signup'} element={<Signup />} />
          <Route path={'/dashboard'} element={<Dashboard />} />
          <Route
            path="*"
            element={<Navigate to={RoutesEnum.MAIN_ROUTE} replace />}
          />
        </Route>
      </Routes>
    </Router>
  );
};
