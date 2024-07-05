import { ReactNode } from 'react';

import { Container } from './button.styles';

interface ButtonProps {
  children: ReactNode;
  variant: 'purple' | 'none';
  width?: number;
  onClick?: () => void;
}

const Button = ({ children, variant, width, onClick }: ButtonProps) => {
  return (
    <Container $variant={variant} $width={width} onClick={onClick}>
      {children}
    </Container>
  );
};

export default Button;
