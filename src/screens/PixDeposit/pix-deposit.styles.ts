import styled from 'styled-components';
import themes from 'styles/themes.styles';

export const Container = styled.div`
  padding: 2rem;
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.25);
  width: 75%;
  margin: 0 auto;
  border-radius: 20px;

  h2 {
    margin-bottom: 1rem;
  }

  input {
    background: transparent;
    border: none;
    border-bottom: 1px solid ${themes.colors.primary};
    font-size: 1.5rem;
    color: ${themes.colors.white};
    margin-top: 1.5rem;
  }

  input::placeholder {
    color: ${themes.colors.white};
  }

  input:focus {
    outline: 0;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 2rem;
`;
