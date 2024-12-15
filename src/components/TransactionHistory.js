import React from "react";
import IncomeExpenseList from "./IncomeExpenseList";
import "./TransactionHistory.css";

const TransactionHistory = () => {
  return (
    <div>
      <h2>Transaction History</h2>
      <IncomeExpenseList />
    </div>
  );
};

export default TransactionHistory;
