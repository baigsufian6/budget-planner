import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { FaSun, FaMoon } from "react-icons/fa"; // Import icons
import HomePage from "./pages/HomePage";
import store from "./redux/store";
import "./App.css";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <Provider store={store}>
      <div className="app-container">
        <button onClick={toggleTheme} className="theme-toggle-button">
          {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          <span style={{ marginLeft: "8px" }}>
            Switch to {isDarkMode ? "Light" : "Dark"} Mode
          </span>
        </button>
        <HomePage />
      </div>
    </Provider>
  );
};

export default App;
