import React from "react";
import { useSelector } from "react-redux";
import {
  selectTotalIncome,
  selectTotalExpenses,
  selectBalance,
} from "../redux/reducers";
import { getCurrencySymbol } from "../utils/currencyConverter";
import "./TransactionSummary.css";

const TransactionSummary = () => {
  const totalIncome = useSelector(selectTotalIncome);
  const totalExpenses = useSelector(selectTotalExpenses);
  const balance = useSelector(selectBalance);
  const currency = useSelector((state) => state.currency);
  const symbol = getCurrencySymbol(currency);

  return (
    <div className="transaction-summary">
      <h3>Transaction Summary</h3>
      <div className="summary-item">
        <p>
          Total Income: {symbol}
          {totalIncome.toFixed(2)}
        </p>
      </div>
      <div className="summary-item">
        <p>
          Total Expenses: {symbol}
          {totalExpenses.toFixed(2)}
        </p>
      </div>
      <div className="summary-item">
        <p>
          Balance: {symbol}
          {balance.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default TransactionSummary;
