import React from "react";

import BudgetForm from "../components/BudgetForm";
import TransactionSummary from "../components/TransactionSummary";
import IncomeExpenseList from "../components/IncomeExpenseList";

const HomePage = () => {
  return (
    <div>
      <h1>Budget Planner</h1>
      <div></div>
      <BudgetForm />
      <TransactionSummary />
      <IncomeExpenseList />
    </div>
  );
};

export default HomePage;
