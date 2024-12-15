import React from "react";
import { useSelector } from "react-redux";
import { getCurrencySymbol } from "../utils/currencyConverter";
import "./IncomeExpenseList.css";

const IncomeExpenseList = () => {
  const transactions = useSelector((state) => state.transactions);
  const currency = useSelector((state) => state.currency);
  const symbol = getCurrencySymbol(currency);

  return (
    <div className="wrapper">
      <h3>Transaction History</h3>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            {transaction.type === "income" ? "Income" : "Expense"}: {symbol}
            {transaction.amount.toFixed(2)} - {transaction.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IncomeExpenseList;
