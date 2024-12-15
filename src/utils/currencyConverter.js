export const convertCurrency = (amount, fromCurrency, toCurrency) => {
  const exchangeRate = 82; // Example rate: 1 USD = 82 INR
  if (fromCurrency === toCurrency) return amount;

  return fromCurrency === "INR"
    ? (amount / exchangeRate).toFixed(2)
    : (amount * exchangeRate).toFixed(2);
};
