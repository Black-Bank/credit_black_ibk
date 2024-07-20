import styled from 'styled-components';
import themes from 'styles/themes.styles';

type FlexProps = {
  $justify?: string;
  $align?: string;
  $wrap?: boolean;
  $gap?: number;
};

type SpacerProps = {
  size?: number;
};

export const Title = styled.h1`
  width: 35rem;
  font-size: 40px;
  line-height: 150%;

  @media (max-width: 600px) {
    width: 25rem;
  }

  @media (min-width: 601px) and (max-width: 800px) {
    width: 30rem;
  }
`;

export const TitleSmall = styled.h3`
  font-size: 15px;
  font-weight: 400;
  line-height: 150%;
`;

export const SpecialTitle = styled.span`
  color: ${themes.colors.primary};
`;

export const Text = styled.p`
  color: ${themes.colors.gray};
  font-size: 15px;
  font-weight: 300;
  line-height: 24px;
  width: 32rem;

  @media (max-width: 600px) {
    width: 25rem;
  }

  @media (min-width: 601px) and (max-width: 800px) {
    width: 30rem;
  }
`;

export const Flex = styled.div<FlexProps>`
  display: flex;
  justify-content: ${(props) => props.$justify};
  align-items: ${(props) => props.$align};
  flex-wrap: ${(props) => (props.$wrap ? 'wrap' : 'no-wrap')};
  gap: ${(props) => `${props.$gap}rem`};

  @media (max-width: 1200px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Divider = styled.div`
  width: 1px;
  height: 19rem;
  border: 1px solid ${themes.colors.gray262626};
  margin: 20px;

  @media (max-width: 600px) {
    display: none;
  }

  @media (min-width: 601px) and (max-width: 800px) {
    display: none;
  }
`;

export const Spacer = styled.div<SpacerProps>`
  height: ${(props) => (props.size ? `${props.size}rem` : '50px')};
`;

export const CircleButton = styled.button`
  display: flex;
  border-radius: 10px;
  padding: 0.5rem;
  background: transparent;
  border: 1px solid ${themes.colors.primary};
  color: ${themes.colors.white};
  cursor: pointer;
  margin-bottom: 0.5rem;
  transition: 0.3s;

  svg {
    color: ${themes.colors.primary};
    font-size: 1.5rem;
  }

  &:hover {
    background-color: ${themes.colors.primary};

    svg {
      color: ${themes.colors.gray};
    }
  }
`;
