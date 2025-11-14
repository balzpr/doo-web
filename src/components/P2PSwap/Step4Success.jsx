import React from "react";

const Step4Success = ({swapData, onReset}) => {
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-800 text-center">
        <SuccessIcon />
        <SuccessTitle text="Swap Successful!" />
        <SuccessDescription text="Your trustless P2P swap has been completed securely." />

        <SecurityBadge />
        <SwapSummary swapData={swapData} />
        <ResetButton onReset={onReset} />
      </div>
    </div>
  );
};

// Sub-components dengan nama yang unik
const SuccessIcon = () => <div className="text-6xl mb-4 animate-bounce">🎉</div>;

const SuccessTitle = ({text}) => <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{text}</h2>;

const SuccessDescription = ({text}) => <p className="text-gray-600 dark:text-gray-400 mb-4">{text}</p>;

const SecurityBadge = () => (
  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl mb-6 border border-green-200 dark:border-green-800">
    <div className="flex items-center justify-center space-x-2 text-green-700 dark:text-green-300">
      <span>✅</span>
      <span className="font-semibold">Secured by Zero-Knowledge Proofs</span>
    </div>
  </div>
);

const SwapSummary = ({swapData}) => (
  <div className="grid grid-cols-2 gap-4 mb-6">
    <AmountDisplay amount={swapData.buyerAmount} currency={swapData.buyerCurrency} />
    <AmountDisplay amount={swapData.sellerAmount} currency={swapData.sellerCurrency} />
  </div>
);

const AmountDisplay = ({amount, currency}) => (
  <div className="text-center p-3 bg-gray-50 dark:bg-black rounded-lg">
    <div className="text-lg font-bold text-gray-900 dark:text-white">{amount}</div>
    <div className="text-sm text-gray-600 dark:text-gray-400">{currency}</div>
  </div>
);

const ResetButton = ({onReset}) => (
  <button onClick={onReset} className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold text-lg transition-all duration-200">
    Start New Swap
  </button>
);

export default Step4Success;
