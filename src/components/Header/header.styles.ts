import styled from 'styled-components';

import themes from '../../styles/themes.styles';

interface ItemProps {
  $active?: boolean;
}

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${themes.colors.navBackgroundColor};
  border: 1px solid ${themes.colors.navBorderColor};
  border-radius: 50px;
  margin: 3.125rem 0;
  padding: 1.25rem 2.125rem;
  width: 85%;
  margin: 3.25rem auto;

  img {
    width: 3rem;
    margin-right: 1rem;
  }

  h1 {
    font-size: 30px;
  }

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 75%;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media (max-width: 800px) {
    margin-bottom: 1rem;
  }
`;

export const Items = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  gap: 1.625rem;
`;

export const Item = styled.li<ItemProps>`
  cursor: pointer;
  background-color: ${(props) =>
    props.$active && `${themes.colors.navBorderColor}`};
  padding: ${(props) => props.$active && `0.75rem 1.5rem`};
  border-radius: ${(props) => props.$active && `3.125rem`};
  transition: 0.5s;

  &:hover {
    opacity: 0.8;
  }
`;

export const ResponsiveHidden = styled.div`
  @media (max-width: 800px) {
    display: none;
  }
`;

export const Responsive = styled.div`
  display: none;
  width: 100%;

  button {
    margin: 0 auto;
  }

  @media (max-width: 800px) {
    display: block;
  }
`;
