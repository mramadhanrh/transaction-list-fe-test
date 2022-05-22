import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TransactionListData } from '../interfaces/transactionList';

export const transactionList = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://cors-anywhere.herokuapp.com/https://recruitment-test.flip.id/',
  }),
  endpoints: (builder) => ({
    getTransactionList: builder.query<TransactionListData, void>({
      query: () => 'frontend-test',
    }),
  }),
});

export const { useGetTransactionListQuery } = transactionList;
