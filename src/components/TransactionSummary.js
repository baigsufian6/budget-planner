import React from "react";
import { useSelector } from "react-redux";
import {
  selectTotalIncome,
  selectTotalExpenses,
  selectBalance,
} from "../redux/reducers.js";
import "./TransactionSummary.css";

const TransactionSummary = () => {
  const totalIncome = useSelector(selectTotalIncome);
  const totalExpenses = useSelector(selectTotalExpenses);
  const balance = useSelector(selectBalance);

  return (
    <div className="transaction-summary">
      <h3>Transaction Summary</h3>
      <div className="summary-item">
        <p>Total Income: ₹{totalIncome.toFixed(2)}</p>
      </div>
      <div className="summary-item">
        <p>Total Expenses: ₹{totalExpenses.toFixed(2)}</p>
      </div>
      <div className="summary-item">
        <p>Remaining Balance: ₹{balance.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default TransactionSummary;
