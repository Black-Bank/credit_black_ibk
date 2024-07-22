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

  .error {
    border-bottom: 1px solid ${themes.colors.error};
  }
`;

type ActionsProps = {
  $buttontype: 'back' | 'next';
};

export const Actions = styled.div<ActionsProps>`
  display: flex;
  justify-content: ${(props) =>
    props.$buttontype === 'back' ? 'space-between' : 'flex-end'};
  padding-top: 2rem;
`;

export const CodeContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;

  img {
    border: 3px solid ${themes.colors.primary};
  }
`;

export const KeyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  border: 3px solid ${themes.colors.primary};
  padding: 1rem;

  button {
    width: 70%;
    margin-top: 1rem;
    color: ${themes.colors.white};
  }

  @media (max-width: 600px) {
    p {
      font-size: 0.4rem;
      width: 100%;
    }
  }

  @media (min-width: 601px) and (max-width: 800px) {
    p {
      font-size: 0.5rem;
      width: 100%;
    }
  }

  @media (min-width: 801px) and (max-width: 1000px) {
    p {
      font-size: 0.7rem;
      width: 100%;
    }
  }
`;
