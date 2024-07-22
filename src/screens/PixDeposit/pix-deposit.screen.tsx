import { CircleButton } from 'components/global.styles';
import { IoArrowForwardCircleSharp } from 'react-icons/io5';
import { Actions, Container } from './pix-deposit.styles';
import { CurrencyInput } from 'react-currency-mask';
import { ChangeEvent, useState } from 'react';

export const PixDeposit = () => {
  const [value, setValue] = useState<number | string>(0);

  return (
    <Container>
      <h2>Qual o valor gostaria de depositar usando o Pix?</h2>
      <CurrencyInput
        onChangeValue={function (
          _: ChangeEvent<HTMLInputElement>,
          originalValue: number | string,
        ): void {
          setValue(originalValue);
        }}
        max={1000000000}
        InputElement={<input placeholder="R$ 0,00" />}
      />
      <Actions>
        <CircleButton onClick={() => console.log(value)}>
          <IoArrowForwardCircleSharp />
        </CircleButton>
      </Actions>
    </Container>
  );
};
