import styled from 'styled-components';
import themes from 'styles/themes.styles';

export const Container = styled.div`
  background-color: ${themes.colors.gray262626};
  width: 28rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 0.25rem;
  border-radius: 3.75rem;

  @media (max-width: 600px) {
    width: 22rem;
  }
`;
