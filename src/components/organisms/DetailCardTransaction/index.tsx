import { faInbox } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import formatCurrency from '../../../utils/formatCurrency';
import { formatLocalBank } from '../../../utils/formatLocalBank';
import { Container, InfoWrapper } from './style';

interface DetailCardTransactionProps {
  senderBank?: string;
  beneficiaryBank?: string;
  beneficiaryName?: string;
  accountNumber?: string;
  amount?: number;
  uniqueCode?: number;
  remark?: string;
  createdDate?: string;
}

const DetailCardTransaction: FC<DetailCardTransactionProps> = ({
  senderBank = '',
  beneficiaryBank = '',
  beneficiaryName = '',
  accountNumber = '',
  amount = 0,
  uniqueCode = 0,
  remark = '',
  createdDate = '',
}) => {
  return (
    <Container>
      <FontAwesomeIcon icon={faInbox} />
      <InfoWrapper>
        <div>
          <b>PENGIRIM</b>
          <p>{formatLocalBank(senderBank)}</p>
        </div>
        <div>
          <b>PENERIMA</b>
          <p>{formatLocalBank(beneficiaryBank)}</p>
          <p>{accountNumber}</p>
          <p>{beneficiaryName}</p>
        </div>
        <div>
          <b>NOMINAL</b>
          <p>{formatCurrency(amount)}</p>
          <p>
            <b>Kode Unik:</b>
            {uniqueCode}
          </p>
        </div>
        <div>
          <b>CATATAN</b>
          <p>{remark}</p>
        </div>
        <div>
          <b>WAKTU DIBUAT</b>
          <p>{createdDate}</p>
        </div>
      </InfoWrapper>
    </Container>
  );
};

export default DetailCardTransaction;
