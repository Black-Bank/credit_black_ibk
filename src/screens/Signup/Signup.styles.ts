import styled from 'styled-components';

import themes from '../../styles/themes.styles';

export const Container = styled.div`
  border-radius: 1.25rem;
  border: 1px solid ${themes.colors.gray262626};
  background:
    lightgray 50% / cover no-repeat,
    #1c1c1c;
  background-blend-mode: overlay, normal;
  margin-top: 3.31rem;
  padding: 6.25rem 9.37rem;
  text-align: center;

  h1,
  p {
    width: 100%;
  }

  @media (max-width: 600px) {
    padding: 0;
    padding-bottom: 1rem;

    p {
      font-size: 1rem;
      width: 95%;
    }
  }

  @media (min-width: 601px) and (max-width: 800px) {
    padding: 2rem;

    p {
      width: 100%;
    }
  }
`;

export const Actions = styled.div`
  button {
    display: block;
    margin: 2rem auto;
    width: 50%;
    padding: 1.25rem;
  }

  button#login {
    border-radius: 3.93rem;
    border: 1px solid ${themes.colors.gray333333};
    background: ${themes.colors.gray262626};
    margin-top: 1.5rem;
  }
`;

export const Form = styled.form`
  width: 100%;
  margin: 3rem 0;

  input {
    border: 0;
    border-radius: 5.5rem;
    border: 1px solid ${themes.colors.gray262626};
    background: ${themes.colors.gray1a1a1a};
    padding: 1.5rem;
    width: 55%;
    margin: 0.87rem;
    color: ${themes.colors.white};
    outline: none;
  }

  input.error,
  input.error:focus {
    border: 1px solid ${themes.colors.error};
  }

  @media (max-width: 800px) {
    input {
      width: 90%;
      margin: 1rem;
    }
  }
`;
