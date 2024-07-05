import styled from 'styled-components';

type HeaderContainerType = {
  $isHome?: boolean;
};

export const HeaderContainer = styled.header<HeaderContainerType>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: ${(props) => (props.$isHome ? '#271d42' : 'transparent')};

  .container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-direction: row;
    margin-left: 40px;
    margin-right: 40px;
  }

  .login-logo {
    display: flex;
    align-items: center;
  }

  .loading-icon {
    width: 48px;
    height: 48px;
  }

  .login-logo:hover {
    opacity: 0.5;
    cursor: pointer;
  }

  .loading-icon {
    width: 48px;
    height: 48px;
  }

  .login-text {
    font-weight: 18px;
    color: #fff;
    margin-right: 5px;
  }
`;
