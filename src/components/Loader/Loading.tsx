import React from 'react';
import './Loading.css';
import logo from '../../assets/logo.svg';

export const Loading: React.FC = () => {
	return (
		<div className="loading">
			<img
				src={logo}
				alt="Loading"
				className="loading-icon"
			/>
		</div>
	);
};
