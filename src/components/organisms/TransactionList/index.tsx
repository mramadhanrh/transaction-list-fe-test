import { FC } from 'react';
import TransactionItem from '../../molecules/TransactionItem';

const TransactionList: FC = () => {
  return (
    <div>
      <TransactionItem
        senderBank="BCA"
        beneficiaryBank="Mandiri"
        beneficiaryName="BAMBANG HASSAN"
        createdDate="1 Januari 2020"
        amount={7000000}
      />
    </div>
  );
};

export default TransactionList;
