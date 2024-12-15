import { ADD_TRANSACTION, SET_CURRENCY, CONVERT_TRANSACTIONS } from "./actions";
import { convertCurrency } from "../utils/currencyConverter";

const initialState = {
  transactions: [],
  currency: "INR",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };

    case SET_CURRENCY:
      return {
        ...state,
        currency: action.payload,
      };

    case CONVERT_TRANSACTIONS:
      // Convert all transaction amounts to the new currency
      const convertedTransactions = state.transactions.map((transaction) => {
        const newAmount = convertCurrency(
          transaction.amount,
          state.currency, // Current currency
          action.payload // New currency
        );
        return { ...transaction, amount: newAmount }; // Update transaction with converted amount
      });

      return {
        ...state,
        transactions: convertedTransactions,
        currency: action.payload, // Update current currency
      };

    default:
      return state;
  }
};

export default reducer;

// Selectors for totals and balance
export const selectTotalIncome = (state) =>
  state.transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((total, transaction) => total + transaction.amount, 0);

export const selectTotalExpenses = (state) =>
  state.transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((total, transaction) => total + transaction.amount, 0);

export const selectBalance = (state) =>
  selectTotalIncome(state) - selectTotalExpenses(state);

export const selectCurrency = (state) => state.currency;
