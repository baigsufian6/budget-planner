import React from "react";
import BudgetForm from "./components/BudgetForm";
import TransactionHistory from "./components/TransactionHistory";

const App = () => {
  return (
    <div>
      <h1>Budget Planner</h1>
      <BudgetForm />
      <TransactionHistory />
    </div>
  );
};

export default App;
