import React from "react";
import {useTheme} from "../contexts/ThemeContext";
import {useOnboarding} from "../components/Onboarding/hooks/useOnboarding";
import OnboardingHeader from "../components/Onboarding/OnboardringHeader";
import OnboardingStep from "../components/Onboarding/OnboardingStep";

const Onboarding = () => {
  const {isDark} = useTheme();
  const {
    currentStep,
    currentStepIndex,
    steps,
    isExtensionInstalled,
    isWalletConnected,
    selectedBrowser,
    selectedWallet,
    nextStep,
    prevStep,
    goToStep,
    handleInstallExtension,
    handleConnectWallet,
    getStepProgress,
  } = useOnboarding();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? "bg-dark-primary" : "bg-gray-50"}`}>
      <OnboardingHeader />

      <div className="max-w-4xl mx-auto py-8 px-4">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                <button
                  onClick={() => goToStep(step.id)}
                  className={`flex flex-col items-center transition-all duration-300 ${index <= currentStepIndex ? "text-blue-600 dark:text-blue-400 scale-110" : "text-gray-400"}`}>
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center border-2 mb-2 ${
                      index <= currentStepIndex ? "bg-blue-500 border-blue-500 text-white" : "border-gray-300 dark:border-gray-600 text-gray-400"
                    }`}>
                    {step.icon}
                  </div>
                  <span className="text-xs font-medium whitespace-nowrap">{step.title.split(" ")[0]}</span>
                </button>
                {index < steps.length - 1 && <div className={`flex-1 h-1 mx-2 transition-all duration-300 ${index < currentStepIndex ? "bg-blue-500" : "bg-gray-300 dark:bg-gray-600"}`} />}
              </React.Fragment>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500 ease-out" style={{width: `${getStepProgress()}%`}}></div>
          </div>
        </div>

        {/* Current Step Content */}
        <OnboardingStep
          step={steps.find((s) => s.id === currentStep)}
          isActive={true}
          onInstallExtension={handleInstallExtension}
          onConnectWallet={handleConnectWallet}
          onNext={nextStep}
          onPrev={prevStep}
          isExtensionInstalled={isExtensionInstalled}
          isWalletConnected={isWalletConnected}
          selectedBrowser={selectedBrowser}
          selectedWallet={selectedWallet}
        />
      </div>
    </div>
  );
};

export default Onboarding;
