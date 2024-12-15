import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Navbar from "./pages/Navbar"; // Updated Navbar with theme toggle
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import store from "./redux/store";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
