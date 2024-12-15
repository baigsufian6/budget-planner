// /utils/currencyConverter.js

export const convertCurrency = (amount, fromCurrency, toCurrency) => {
  const rates = {
    INR: {
      INR: 1,
      USD: 0.012, // 1 INR = 0.012 USD
    },
    USD: {
      INR: 83.35, // 1 USD = 83.35 INR
      USD: 1,
    },
  };

  if (fromCurrency === toCurrency) return amount; // No conversion needed

  return parseFloat((amount * rates[fromCurrency][toCurrency]).toFixed(2));
};

// Function to format a number to two decimal places
export const formatAmount = (amount) => {
  return Number(amount).toFixed(2);
};

// Function to get the correct currency symbol
export const getCurrencySymbol = (currency) => (currency === "INR" ? "₹" : "$");
