import {useState, useEffect} from "react";

export const useP2PSwap = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [swapData, setSwapData] = useState({
    buyerAmount: "",
    buyerCurrency: "USD",
    sellerAmount: "",
    sellerCurrency: "ETH",
    sellerWallet: "",
  });
  const [proofs, setProofs] = useState({
    buyer: false,
    seller: false,
    burned: false,
  });
  const [isGenerating, setIsGenerating] = useState(false);

  // Calculate equivalent amount
  useEffect(() => {
    if (swapData.buyerAmount) {
      const rates = {
        USD: {ETH: 0.00032, BTC: 0.000015, USDT: 1, SOL: 0.04, BNB: 0.0032},
        EUR: {ETH: 0.00035, BTC: 0.000016, USDT: 1.08, SOL: 0.043, BNB: 0.0035},
        GBP: {ETH: 0.00041, BTC: 0.000019, USDT: 1.27, SOL: 0.051, BNB: 0.0041},
        IDR: {ETH: 0.000000005, BTC: 0.00000000023, USDT: 0.000064, SOL: 0.0000026, BNB: 0.000000051},
        SGD: {ETH: 0.00024, BTC: 0.000011, USDT: 0.74, SOL: 0.03, BNB: 0.0024},
      };

      const amount = parseFloat(swapData.buyerAmount);
      if (!isNaN(amount)) {
        const rate = rates[swapData.buyerCurrency]?.[swapData.sellerCurrency];
        if (rate) {
          setSwapData((prev) => ({
            ...prev,
            sellerAmount: (amount * rate).toFixed(8),
          }));
        }
      }
    }
  }, [swapData.buyerAmount, swapData.buyerCurrency, swapData.sellerCurrency]);

  const handleGenerateProof = () => {
    setActiveStep(3);
    setIsGenerating(true);

    // Simulate proof generation
    setTimeout(() => setProofs((p) => ({...p, buyer: true})), 1500);
    setTimeout(() => setProofs((p) => ({...p, seller: true})), 3000);
    setTimeout(() => {
      setProofs((p) => ({...p, burned: true}));
      setIsGenerating(false);
      setTimeout(() => setActiveStep(4), 1000);
    }, 4500);
  };

  const resetSwap = () => {
    setActiveStep(1);
    setSwapData({
      buyerAmount: "",
      buyerCurrency: "USD",
      sellerAmount: "",
      sellerCurrency: "ETH",
      sellerWallet: "",
    });
    setProofs({buyer: false, seller: false, burned: false});
  };

  const isFormValid = swapData.buyerAmount && swapData.sellerWallet;

  return {
    activeStep,
    setActiveStep,
    swapData,
    setSwapData,
    proofs,
    isGenerating,
    handleGenerateProof,
    resetSwap,
    isFormValid,
  };
};
