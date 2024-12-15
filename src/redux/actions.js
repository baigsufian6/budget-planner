// action types
export const ADD_TRANSACTION = "ADD_TRANSACTION";
export const SET_CURRENCY = "SET_CURRENCY";

// action creators
export const addTransaction = (transaction) => ({
  type: ADD_TRANSACTION,
  payload: transaction,
});

export const setCurrency = (currency) => ({
  type: SET_CURRENCY,
  payload: currency,
});
