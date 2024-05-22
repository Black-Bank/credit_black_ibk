import React from 'react';
import './Header.css';
import logo from '../../assets/logo.svg';
import LoginLogo from '../../assets/login.svg';

export const Header = () => {
	return (
		<div className="Header">
			<div className="container">
				<div className="logo">
					<img
						src={logo}
						alt="Loading"
						className="loading-icon"
					/>
				</div>
				<div className="login-logo">
					<span className="login-text">Login</span>
					<img
						src={LoginLogo}
						alt="Login"
						className="loading-icon"
					/>
				</div>
			</div>
		</div>
	);
};
