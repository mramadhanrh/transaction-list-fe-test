import { FC } from 'react';
import SortSearchInput from '../../components/organisms/SortSearchInput';
import TransactionList from '../../components/organisms/TransactionList';
import MobileTemplate from '../../components/templates/MobileTemplate';
import TransactionTemplate from '../../components/templates/TransactionTemplate';
import { useGetTransactionListQuery } from '../../services/transactionList';

import { ListWrapper } from './style';

const Home: FC = () => {
  const { data = [], error, isLoading } = useGetTransactionListQuery();

  return (
    <MobileTemplate>
      <TransactionTemplate
        title="Daftar Transaksi"
        greeting="Halo kak!"
        description="Kamu telah melakukan transaksi sebesar {amount} sejak menggunakan Flip"
        amount={5000000}
      >
        <SortSearchInput
          placeholder="Cari nama atau bank"
          sortData={[
            'Nama A-Z',
            'Nama Z-A',
            'Tanggal terbaru',
            'Tanggal terlama',
          ]}
        />
        <ListWrapper>
          <TransactionList data={data} />
        </ListWrapper>
      </TransactionTemplate>
    </MobileTemplate>
  );
};

export default Home;
