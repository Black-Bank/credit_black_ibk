import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import { Login } from '../screens/Login/login';
import { Signup } from '../screens/Signup/signup';
import { Home } from '../screens/Home/home';
import { Dashboard } from 'screens/Dashboard/dashboard-screen';

export const AppRoutes = () => {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/login"
					element={<Login />}
				/>
				<Route
					path="/signup"
					element={<Signup />}
				/>
				<Route
					path="/dashboard"
					element={<Dashboard />}
				/>
				<Route
					path="*"
					element={
						<Navigate
							to="/"
							replace
						/>
					}
				/>
			</Routes>
		</Router>
	);
};
