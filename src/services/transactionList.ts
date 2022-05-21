import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  TransactionItemData,
  TransactionListData,
} from '../interfaces/transactionList';
export const transactionList = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://cors-anywhere.herokuapp.com/https://recruitment-test.flip.id/',
  }),
  endpoints: (builder) => ({
    getTransactionList: builder.query<TransactionItemData[], void>({
      query: () => 'frontend-test',
      transformResponse: (response: TransactionListData) =>
        Object.values(response),
    }),
  }),
});

export const { useGetTransactionListQuery } = transactionList;
