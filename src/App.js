import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import HomePage from "./pages/HomePage"; // Import the HomePage component
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

  // Apply dark or light mode theme to the body
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
          Switch to {isDarkMode ? "Light" : "Dark"} Mode
        </button>
        <HomePage /> {/* Render HomePage component */}
      </div>
    </Provider>
  );
};

export default App;
