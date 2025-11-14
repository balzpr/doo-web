export const PROOF_TYPES = {
  SWAP: {id: "swap", name: "P2P Swap", icon: "🔄", color: "blue"},
  VERIFY: {id: "verify", name: "Verification", icon: "✅", color: "green"},
  PAYMENT: {id: "payment", name: "Payment", icon: "💰", color: "purple"},
};

export const PROOF_STATUS = {
  PENDING: {text: "Pending", color: "yellow", icon: "⏳"},
  VERIFIED: {text: "Verified", color: "green", icon: "✅"},
  BURNED: {text: "Burned", color: "orange", icon: "🔥"},
};

// Sample proof data
export const generateProofData = () => {
  const types = Object.values(PROOF_TYPES);
  const statuses = Object.values(PROOF_STATUS);

  return Array.from({length: 12}, (_, i) => {
    const type = types[Math.floor(Math.random() * types.length)];
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    const timestamp = new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000);

    return {
      id: `proof_${i + 1}`,
      proofId: `ZK${Math.random().toString(36).substr(2, 12).toUpperCase()}`,
      type: type.id, // Pastikan ini match dengan key di PROOF_TYPES
      status: status.text, // Pastikan ini match dengan PROOF_STATUS
      timestamp: timestamp.toISOString(),
      amount: type.id === "swap" ? `$${(Math.random() * 1000).toFixed(2)}` : null,
      details: getProofDetails(type.id),
      hash: `0x${Math.random().toString(16).substr(2, 16)}...${Math.random().toString(16).substr(2, 8)}`,
    };
  }).sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
};

const getProofDetails = (type) => {
  const details = {
    swap: "P2P cryptocurrency swap with zero-knowledge proof",
    verify: "Identity verification without exposing personal data",
    payment: "Secure payment verification with privacy protection",
  };
  return details[type] || "Zero-knowledge proof transaction";
};
