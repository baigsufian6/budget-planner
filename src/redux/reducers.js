import { ADD_TRANSACTION, SET_CURRENCY } from "./actions";

const initialState = {
  transactions: [],
  currency: "INR", // default currency
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
    default:
      return state;
  }
};

export default reducer;
