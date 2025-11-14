import {useState} from "react";

export const useVerification = () => {
  const [selectedType, setSelectedType] = useState(null);
  const [verificationStep, setVerificationStep] = useState("idle");
  const [proofData, setProofData] = useState(null);
  const [userInput, setUserInput] = useState("");

  const startVerification = (type) => {
    setSelectedType(type);
    setVerificationStep("generating");
    setProofData(null);

    // Simulate proof generation
    setTimeout(() => {
      setVerificationStep("verifying");

      setTimeout(() => {
        const proof = generateProofData(type, userInput);
        setProofData(proof);
        setVerificationStep("success");
      }, 2000);
    }, 1500);
  };

  const generateProofData = (type, input) => {
    const proofs = {
      age: {
        statement: "Age is over 18 years",
        verified: true,
        proofId: `ZK_AGE_${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
        timestamp: new Date().toISOString(),
        details: "Zero-knowledge proof confirms age requirement met without revealing birth date",
      },
      employment: {
        statement: "Currently employed in verified organization",
        verified: true,
        proofId: `ZK_EMP_${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
        timestamp: new Date().toISOString(),
        details: "Employment status verified without disclosing employer or salary information",
      },
      domain: {
        statement: "Ownership of domain verified",
        verified: true,
        proofId: `ZK_DOM_${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
        timestamp: new Date().toISOString(),
        details: "Cryptographic proof of domain ownership established",
      },
      income: {
        statement: "Income meets required threshold",
        verified: true,
        proofId: `ZK_INC_${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
        timestamp: new Date().toISOString(),
        details: "Income range verification completed without exposing exact figures",
      },
    };

    return proofs[type] || null;
  };

  const resetVerification = () => {
    setSelectedType(null);
    setVerificationStep("idle");
    setProofData(null);
    setUserInput("");
  };

  return {
    selectedType,
    verificationStep,
    proofData,
    userInput,
    setUserInput,
    startVerification,
    resetVerification,
    setSelectedType,
  };
};
