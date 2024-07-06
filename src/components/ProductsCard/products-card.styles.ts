import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  margin-top: 3rem;

  p {
    width: 20rem;
    text-align: center;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 70px;
  background: linear-gradient(
    180deg,
    rgba(115, 51, 255, 0.05) 0%,
    rgba(202, 255, 51, 0) 100%
  );
  width: 80px;
  height: 80px;
  text-align: center;
`;
