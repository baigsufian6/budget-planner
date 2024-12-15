export const convertCurrency = (amount, fromCurrency, toCurrency) => {
  const exchangeRates = {
    INR: 1,
    USD: 0.012, // Example rate: 1 INR = 0.012 USD
  };

  if (!exchangeRates[fromCurrency] || !exchangeRates[toCurrency]) {
    console.error("Invalid currency type");
    return amount;
  }

  const convertedAmount =
    (amount / exchangeRates[fromCurrency]) * exchangeRates[toCurrency];
  return parseFloat(convertedAmount.toFixed(2));
};

export const getCurrencySymbol = (currency) => {
  const symbols = {
    INR: "₹",
    USD: "$",
  };
  return symbols[currency] || currency;
};
