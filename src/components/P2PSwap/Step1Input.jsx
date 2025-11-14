import React from "react";
import {CURRENCY_DATA} from "../../utils/swapCalculations";

const Step1Input = ({swapData, onUpdate, onNext, isFormValid}) => {
  const handleBuyerAmountChange = (amount) => {
    onUpdate({buyerAmount: amount});
  };

  const handleBuyerCurrencyChange = (currency) => {
    onUpdate({buyerCurrency: currency});
  };

  const handleSellerCurrencyChange = (currency) => {
    onUpdate({sellerCurrency: currency});
  };

  const handleSellerWalletChange = (wallet) => {
    onUpdate({sellerWallet: wallet});
  };

  return (
    <div className="space-y-6">
      {/* Buyer Card */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-800">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
            <span className="text-white text-xl">👤</span>
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">You Send</h2>
            <p className="text-gray-600 dark:text-gray-400">Fiat Currency</p>
          </div>
        </div>

        <div className="space-y-4">
          <CurrencyInput
            label="Amount"
            value={swapData.buyerAmount}
            onValueChange={handleBuyerAmountChange}
            currency={swapData.buyerCurrency}
            onCurrencyChange={handleBuyerCurrencyChange}
            currencies={CURRENCY_DATA.fiat}
            placeholder="0.00"
          />
        </div>
      </div>

      {/* Swap Arrow */}
      <div className="flex justify-center">
        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center transform rotate-90 lg:rotate-0">
          <span className="text-white text-xl">🔄</span>
        </div>
      </div>

      {/* Seller Card */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-800">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white text-xl">🏪</span>
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">You Receive</h2>
            <p className="text-gray-600 dark:text-gray-400">Cryptocurrency</p>
          </div>
        </div>

        <div className="space-y-4">
          <CurrencyInput label="Amount" value={swapData.sellerAmount} currency={swapData.sellerCurrency} onCurrencyChange={handleSellerCurrencyChange} currencies={CURRENCY_DATA.crypto} readOnly />

          <WalletInput value={swapData.sellerWallet} onChange={handleSellerWalletChange} />
        </div>
      </div>

      {/* Action Button */}
      <button
        onClick={onNext}
        disabled={!isFormValid}
        className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-200 ${
          !isFormValid ? "bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl"
        }`}>
        Continue to Confirm
      </button>
    </div>
  );
};

// Sub-components for better organization
const CurrencyInput = ({label, value, onValueChange, currency, onCurrencyChange, currencies, readOnly = false, placeholder}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{label}</label>
    <div className="relative">
      <input
        type={readOnly ? "text" : "number"}
        value={value}
        onChange={readOnly ? undefined : (e) => onValueChange(e.target.value)}
        readOnly={readOnly}
        placeholder={placeholder}
        className="w-full pl-4 pr-24 py-4 bg-gray-50 dark:bg-black border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:text-white text-lg font-semibold"
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
        <select value={currency} onChange={(e) => onCurrencyChange(e.target.value)} className="bg-transparent border-0 py-2 pl-2 pr-8 text-gray-700 dark:text-gray-300 focus:ring-0 focus:border-0">
          {currencies.map((curr) => (
            <option key={curr.code} value={curr.code}>
              {curr.flag || curr.icon} {curr.code}
            </option>
          ))}
        </select>
      </div>
    </div>
  </div>
);

const WalletInput = ({value, onChange}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Wallet Address</label>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="0x742d35Cc6634C0532925a3b8..."
      className="w-full px-4 py-3 bg-gray-50 dark:bg-black border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:text-white font-mono text-sm"
    />
  </div>
);

export default Step1Input;
