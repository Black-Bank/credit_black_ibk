import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  justify-content: space-between;
  width: 85%;
  margin: 0 auto;

  @media (max-width: 1200px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
