import styled from 'styled-components';
import themes from 'styles/themes.styles';

export const FooterContainer = styled.footer`
  background-color: ${themes.colors.gray1c1c1c};
  margin-top: 10rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 75%;
  margin: 0 auto;
  padding-top: 5rem;
  padding-bottom: 3rem;

  img {
    width: 3rem;
    margin-right: 1rem;
  }

  ul {
    list-style-type: none;
    display: flex;
    gap: 2rem;
  }

  ul li {
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 3rem;
`;

// Cartão de Contato
export const ContactCard = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  border-bottom: 2px solid ${themes.colors.gray262626};
  border-top: 2px solid ${themes.colors.gray262626};
  width: 100%;
  padding: 3.125rem;
  margin-top: 3rem;

  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

export const Item = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  svg {
    color: ${themes.colors.primary};
  }
`;

// Footer do rodapé
export const FooterCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  border-radius: 100px;
  border: 1px solid ${themes.colors.gray1c1c1c};
  background: ${themes.colors.gray1a1a1a};
  width: 100%;
  margin-top: 3rem;
  color: ${themes.colors.gray};
  padding: 1rem;

  @media (max-width: 600px) {
    flex-wrap: wrap;
    justify-content: center;

    p {
      font-size: 0.8rem;
    }
  }
`;

export const CircleContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 100px;
  background-color: ${themes.colors.primary};
  text-align: center;
  padding: 14px;
  cursor: pointer;

  svg {
    color: ${themes.colors.black};
    font-size: 1.5rem;
  }
`;
