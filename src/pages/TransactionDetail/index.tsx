import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../components/atoms/Button';
import TransactionAlert from '../../components/molecules/TransactionAlert';
import DetailCardTransaction from '../../components/organisms/DetailCardTransaction';
import MobileTemplate from '../../components/templates/MobileTemplate';
import TransactionTemplate from '../../components/templates/TransactionTemplate';
import { useGetTransactionListQuery } from '../../services/transactionList';
import { DetailWrapper } from './style';

const TransactionDetail = () => {
  const { data = {} } = useGetTransactionListQuery();
  const { id = '' } = useParams();
  const navigate = useNavigate();
  const transactionData = data[id] || {};

  const getFormatCreatedDate = (date?: string) => date?.split(' ')[0];

  const handleBackClick = () => navigate('/');

  useEffect(() => {
    if (!data[id]) navigate('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MobileTemplate>
      <TransactionTemplate title="Daftar Transaksi">
        <TransactionAlert transactionId={id} />
        <DetailWrapper>
          <DetailCardTransaction
            senderBank={transactionData.sender_bank}
            beneficiaryBank={transactionData.beneficiary_bank}
            beneficiaryName={transactionData.beneficiary_name}
            accountNumber={transactionData.account_number}
            amount={transactionData.amount}
            uniqueCode={transactionData.unique_code}
            remark={transactionData.remark}
            createdDate={getFormatCreatedDate(transactionData.created_at)}
          />
        </DetailWrapper>
        <Button variant="outline" onClick={handleBackClick}>
          Kembali
        </Button>
      </TransactionTemplate>
    </MobileTemplate>
  );
};

export default TransactionDetail;
