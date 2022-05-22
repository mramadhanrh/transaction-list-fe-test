import { ChangeEventHandler, FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import withTransactionList from '../../components/hoc/withTransactionList';
import SortSearchInput from '../../components/organisms/SortSearchInput';
import TransactionList from '../../components/organisms/TransactionList';
import MobileTemplate from '../../components/templates/MobileTemplate';
import TransactionTemplate from '../../components/templates/TransactionTemplate';
import { transactionSortOptions } from '../../constants/transactionList';
import {
  TransactionItemData,
  TransactionListSort,
} from '../../interfaces/transactionList';

import { ListWrapper } from './style';

interface HomeProps {
  data?: TransactionItemData[];
  searchValue?: string;
  totalTransaction?: number;
  onFilterData?(sortOption: TransactionListSort): void;
  onSearchData?: ChangeEventHandler<HTMLInputElement>;
}

const Home: FC<HomeProps> = ({
  data = [],
  searchValue = '',
  totalTransaction = 0,
  onFilterData = () => [],
  onSearchData = () => {},
}) => {
  const [activeSort, setActiveSort] = useState<TransactionListSort | null>(
    null
  );
  const navigate = useNavigate();

  const handleSortSelect = (idx: number) => {
    setActiveSort(idx);
    onFilterData(idx);
  };

  const handleTransactionClick = (item: TransactionItemData) => {
    navigate(`/${item.id}`);
  };

  return (
    <MobileTemplate>
      <TransactionTemplate
        title="Daftar Transaksi"
        greeting="Halo kak!"
        description="Kamu telah melakukan transaksi sebesar {amount} sejak menggunakan Flip"
        amount={totalTransaction}
      >
        <SortSearchInput
          activeSort={
            activeSort !== null ? transactionSortOptions[activeSort] : 'URUTKAN'
          }
          placeholder="Cari nama atau bank"
          sortData={Object.values(transactionSortOptions)}
          onSelect={handleSortSelect}
          onChange={onSearchData}
          value={searchValue}
        />
        <ListWrapper>
          <TransactionList
            data={data}
            onTransactionClick={handleTransactionClick}
          />
        </ListWrapper>
      </TransactionTemplate>
    </MobileTemplate>
  );
};

export default withTransactionList(Home);
