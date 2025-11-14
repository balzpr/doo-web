import {useState} from "react";
import {ONBOARDING_STEPS} from "../../../utils/onboardingData";

export const useOnboarding = () => {
  const [currentStep, setCurrentStep] = useState(ONBOARDING_STEPS.WELCOME.id);
  const [isExtensionInstalled, setIsExtensionInstalled] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [selectedBrowser, setSelectedBrowser] = useState(null);
  const [selectedWallet, setSelectedWallet] = useState(null);

  const steps = Object.values(ONBOARDING_STEPS);
  const currentStepIndex = steps.findIndex((step) => step.id === currentStep);

  const nextStep = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStep(steps[currentStepIndex + 1].id);
    }
  };

  const prevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStep(steps[currentStepIndex - 1].id);
    }
  };

  const goToStep = (stepId) => {
    setCurrentStep(stepId);
  };

  const handleInstallExtension = (browserId) => {
    setSelectedBrowser(browserId);
    setIsExtensionInstalled(true);
    setTimeout(() => nextStep(), 1500);
  };

  const handleConnectWallet = (walletId) => {
    setSelectedWallet(walletId);
    setIsWalletConnected(true);
    setTimeout(() => nextStep(), 1500);
  };

  const resetBrowserSelection = () => {
    setSelectedBrowser(null);
    setIsExtensionInstalled(false);
  };

  const resetWalletSelection = () => {
    setSelectedWallet(null);
    setIsWalletConnected(false);
  };

  const getStepProgress = () => {
    return steps.find((step) => step.id === currentStep)?.progress || 0;
  };

  return {
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
    resetBrowserSelection,
    resetWalletSelection,
  };
};
