import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTransaction } from "../redux/actions";

const BudgetForm = () => {
  const dispatch = useDispatch();

  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("expense"); // "income" or "expense"

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount && category) {
      // Dispatch action to add the transaction
      dispatch(addTransaction({ amount, category, type }));
      // Clear form after submission
      setAmount("");
      setCategory("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        required
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
        required
      />
      <select onChange={(e) => setType(e.target.value)} value={type}>
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default BudgetForm;
