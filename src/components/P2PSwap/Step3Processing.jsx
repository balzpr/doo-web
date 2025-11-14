import React from "react";

const Step3Processing = ({proofs}) => {
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-dark-secondary rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 text-center">
        <LoadingSpinner />
        <ProcessingTitle text="Generating Zero-Knowledge Proofs" />
        <ProcessingDescription text="Securing your swap with advanced cryptography..." />

        <div className="space-y-4">
          <ProofStatus label="Buyer Proof" isComplete={proofs.buyer} statusText={proofs.buyer ? "✅ Verified" : "Generating..."} />
          <ProofStatus label="Seller Proof" isComplete={proofs.seller} statusText={proofs.seller ? "✅ Verified" : "Waiting..."} />
          <TokenBurnStatus isComplete={proofs.burned} statusText={proofs.burned ? "🔥 Completed" : "Pending..."} />
        </div>
      </div>
    </div>
  );
};

const LoadingSpinner = () => <div className="w-20 h-20 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>;

const ProcessingTitle = ({text}) => <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{text}</h2>;

const ProcessingDescription = ({text}) => <p className="text-gray-600 dark:text-gray-400 mb-6">{text}</p>;

const ProofStatus = ({label, isComplete, statusText}) => (
  <div
    className={`p-4 rounded-xl border-2 transition-all duration-500 ${
      isComplete ? "bg-green-50 dark:bg-green-900/20 border-green-300 dark:border-green-700" : "bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600"
    }`}>
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <StatusIndicator isComplete={isComplete} type="proof" />
        <span className="font-medium text-gray-700 dark:text-gray-300">{label}</span>
      </div>
      <span className={isComplete ? "text-green-600 dark:text-green-400 font-semibold" : "text-gray-400"}>{statusText}</span>
    </div>
  </div>
);

const TokenBurnStatus = ({isComplete, statusText}) => (
  <div
    className={`p-4 rounded-xl border-2 transition-all duration-500 ${
      isComplete ? "bg-orange-50 dark:bg-orange-900/20 border-orange-300 dark:border-orange-700" : "bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600"
    }`}>
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <StatusIndicator isComplete={isComplete} type="burn" />
        <span className="font-medium text-gray-700 dark:text-gray-300">Token Burn</span>
      </div>
      <span className={isComplete ? "text-orange-600 dark:text-orange-400 font-semibold" : "text-gray-400"}>{statusText}</span>
    </div>
    {isComplete && <p className="text-sm text-orange-600 dark:text-orange-400 mt-2 font-medium animate-pulse">MrProve burned: 0.5 MRP tokens</p>}
  </div>
);

const StatusIndicator = ({isComplete, type}) => (
  <div
    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
      isComplete ? (type === "burn" ? "bg-orange-500 scale-110 animate-pulse" : "bg-green-500 scale-110") : "bg-gray-400"
    }`}>
    {isComplete ? <span className="text-white text-lg animate-bounce">{type === "burn" ? "🔥" : "✓"}</span> : <div className="w-3 h-3 bg-white rounded-full animate-pulse" />}
  </div>
);

export default Step3Processing;
