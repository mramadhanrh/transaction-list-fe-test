import { ChangeEventHandler, FC, useState } from 'react';
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
  onFilterData?(sortOption: TransactionListSort): void;
  onSearchData?: ChangeEventHandler<HTMLInputElement>;
}

const Home: FC<HomeProps> = ({
  data = [],
  searchValue = '',
  onFilterData = () => [],
  onSearchData = () => {},
}) => {
  const [activeSort, setActiveSort] = useState<TransactionListSort | null>(
    null
  );

  const handleSortSelect = (idx: number) => {
    setActiveSort(idx);
    onFilterData(idx);
  };

  return (
    <MobileTemplate>
      <TransactionTemplate
        title="Daftar Transaksi"
        greeting="Halo kak!"
        description="Kamu telah melakukan transaksi sebesar {amount} sejak menggunakan Flip"
        amount={5000000}
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
          <TransactionList data={data} />
        </ListWrapper>
      </TransactionTemplate>
    </MobileTemplate>
  );
};

export default withTransactionList(Home);
