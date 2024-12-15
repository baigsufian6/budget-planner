import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTransaction,
  setCurrency,
  convertTransactions,
} from "../redux/actions";
import { getCurrencySymbol } from "../utils/currencyConverter";
import "./BudgetForm.css";

const BudgetForm = () => {
  const dispatch = useDispatch();
  const currentCurrency = useSelector((state) => state.currency);

  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("expense");

  const handleSubmit = (e) => {
    e.preventDefault();
    const numericAmount = parseFloat(amount);

    if (isNaN(numericAmount) || numericAmount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    dispatch(addTransaction({ amount: numericAmount, category, type }));
    setAmount("");
    setCategory("");
  };

  const handleToggleCurrency = () => {
    const newCurrency = currentCurrency === "INR" ? "USD" : "INR";
    dispatch(convertTransactions(newCurrency)); // Converts transactions
    dispatch(setCurrency(newCurrency)); // Updates global currency state
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleToggleCurrency}
        className="currency-toggle-button"
      >
        Switch to {currentCurrency === "INR" ? "USD" : "INR"}
      </button>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder={`Enter Amount (${getCurrencySymbol(currentCurrency)})`}
          required
        />
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Enter Category"
          required
        />
        <select onChange={(e) => setType(e.target.value)} value={type}>
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

export default BudgetForm;
