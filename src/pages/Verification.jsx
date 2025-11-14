import React, {useState} from "react";
import {useTheme} from "../contexts/ThemeContext";
import {useVerification} from "../components/Verification/hooks/useVerification";
import {VERIFICATION_TYPES} from "../utils/verificationData";
import VerificationHeader from "../components/Verification/VerificationHeader";
import ProofResult from "../components/Verification/ProofResult";

const Verification = () => {
  const {isDark} = useTheme();
  const {selectedType, verificationStep, proofData, userInput, setUserInput, startVerification, resetVerification, setSelectedType} = useVerification();

  const [activeTab, setActiveTab] = useState("types"); // 'types' or 'input'

  const handleCardClick = (type) => {
    setSelectedType(type);
    setActiveTab("input");
  };

  const handleStartVerification = () => {
    if (selectedType && userInput) {
      startVerification(selectedType.id);
    }
  };

  const handleBackToTypes = () => {
    setActiveTab("types");
    setSelectedType(null);
    setUserInput("");
  };

  const isVerificationInProgress = verificationStep !== "idle";

  if (isVerificationInProgress) {
    return (
      <div className={`min-h-screen transition-colors duration-300 ${isDark ? "bg-dark-primary" : "bg-gray-50"}`}>
        <VerificationHeader />
        <div className="max-w-md mx-auto py-4 px-4">
          <ProofResult
            verificationStep={verificationStep}
            proofData={proofData}
            selectedType={selectedType}
            onReset={() => {
              resetVerification();
              setActiveTab("types");
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? "bg-dark-primary" : "bg-gray-50"}`}>
      <VerificationHeader />

      <div className="max-w-md mx-auto py-4 px-4">
        {/* Header - Compact for Mobile */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Zero-Knowledge Verification</h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Prove facts without revealing data</p>
        </div>

        {/* Mobile Tabs */}
        {activeTab === "types" ? (
          <VerificationTypesTab onCardClick={handleCardClick} selectedType={selectedType} />
        ) : (
          <VerificationInputTab selectedType={selectedType} userInput={userInput} onInputChange={setUserInput} onStartVerification={handleStartVerification} onBack={handleBackToTypes} />
        )}

        {/* Mobile Info - Simplified */}
        <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-700">
          <div className="flex items-center space-x-2 text-blue-700 dark:text-blue-300">
            <span className="text-lg">🔒</span>
            <div>
              <p className="text-sm font-semibold">Your data stays private</p>
              <p className="text-xs">Processed locally, never stored</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Mobile-optimized sub-components
const VerificationTypesTab = ({onCardClick, selectedType}) => (
  <div className="space-y-4">
    <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">What do you want to verify?</h2>

    <div className="space-y-3">
      {Object.values(VERIFICATION_TYPES).map((type) => (
        <button
          key={type.id}
          onClick={() => onCardClick(type)}
          className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
            selectedType?.id === type.id
              ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 scale-105"
              : "border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-secondary hover:border-gray-300 dark:hover:border-gray-600"
          }`}>
          <div className="flex items-center space-x-3">
            <div className={`w-10 h-10 bg-gradient-to-r ${type.color} rounded-full flex items-center justify-center`}>
              <span className="text-white text-lg">{type.icon}</span>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 dark:text-white text-base">{type.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs">{type.subtitle}</p>
            </div>
            <span className="text-gray-400 text-lg">→</span>
          </div>
        </button>
      ))}
    </div>
  </div>
);

const VerificationInputTab = ({selectedType, userInput, onInputChange, onStartVerification, onBack}) => {
  const getInputConfig = (type) => {
    const configs = {
      age: {
        placeholder: "Select your birth date",
        type: "date",
        label: "Date of Birth",
        description: "We'll verify you're over 18 without storing your birth date",
      },
      employment: {
        placeholder: "your.name@company.com",
        type: "email",
        label: "Work Email",
        description: "We'll verify employment without accessing your emails",
      },
      domain: {
        placeholder: "example.com",
        type: "text",
        label: "Domain Name",
        description: "Cryptographic proof of ownership without DNS records",
      },
      income: {
        placeholder: "Enter approximate amount",
        type: "number",
        label: "Monthly Income",
        description: "Verify income range without exposing exact figures",
      },
    };
    return configs[type?.id] || {placeholder: "Enter information", type: "text", label: "Information"};
  };

  const inputConfig = getInputConfig(selectedType);

  return (
    <div className="space-y-6">
      {/* Back Button and Header */}
      <div className="flex items-center space-x-3">
        <button
          onClick={onBack}
          className="p-2 rounded-lg text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
          ←
        </button>
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{selectedType?.title}</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">{selectedType?.subtitle}</p>
        </div>
      </div>

      {/* Input Section - HANYA SATU INPUT DI SINI */}
      <div className="bg-white dark:bg-dark-secondary rounded-2xl p-5 shadow-lg border border-gray-200 dark:border-gray-700">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">{inputConfig.label}</label>

        <input
          type={inputConfig.type}
          value={userInput}
          onChange={(e) => onInputChange(e.target.value)}
          placeholder={inputConfig.placeholder}
          className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-primary border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white text-base"
        />

        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">{inputConfig.description}</p>
      </div>

      {/* Action Button - Sticky on Mobile */}
      <div className="sticky bottom-4 bg-white dark:bg-dark-secondary rounded-xl p-4 shadow-2xl border border-gray-200 dark:border-gray-700">
        <button
          onClick={onStartVerification}
          disabled={!userInput}
          className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-200 ${
            !userInput
              ? "bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl"
          }`}>
          Generate Proof
        </button>
        <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-2">🔒 Your data never leaves your device</p>
      </div>
    </div>
  );
};

export default Verification;
  