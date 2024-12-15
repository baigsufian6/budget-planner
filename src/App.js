import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import BudgetForm from "./components/BudgetForm";
import TransactionHistory from "./components/TransactionHistory";
import store from "./redux/store"; // Import the Redux store
import "./App.css"; // Import global styles

const App = () => {
  // Check localStorage for the theme on initial load, default to light mode
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Toggle dark/light mode
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light"); // Save theme in localStorage
      return newMode;
    });
  };

  useEffect(() => {
    // Apply the theme to the body element
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <Provider store={store}>
      <div>
        <h1>Budget Planner</h1>
        <button onClick={toggleTheme}>
          Switch to {isDarkMode ? "Light" : "Dark"} Mode
        </button>
        <BudgetForm />
        <TransactionHistory />
      </div>
    </Provider>
  );
};

export default App;
