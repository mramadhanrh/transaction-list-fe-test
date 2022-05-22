import { TransactionListSort } from './../interfaces/transactionList';

export const transactionSortOptions: Record<TransactionListSort, string> = {
  [TransactionListSort.LETTERS_ASCENDING]: 'Nama A-Z',
  [TransactionListSort.LETTERS_DESCENDING]: 'Nama Z-A',
  [TransactionListSort.DATE_ASCENDING]: 'Tanggal terbaru',
  [TransactionListSort.DATE_DESCENDING]: 'Tanggal terlama',
};
