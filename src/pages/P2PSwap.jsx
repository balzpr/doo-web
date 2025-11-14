import React from "react";
import {useTheme} from "../contexts/ThemeContext";
import {useP2PSwap} from "../components/P2PSwap/hooks/useP2PSwap";
import SwapHeader from "../components/P2PSwap/SwapHeader";
import StepIndicator from "../components/P2PSwap/StepIndicator";
import Step1Input from "../components/P2PSwap/Step1Input";
import Step2Confirm from "../components/P2PSwap/Step2Confirm";
import Step3Processing from "../components/P2PSwap/Step3Processing";
import Step4Success from "../components/P2PSwap/Step4Success";

const P2PSwap = () => {
  const {isDark} = useTheme();
  const {activeStep, setActiveStep, swapData, setSwapData, proofs, isGenerating, handleGenerateProof, resetSwap, isFormValid} = useP2PSwap();

  const handleUpdateSwapData = (updates) => {
    setSwapData((prev) => ({...prev, ...updates}));
  };

  const renderStep = () => {
    switch (activeStep) {
      case 1:
        return <Step1Input swapData={swapData} onUpdate={handleUpdateSwapData} onNext={() => setActiveStep(2)} isFormValid={isFormValid} />;
      case 2:
        return <Step2Confirm swapData={swapData} onBack={() => setActiveStep(1)} onConfirm={handleGenerateProof} />;
      case 3:
        return <Step3Processing proofs={proofs} />;
      case 4:
        return <Step4Success swapData={swapData} onReset={resetSwap} />;
      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? "bg-black" : "bg-gray-50"}`}>
      <SwapHeader />

      <div className="max-w-md mx-auto py-6 px-4">
        <StepIndicator activeStep={activeStep} />
        {renderStep()}
      </div>
    </div>
  );
};

export default P2PSwap;
