import { useState } from "react";

const useCurrency = (initialCurrency = "INR") => {
  const [currency, setCurrency] = useState(initialCurrency);

  const toggleCurrency = () => {
    setCurrency((prev) => (prev === "INR" ? "USD" : "INR"));
  };

  return { currency, toggleCurrency };
};

export default useCurrency;
