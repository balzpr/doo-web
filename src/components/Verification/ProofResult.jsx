import React from "react";

const ProofResult = ({verificationStep, proofData, selectedType, onReset}) => {
  if (verificationStep === "generating") {
    return (
      <div className="bg-white dark:bg-dark-secondary rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 text-center">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Generating Zero-Knowledge Proof</h3>
        <p className="text-gray-600 dark:text-gray-400">Creating cryptographic proof without exposing your data...</p>
      </div>
    );
  }

  if (verificationStep === "verifying") {
    return (
      <div className="bg-white dark:bg-dark-secondary rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 text-center">
        <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Verifying Proof</h3>
        <p className="text-gray-600 dark:text-gray-400">Validating the zero-knowledge proof on the blockchain...</p>
      </div>
    );
  }

  if (verificationStep === "success" && proofData) {
    return (
      <div className="bg-white dark:bg-dark-secondary rounded-2xl p-8 shadow-lg border border-green-200 dark:border-green-800 text-center">
        {/* Success Icon */}
        <div className="text-6xl mb-4 animate-bounce">✅</div>

        {/* Main Title */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Verification Successful!</h2>

        {/* Tagline */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2 px-4 rounded-full inline-block mb-6">
          <span className="font-bold">Verified by math, not middlemen.</span>
        </div>

        {/* Proof Details */}
        <div className="bg-gray-50 dark:bg-dark-primary rounded-xl p-6 mb-6 text-left">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Proof Statement</h4>
              <p className="text-gray-700 dark:text-gray-300 text-lg">{proofData.statement}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Proof ID</span>
                <p className="text-gray-900 dark:text-white font-mono text-sm">{proofData.proofId}</p>
              </div>
              <div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Verified At</span>
                <p className="text-gray-900 dark:text-white text-sm">{new Date(proofData.timestamp).toLocaleString()}</p>
              </div>
            </div>

            <div>
              <span className="text-sm text-gray-500 dark:text-gray-400">Technical Details</span>
              <p className="text-gray-700 dark:text-gray-300 text-sm">{proofData.details}</p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 mb-6">
          <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">What This Means:</h4>
          <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1 text-left">
            <li>✅ Your personal data remains completely private</li>
            <li>✅ No third parties have access to your information</li>
            <li>✅ Cryptographic proof cannot be forged or altered</li>
            <li>✅ Verification is instant and trustless</li>
          </ul>
        </div>

        {/* Action Button */}
        <button
          onClick={onReset}
          className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-4 rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-105">
          Verify Something Else
        </button>
      </div>
    );
  }

  return null;
};

export default ProofResult;
