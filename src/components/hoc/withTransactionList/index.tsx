import {
  ChangeEvent,
  ChangeEventHandler,
  FC,
  useEffect,
  useState,
} from 'react';
import {
  TransactionItemData,
  TransactionListSort,
} from '../../../interfaces/transactionList';
import { useGetTransactionListQuery } from '../../../services/transactionList';

interface WithTransactionListProps {
  data?: TransactionItemData[];
  searchValue?: string;
  totalTransaction?: number;
  onFilterData?(sortOption: TransactionListSort): void;
  onSearchData?: ChangeEventHandler<HTMLInputElement>;
}

const withTransactionList =
  (WrappedComponent: FC<WithTransactionListProps>): FC =>
  (props) => {
    const { data = {}, isLoading } = useGetTransactionListQuery();
    const [sortedData, setSortedData] = useState<TransactionItemData[]>([]);
    const [searchData, setSearchData] = useState<TransactionItemData[]>([]);
    const [searchValue, setSearchValue] = useState('');
    const [totalTransaction, setTotalTransaction] = useState(0);

    const setCountTotalTransaction = (list: TransactionItemData[]) => {
      setTotalTransaction(list.reduce((a, b) => a + b.amount, 0));
    };

    const handleSortedSearchData = (search: string) => {
      setSearchData(
        sortedData.filter(
          ({
            beneficiary_name: beneficiaryName,
            beneficiary_bank: beneficiaryBank,
            sender_bank: senderBank,
          }) => {
            const lowerCaseSearch = search.toLocaleLowerCase();
            return (
              beneficiaryName.toLowerCase().indexOf(lowerCaseSearch) >= 0 ||
              beneficiaryBank.toLowerCase().indexOf(lowerCaseSearch) >= 0 ||
              senderBank.toLowerCase().indexOf(lowerCaseSearch) >= 0
            );
          }
        )
      );
    };

    const handleSortByLetters = (isAscending: boolean) => {
      const newSortedData = Object.values(data).sort((a, b) => {
        const nameA: string = a.beneficiary_name.toLowerCase();
        const nameB: string = b.beneficiary_name.toLowerCase();

        if (isAscending) return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
        return nameA > nameB ? -1 : nameA < nameB ? 1 : 0;
      });

      setSortedData(newSortedData);
    };

    const handleSortByDate = (isAscending: boolean) => {
      const newSortedData = Object.values(data).sort((a, b) => {
        const dateA: Date = new Date(a.created_at);
        const dateB: Date = new Date(b.created_at);

        if (isAscending) return dateB.getTime() - dateA.getTime();
        return dateA.getTime() - dateB.getTime();
      });

      setSortedData(newSortedData);
    };

    const handleSortData = (sortOption: TransactionListSort) => {
      switch (sortOption) {
        case TransactionListSort.LETTERS_ASCENDING:
        case TransactionListSort.LETTERS_DESCENDING:
          return handleSortByLetters(
            sortOption === TransactionListSort.LETTERS_ASCENDING
          );
        case TransactionListSort.DATE_ASCENDING:
        case TransactionListSort.DATE_DESCENDING:
          return handleSortByDate(
            sortOption === TransactionListSort.DATE_ASCENDING
          );
      }
    };

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value);
      handleSortedSearchData(e.target.value);
    };

    useEffect(() => {
      if (!isLoading) {
        const transactionArr: TransactionItemData[] = Object.values(data);
        setSortedData(transactionArr);
        setCountTotalTransaction(transactionArr);
      }
    }, [data, isLoading]);

    return (
      <WrappedComponent
        {...props}
        data={searchValue ? searchData : sortedData}
        searchValue={searchValue}
        totalTransaction={totalTransaction}
        onFilterData={handleSortData}
        onSearchData={handleSearchChange}
      />
    );
  };

export default withTransactionList;
