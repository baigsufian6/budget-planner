import React from "react";
import { useSelector } from "react-redux";

const IncomeExpenseList = () => {
  const transactions = useSelector((state) => state.transactions);

  return (
    <div>
      <h3>Transaction History</h3>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            {transaction.type === "income" ? "Income" : "Expense"}: ₹
            {transaction.amount} - {transaction.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IncomeExpenseList;
