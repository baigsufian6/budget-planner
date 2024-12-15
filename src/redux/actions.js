// /redux/actions.js

export const ADD_TRANSACTION = "ADD_TRANSACTION";
export const SET_CURRENCY = "SET_CURRENCY";
export const CONVERT_TRANSACTIONS = "CONVERT_TRANSACTIONS";

export const addTransaction = (transaction) => ({
  type: ADD_TRANSACTION,
  payload: transaction,
});

export const setCurrency = (currency) => ({
  type: SET_CURRENCY,
  payload: currency,
});

export const convertTransactions = (currency) => ({
  type: CONVERT_TRANSACTIONS,
  payload: currency,
});
