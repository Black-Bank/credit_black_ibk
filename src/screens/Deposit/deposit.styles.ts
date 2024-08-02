import styled, { css } from 'styled-components';
import themes from 'styles/themes.styles';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 5fr 5fr;
  grid-template-areas: 'left right';
  gap: 1rem;
  width: 80%;
  margin: 0 auto;

  h6 {
    font-size: 1.2rem;
    color: ${themes.colors.gray};
    font-weight: normal;
  }

  svg.info {
    font-size: 2rem;
    color: ${themes.colors.information};
  }

  @media (max-width: 900px) {
    display: block;
    width: 100%;
  }
`;

type SelectCoinProps = {
  $borderradius: boolean;
};

export const SelectCoin = styled.div<SelectCoinProps>`
  grid-area: left;
  position: relative;
  background-color: ${themes.colors.gray202022};
  margin: 1rem 0;
  ${(props) =>
    props.$borderradius
      ? css`
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        `
      : css`
          border-radius: 10px;
        `}

  select {
    width: 100%;
    background-color: ${themes.colors.gray202022};
    padding: 1rem;
    text-align: center;
    color: ${themes.colors.white};
    border: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
    font-size: 1rem;
  }
`;

export const Select = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;

  .select-arrow {
    position: absolute;
    right: 0;
    font-size: 1.5rem;
    padding-right: 1rem;
    cursor: pointer;
  }

  img {
    width: 3rem;
  }
`;

export const CurrentOption = styled.div`
  display: flex;
  align-items: center;

  p {
    font-size: 1.3rem;
  }

  span {
    font-size: 0.7rem;
    color: ${themes.colors.gray};
    margin-left: 0.2rem;
  }
`;

export const Options = styled.div`
  position: absolute;
  text-align: center;
  padding: 2rem;
  font-style: italic;
  background-color: ${themes.colors.gray202022};
  width: 85.2%;
  display: flex;
  justify-content: center;

  img {
    width: 3rem;
  }

  @media (min-width: 1500px) {
    width: 89.3%;
  }
`;

export const OrientationsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: left;
  background-color: ${themes.colors.gray202022};
  margin: 1rem 0;
  border-radius: 10px;

  @media (min-width: 1500px) {
    height: 37.7rem;
  }
`;

export const Orientations = styled.div`
  width: 70%;
  margin: 0 auto;
  padding: 2rem 0;
`;

export const Orientation = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

export const AddressContainer = styled.div`
  grid-area: right;
`;

export const Address = styled.div`
  background-color: ${themes.colors.gray202022};
  margin: 1rem 0;
  border-radius: 10px;
  height: 92%;
`;

export const AddressContent = styled.div`
  width: 70%;
  margin: 0 auto;
  padding: 2rem 0;

  span {
    color: ${themes.colors.gray};
  }

  svg.info {
    font-size: 1.2rem;
  }

  input {
    display: block;
    background: none;
    border: 0;
    border-bottom: 1px solid ${themes.colors.primary};
    margin: 1rem 0;
    color: ${themes.colors.white};
    font-size: 1.2rem;
  }

  p.value,
  p.converted-value {
    font-size: 1.2rem;
  }

  .address-orientation {
    border-top: 2px solid ${themes.colors.gray262626};
    border-bottom: 2px solid ${themes.colors.gray262626};
    margin: 0.8rem 0;
    padding: 0.5rem 0;
  }
`;

export const AddressSelect = styled.div`
  span {
    border-bottom: 1px solid ${themes.colors.primary};
    font-size: 1.2rem;
  }
`;

export const Payment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 50%;
    margin-top: 1rem;
  }

  p {
    font-size: 0.6rem;
    margin-top: 1rem;
  }
`;
