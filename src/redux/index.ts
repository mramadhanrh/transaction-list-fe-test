import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { transactionList } from '../services/transactionList';

export const store = configureStore({
  reducer: {
    [transactionList.reducerPath]: transactionList.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(transactionList.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
