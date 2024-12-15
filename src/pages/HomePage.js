import React from "react";
import BudgetForm from "../components/BudgetForm";
import TransactionSummary from "../components/TransactionSummary";
import IncomeExpenseList from "../components/IncomeExpenseList";

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>Budget Planner</h1>
      <BudgetForm />
      <TransactionSummary />

      <div className="scrollable-content">
        {/* List of transactions */}
        <IncomeExpenseList />
      </div>
    </div>
  );
};

export default HomePage;
