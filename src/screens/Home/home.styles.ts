import styled from 'styled-components';
import stone from '../../assets/stone.jpg';

export const HomeContainer = styled.main`
  display: flex;
  width: 100%;
  height: 100vh;
  min-height: 700px;
  background-image: url(${stone});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 600px) {
    .home-container {
      flex-direction: column;
    }
  }

  @media screen and (min-width: 601px) {
    .home-container {
      flex-direction: row;
    }
  }

  .info-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .create-account-card {
    display: flex;
    flex-direction: column;
    padding-top: 30px;
    align-items: left;
    height: 250px;
    width: 300px;
    background-color: #fff;
    border-radius: 15px;
  }
  .info-title {
    color: aliceblue;
    font-size: 30px;
    font-weight: bolder;
  }
  @media screen and (max-width: 600px) {
    .info-title {
      font-size: 20px;
    }
  }
  .info-create-account {
    display: flex;
    justify-content: left;
    margin-left: 20px;
    font-weight: 500;
    width: 100%;
    color: black;
  }
  .info-description {
    color: aliceblue;
    font-size: 25px;
    font-weight: bold;
    margin-top: 15px;
  }

  @media screen and (max-width: 600px) {
    .info-description {
      font-size: 18px;
    }
  }
  .info-document {
    margin-top: 60px;
    font-size: 15px;
    margin-left: 20px;
    color: gray;
  }

  .cpf-input-valid {
    width: 100%;
    color: green;
    height: 100%;
    border: none;
    border-bottom: 1px solid #ccc;
    font-size: 16px;
    outline: none;
    box-sizing: border-box;
    position: relative;
  }

  .cpf-input-invalid {
    width: 100%;
    color: red;
    height: 100%;
    border: none;
    border-bottom: 1px solid #ccc;
    font-size: 16px;

    outline: none;
    box-sizing: border-box;
    position: relative;
  }
  .cpf-input-invalid:focus {
    border-bottom-color: rgb(241, 4, 4);
  }
  .cpf-input-valid:focus {
    border-bottom-color: green;
  }

  .button {
    display: flex;
    height: 48px;
    width: 200px;
    justify-content: center;
    align-self: center;
    margin-top: 30px;
    align-items: center;
    border-radius: 25px;
    color: aliceblue;
    background-color: #624aa7;
    font-weight: bold;
    z-index: 1000;
  }

  .button:hover {
    opacity: 1;
    cursor: pointer;
  }

  .button.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .button.active {
    cursor: pointer;
    opacity: 1;
  }
`;
