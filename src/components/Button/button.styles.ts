import styled from 'styled-components';
import themes from 'styles/themes.styles';

interface ButtonProps {
  $variant: string;
}

export const Container = styled.button<ButtonProps>`
  background: none;
  border: none;
  color: ${(props) =>
    props.$variant === 'purple'
      ? `${themes.colors.navBackgroundColor}`
      : `${themes.colors.white}`};
  background-color: ${(props) =>
    props.$variant === 'purple' && `${themes.colors.primary}`};
  padding: ${(props) => props.$variant === 'purple' && '0.875rem 1.875rem'};
  border-radius: 3.125rem;
  cursor: pointer;
  margin-right: 1.875rem;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 600px) {
    display: block;
    margin: 0 auto;
  }
`;
