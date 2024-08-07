import styled from 'styled-components';
import themes from 'styles/themes.styles';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  border-radius: 20px;
  border: 1px solid ${themes.colors.gray262626};
  background:
    linear-gradient(267deg, #1c1c1c 40.67%, rgba(28, 28, 28, 0) 99.81%)
      lightgray 0% 0% / 62.46418356895447px 62.46418356895447px repeat,
    #1c1c1c;

  background-blend-mode: normal, screen, normal;
  padding: 5rem;

  p {
    color: ${themes.colors.gray};
    margin-top: 0.875rem;
    width: 75%;
  }

  button {
    width: 110%;
  }

  @media (max-width: 1000px) {
    text-align: center;
    flex-wrap: wrap;
    justify-content: center;

    p,
    button {
      width: 100%;
    }

    button {
      margin-top: 1rem;
    }
  }
`;
