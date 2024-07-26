import styled from 'styled-components';

import themes from '../../styles/themes.styles';

interface ItemProps {
  $active?: boolean;
}

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${themes.colors.gray1c1c1c};
  border: 1px solid ${themes.colors.gray262626};
  border-radius: 50px;
  margin: 3.125rem 0;
  padding: 1.25rem 2.125rem;

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
    props.$active && `${themes.colors.gray262626}`};
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

// USER LOGGED
export const ContainerLogged = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: ${themes.colors.gray202022};
  padding: 1rem 0;
  margin-bottom: 1rem;

  .left-side {
    display: flex;
    align-items: center;
    gap: 3rem;
  }

  .right-side {
    display: flex;
    align-items: center;

    svg {
      font-size: 1.5rem;
      cursor: pointer;
      margin: 0 0.3rem;
    }

    p {
      margin-right: 1rem;
    }
  }

  .btn-negotiate {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .btn-negotiate svg {
    color: ${themes.colors.primary};
    margin-top: 0.3rem;
  }

  img {
    width: 3rem;
    margin-right: 1rem;
  }
`;

export const CriptoButton = styled.button`
  background: ${themes.colors.gray333333};
  border: 0;
  color: ${themes.colors.primary};
  padding: 0.5rem 1rem;
  border-radius: 50px;
  text-align: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  transition: 0.3s;
  margin-right: 2.5rem;

  svg {
    font-size: 1rem;
  }

  &:hover {
    opacity: 0.8;
  }
`;
