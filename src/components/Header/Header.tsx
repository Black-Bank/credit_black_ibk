import React from 'react';
import './Header.css';
import logo from '../../assets/logo.svg';
import LoginLogo from '../../assets/login.svg';
import { ScreenTypes } from './enum';

export const Header = ({ screen }: { screen: string }) => {
	if (!screen) {
		return <></>;
	}
	switch (screen) {
		case ScreenTypes.SCREEN_LOGIN:
			return (
				<div className="Header">
					<div className="container">
						<div className="login-logo">
							<img
								src={logo}
								alt="Login"
								className="loading-icon"
							/>
						</div>
					</div>
				</div>
			);
		case ScreenTypes.SCREEN_HOME:
			return (
				<div className="Header-home">
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
		default:
			return <></>;
	}
};
