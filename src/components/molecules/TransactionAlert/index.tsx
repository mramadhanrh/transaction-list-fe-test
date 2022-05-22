import { FC } from 'react';
import { TransactionStatus } from '../../../interfaces/transactionList';
import Button from '../../atoms/Button';
import { Container, TransactionLabel } from './style';

interface TransactionAlertProps {
  prefixText?: string;
  transactionId?: string;
  status?: TransactionStatus;
}

const TransactionAlert: FC<TransactionAlertProps> = ({
  prefixText = 'ID TRANSAKSI: ',
  transactionId = '',
  status = TransactionStatus.SUCCESS,
}) => {
  const isSuccess = status === TransactionStatus.SUCCESS;

  return (
    <Container>
      <TransactionLabel>{`${prefixText}#${transactionId}`}</TransactionLabel>
      <Button variant={isSuccess ? 'primary' : 'secondary'}>
        {isSuccess ? 'Berhasil' : 'Pengecekan'}
      </Button>
    </Container>
  );
};

export default TransactionAlert;
