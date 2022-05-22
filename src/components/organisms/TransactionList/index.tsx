import { FC } from 'react';
import { TransactionItemData } from '../../../interfaces/transactionList';
import TransactionItem from '../../molecules/TransactionItem';
import { Container } from './style';

interface TransactionListProps {
  data: TransactionItemData[];
  onTransactionClick?(transactionItem: TransactionItemData): void;
}

const TransactionList: FC<TransactionListProps> = ({
  data = [],
  onTransactionClick = () => {},
}) => {
  const getSplittedDate = (date: string) => date.split(' ');
  return (
    <Container>
      {data.map((item, i) => (
        <TransactionItem
          key={i.toString()}
          senderBank={item.sender_bank}
          beneficiaryBank={item.beneficiary_bank}
          beneficiaryName={item.beneficiary_name}
          createdDate={getSplittedDate(item.created_at)[0]}
          amount={item.amount}
          status={item.status}
          onClick={() => onTransactionClick(item)}
        />
      ))}
    </Container>
  );
};

export default TransactionList;
