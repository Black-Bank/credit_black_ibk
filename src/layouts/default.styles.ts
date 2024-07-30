import styled from 'styled-components';

type ContainerProps = {
  $islogged: boolean;
};

export const Container = styled.div<ContainerProps>`
  width: ${(props) => (props.$islogged ? '100%' : '85%')};
  margin: 0 auto;
`;

export const MainContainer = styled.main`
  width: 85%;
  margin: 0 auto;
`;
