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

interface TransactionItemProps {
  senderBank?: string;
  beneficiaryBank?: string;
  beneficiaryName?: string;
  createdDate?: string;
  amount?: number;
}

const TransactionItem: FC<TransactionItemProps> = ({
  senderBank = '',
  beneficiaryBank = '',
  beneficiaryName = '',
  createdDate = '',
  amount = 0,
}) => {
  return (
    <Container>
      <InfoWrapper>
        <BankName>
          {senderBank}
          <span>
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
          {beneficiaryBank}
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
      <Button variant="secondary">Pengecekan</Button>
    </Container>
  );
};

export default TransactionItem;
