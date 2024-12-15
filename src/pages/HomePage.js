import React from "react";

import BudgetForm from "../components/BudgetForm";
import TransactionSummary from "../components/TransactionSummary";
import IncomeExpenseList from "../components/IncomeExpenseList";

const HomePage = () => {
  return (
    <div>
      <h1>Budget Planner</h1>
      <div className="components-container">
        <TransactionSummary />
        <BudgetForm />
        <IncomeExpenseList />
      </div>
    </div>
  );
};

export default HomePage;
