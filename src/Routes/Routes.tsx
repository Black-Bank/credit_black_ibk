import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Login } from '../screens/Login/Login';
import { Signup } from '../screens/Signup/Signup';
import { Home } from '../screens/Home/Home';

export const AppRoutes: React.FC = () => {
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
			</Routes>
		</Router>
	);
};
