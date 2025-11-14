export const CURRENCY_DATA = {
  fiat: [
    {code: "USD", name: "US Dollar", symbol: "$", flag: "🇺🇸"},
    {code: "EUR", name: "Euro", symbol: "€", flag: "🇪🇺"},
    {code: "GBP", name: "British Pound", symbol: "£", flag: "🇬🇧"},
    {code: "IDR", name: "Indonesian Rupiah", symbol: "Rp", flag: "🇮🇩"},
    {code: "SGD", name: "Singapore Dollar", symbol: "S$", flag: "🇸🇬"},
  ],
  crypto: [
    {code: "ETH", name: "Ethereum", symbol: "Ξ", icon: "🔷"},
    {code: "BTC", name: "Bitcoin", symbol: "₿", icon: "🟡"},
    {code: "USDT", name: "Tether", symbol: "₮", icon: "💲"},
    {code: "SOL", name: "Solana", symbol: "◎", icon: "🌀"},
    {code: "BNB", name: "Binance Coin", symbol: "ⓑ", icon: "🟡"},
  ],
};

export const EXCHANGE_RATES = {
  USD: {ETH: 0.00032, BTC: 0.000015, USDT: 1, SOL: 0.04, BNB: 0.0032},
  EUR: {ETH: 0.00035, BTC: 0.000016, USDT: 1.08, SOL: 0.043, BNB: 0.0035},
  GBP: {ETH: 0.00041, BTC: 0.000019, USDT: 1.27, SOL: 0.051, BNB: 0.0041},
  IDR: {ETH: 0.000000005, BTC: 0.00000000023, USDT: 0.000064, SOL: 0.0000026, BNB: 0.000000051},
  SGD: {ETH: 0.00024, BTC: 0.000011, USDT: 0.74, SOL: 0.03, BNB: 0.0024},
};
