// use these if the internet is down
export const FALLBACK_RATES: Record<string, number> = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  NGN: 1500, // Example rate
  JPY: 151.60,
};

export const convertCurrency = 
(amount: number, from: string, to: string, rates: Record<string, number>) => {
  if (!rates[from] || !rates[to]) return 0;
  // Convert to USD base first, then to target
  const inUSD = amount / rates[from];
  return inUSD * rates[to];
};