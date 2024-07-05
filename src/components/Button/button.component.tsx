import { ReactNode } from 'react';

import { Container } from './button.styles';

interface ButtonProps {
  children: ReactNode;
  variant: 'purple' | 'none';
  onClick?: () => void;
  id?: string;
}

const Button = ({ children, variant, onClick, id }: ButtonProps) => {
  return (
    <Container $variant={variant} onClick={onClick} id={id}>
      {children}
    </Container>
  );
};

export default Button;
