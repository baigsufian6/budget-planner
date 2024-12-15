import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  const closeMenuOnRoute = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">Budget Planner</h1>
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes className="icon" /> : <FaBars className="icon" />}
        </div>
        <ul className={isOpen ? "nav-list active" : "nav-list"}>
          <li className="nav-item" onClick={closeMenuOnRoute}>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item" onClick={closeMenuOnRoute}>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
        <div className="theme-icon" onClick={toggleTheme}>
          {isDarkMode ? (
            <FaSun className="icon" />
          ) : (
            <FaMoon className="icon" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
