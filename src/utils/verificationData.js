export const VERIFICATION_TYPES = {
  AGE: {
    id: "age",
    title: "Age Verification",
    subtitle: "Prove you are over 18 without revealing your birth date",
    icon: "🎂",
    color: "from-green-500 to-emerald-600",
    description: "Verify your age meets requirements for services without exposing your exact date of birth.",
    useCases: ["Alcohol purchases", "Adult content", "Gambling sites", "Rental services"],
  },
  EMPLOYMENT: {
    id: "employment",
    title: "Employment Proof",
    subtitle: "Verify employment status without sharing salary or contract details",
    icon: "💼",
    color: "from-blue-500 to-cyan-600",
    description: "Confirm your employment status and role without disclosing sensitive employment information.",
    useCases: ["Loan applications", "Rental applications", "Credit checks", "Service subscriptions"],
  },
  DOMAIN: {
    id: "domain",
    title: "Domain Ownership",
    subtitle: "Prove ownership of a domain without DNS records",
    icon: "🌐",
    color: "from-purple-500 to-pink-600",
    description: "Verify domain ownership through cryptographic proof instead of traditional DNS verification.",
    useCases: ["SSL certificates", "Business verification", "API access", "Partner programs"],
  },
  INCOME: {
    id: "income",
    title: "Income Range",
    subtitle: "Verify income meets threshold without exact figures",
    icon: "💰",
    color: "from-orange-500 to-red-600",
    description: "Prove your income falls within a required range without revealing the exact amount.",
    useCases: ["Loan eligibility", "Rental applications", "Financial services", "Credit limits"],
  },
};

export const VERIFICATION_STEPS = {
  IDLE: "idle",
  GENERATING: "generating",
  VERIFYING: "verifying",
  SUCCESS: "success",
  ERROR: "error",
};
