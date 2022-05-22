import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MobileTemplate from '../../components/templates/MobileTemplate';
import TransactionTemplate from '../../components/templates/TransactionTemplate';
import { useGetTransactionListQuery } from '../../services/transactionList';

const TransactionDetail = () => {
  const { data = {} } = useGetTransactionListQuery();
  const { id = '' } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!data[id]) navigate('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MobileTemplate>
      <TransactionTemplate title="Daftar Transaksi">
        Detail {id} {JSON.stringify(data[id])}
      </TransactionTemplate>
    </MobileTemplate>
  );
};

export default TransactionDetail;
