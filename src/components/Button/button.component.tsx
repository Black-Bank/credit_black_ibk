import { ReactNode } from 'react';

import { Container } from './button.styles';

interface ButtonProps {
  children: ReactNode;
  variant: 'purple' | 'none';
  width?: number;
  id?: string;
  onClick?: () => void;
}

const Button = ({ children, variant, width, id, onClick }: ButtonProps) => {
  return (
    <Container $variant={variant} $width={width} onClick={onClick} id={id}>
      {children}
    </Container>
  );
};

export default Button;
