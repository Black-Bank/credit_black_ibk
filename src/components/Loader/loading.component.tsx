import React from 'react';
import logo from '../../assets/logo.svg';
import { LoadingContainer } from './loading.styles';

export const Loading: React.FC = () => {
  return (
    <LoadingContainer>
      <img src={logo} alt="Loading" className="loading-icon-loading" />
    </LoadingContainer>
  );
};
