import { FC } from 'react';
import { faArrowRight, faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  BankName,
  BeneficiaryName,
  Container,
  DetailInfo,
  InfoWrapper,
} from './style';
import formatCurrency from '../../../utils/formatCurrency';
import Button from '../../atoms/Button';
import { TransactionStatus } from '../../../interfaces/transactionList';
import { formatLocalBank } from '../../../utils/formatLocalBank';

interface TransactionItemProps {
  senderBank?: string;
  beneficiaryBank?: string;
  beneficiaryName?: string;
  createdDate?: string;
  amount?: number;
  status?: TransactionStatus;
  onClick?(): void;
}

const TransactionItem: FC<TransactionItemProps> = ({
  senderBank = '',
  beneficiaryBank = '',
  beneficiaryName = '',
  createdDate = '',
  amount = 0,
  status = TransactionStatus.SUCCESS,
  onClick = () => {},
}) => {
  const isSuccess = status === TransactionStatus.SUCCESS;

  return (
    <Container onClick={onClick} status={status}>
      <InfoWrapper>
        <BankName>
          {formatLocalBank(senderBank)}
          <span>
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
          {formatLocalBank(beneficiaryBank)}
        </BankName>
        <BeneficiaryName>{beneficiaryName}</BeneficiaryName>
        <DetailInfo>
          {formatCurrency(amount)}
          <span>
            <FontAwesomeIcon icon={faCircle} />
          </span>
          {createdDate}
        </DetailInfo>
      </InfoWrapper>
      <Button variant={isSuccess ? 'primary' : 'secondary'}>
        {isSuccess ? 'Berhasil' : 'Pengecekan'}
      </Button>
    </Container>
  );
};

export default TransactionItem;
