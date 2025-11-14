import React from "react";

const Step2Confirm = ({swapData, onBack, onConfirm}) => {
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-dark-secondary rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">Confirm Swap</h2>

        <div className="space-y-4">
          <SwapDetail label="You send" value={`${swapData.buyerAmount} ${swapData.buyerCurrency}`} />

          <div className="flex justify-center">
            <SwapArrow />
          </div>

          <SwapDetail label="You receive" value={`${swapData.sellerAmount} ${swapData.sellerCurrency}`} />

          <SecurityNotice />
        </div>
      </div>

      <ActionButtons onBack={onBack} onConfirm={onConfirm} />
    </div>
  );
};

const SwapDetail = ({label, value}) => (
  <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-dark-primary rounded-xl">
    <span className="text-gray-600 dark:text-gray-400">{label}</span>
    <span className="font-bold text-gray-900 dark:text-white">{value}</span>
  </div>
);

const SwapArrow = () => (
  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
    <span className="text-white">↓</span>
  </div>
);

const SecurityNotice = () => (
  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-700">
    <div className="flex items-center space-x-2">
      <span className="text-blue-500">💡</span>
      <span className="text-sm text-blue-700 dark:text-blue-300">This swap is secured by zero-knowledge proofs</span>
    </div>
  </div>
);

const ActionButtons = ({onBack, onConfirm}) => (
  <div className="flex space-x-3">
    <button
      onClick={onBack}
      className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-3 rounded-xl font-semibold transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-700">
      Back
    </button>
    <button
      onClick={onConfirm}
      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-xl font-semibold transition-colors duration-200 transform hover:scale-105">
      Generate Proof
    </button>
  </div>
);

export default Step2Confirm;
