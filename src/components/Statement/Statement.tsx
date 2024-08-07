import {
  DescriptionPercentage,
  Divider,
  HeaderInfo,
  MainDescription,
  MainDescriptionValue,
  StatementContainer,
  Title,
} from './Statement.styles';
export const Statement = () => {
  return (
    <StatementContainer>
      <HeaderInfo>
        <Title>Portfólio</Title>
        <MainDescription>
          <MainDescriptionValue>R$ 10,00</MainDescriptionValue>
          <DescriptionPercentage>3,0%</DescriptionPercentage>
        </MainDescription>
        <Divider />
      </HeaderInfo>
    </StatementContainer>
  );
};
