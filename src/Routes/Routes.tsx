import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import { Login } from '../screens/Login/Login';
import { Signup } from '../screens/Signup/Signup';
import { Home } from '../screens/Home/Home';
import { Dashboard } from 'screens/Dashboard/DashboardScreen';

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
