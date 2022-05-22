import { FC, ReactNode } from 'react';
import { Container, Description, Greeting, HeadWrapper, Title } from './style';

interface TransactionTemplateProps {
  title?: string;
  greeting?: string;
  description?: string;
  amount?: number | string;
  children?: ReactNode;
}

const TransactionTemplate: FC<TransactionTemplateProps> = ({
  title = '',
  greeting = '',
  description = '',
  amount = '',
  children,
}) => {
  const getDescription = () => {
    const [firstText, closingText] = description.split('{amount}');
    const amountCurrency = `Rp. ${amount
      .toLocaleString()
      .replaceAll(',', '.')}`;
    return (
      <Description>
        {firstText} <span>{amountCurrency}</span> {closingText}
      </Description>
    );
  };

  return (
    <Container>
      <HeadWrapper>
        <Title>{title}</Title>
        <Greeting>{greeting}</Greeting>
        {description && getDescription()}
      </HeadWrapper>
      {children}
    </Container>
  );
};

export default TransactionTemplate;
