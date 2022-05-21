import { FC } from 'react';
import { TransactionStatus } from '../../../interfaces/transactionList';
import TransactionItem from '../../molecules/TransactionItem';
import { Container } from './style';

const TransactionList: FC = () => {
  return (
    <Container>
      {new Array(20).fill('').map((item, i) => (
        <TransactionItem
          key={i.toString()}
          senderBank="BCA"
          beneficiaryBank="Mandiri"
          beneficiaryName="BAMBANG HASSAN"
          createdDate="1 Januari 2020"
          amount={7000000}
          status={i % 2 ? TransactionStatus.SUCCESS : TransactionStatus.PENDING}
        />
      ))}
    </Container>
  );
};

export default TransactionList;
