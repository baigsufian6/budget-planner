import { ADD_TRANSACTION, SET_CURRENCY } from "./actions";

const initialState = {
  transactions: [], // List of all transactions
  currency: "INR", // Default currency is INR
};

// Selectors to compute the total income, expenses, and balance
const getTotalIncome = (transactions) => {
  return transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((total, transaction) => total + parseFloat(transaction.amount), 0);
};

const getTotalExpenses = (transactions) => {
  return transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((total, transaction) => total + parseFloat(transaction.amount), 0);
};

const getBalance = (transactions) => {
  return getTotalIncome(transactions) - getTotalExpenses(transactions);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload], // Add new transaction
      };
    case SET_CURRENCY:
      return {
        ...state,
        currency: action.payload, // Change the currency
      };
    default:
      return state;
  }
};

export default reducer;

// Computed properties (selectors) for total income, total expenses, and balance
export const selectTotalIncome = (state) => getTotalIncome(state.transactions);
export const selectTotalExpenses = (state) =>
  getTotalExpenses(state.transactions);
export const selectBalance = (state) => getBalance(state.transactions);
