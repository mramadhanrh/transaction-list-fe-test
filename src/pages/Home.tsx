import { FC } from 'react';
import SearchInput from '../components/molecules/SearchInput';
import TransactionList from '../components/organisms/TransactionList';
import MobileTemplate from '../components/templates/MobileTemplate';
import TransactionTemplate from '../components/templates/TransactionTemplate';

const Home: FC = () => {
  return (
    <MobileTemplate>
      <TransactionTemplate
        title="Daftar Transaksi"
        greeting="Halo kak!"
        description="Kamu telah melakukan transaksi sebesar {amount} sejak menggunakan Flip"
        amount={5000000}
      >
        <SearchInput />
        <TransactionList />
      </TransactionTemplate>
    </MobileTemplate>
  );
};

export default Home;
