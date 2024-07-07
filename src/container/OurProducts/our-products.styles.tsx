import styled from 'styled-components';
import themes from 'styles/themes.styles';

export const Container = styled.div`
  p#description {
    width: 40rem;
  }
`;

export const Select = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.875rem;
  border-radius: 82px;
  border: 1px solid ${themes.colors.gray262626};
  background: ${themes.colors.gray1c1c1c};

  @media (max-width: 1200px) {
    width: 100%;
    margin-top: 2rem;
  }
`;
