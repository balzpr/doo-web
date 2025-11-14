export const ONBOARDING_STEPS = {
  WELCOME: {
    id: "welcome",
    title: "Welcome to MrProve",
    subtitle: "Get started with zero-knowledge proofs in 3 simple steps",
    icon: "👋",
    progress: 0,
  },
  INSTALL: {
    id: "install",
    title: "Install Browser Extension",
    subtitle: "Add MrProve to your browser for seamless zero-knowledge proofs",
    icon: "🔧",
    progress: 33,
  },
  CONNECT: {
    id: "connect",
    title: "Connect Your Wallet",
    subtitle: "Link your crypto wallet to start proving and verifying",
    icon: "👛",
    progress: 66,
  },
  PROVING: {
    id: "proving",
    title: "Start Proving",
    subtitle: "You're all set! Begin your trustless journey",
    icon: "🚀",
    progress: 100,
  },
};

export const BROWSER_EXTENSIONS = [
  {
    id: "chrome",
    name: "Chrome",
    icon: "🟡",
    storeUrl: "https://chrome.google.com/webstore",
    users: "2M+",
  },
  {
    id: "firefox",
    name: "Firefox",
    icon: "🦊",
    storeUrl: "https://addons.mozilla.org",
    users: "500K+",
  },
  {
    id: "brave",
    name: "Brave",
    icon: "🦁",
    storeUrl: "https://chrome.google.com/webstore",
    users: "1M+",
  },
  {
    id: "edge",
    name: "Edge",
    icon: "🌀",
    storeUrl: "https://microsoftedge.microsoft.com/addons",
    users: "800K+",
  },
];

export const WALLETS = [
  {
    id: "metamask",
    name: "MetaMask",
    icon: "🦊",
    description: "Most popular Ethereum wallet",
    users: "30M+",
  },
  {
    id: "phantom",
    name: "Phantom",
    icon: "👻",
    description: "Solana & Ethereum support",
    users: "5M+",
  },
  {
    id: "walletconnect",
    name: "WalletConnect",
    icon: "🔗",
    description: "Connect any wallet",
    users: "10M+",
  },
  {
    id: "coinbase",
    name: "Coinbase Wallet",
    icon: "🏦",
    description: "From Coinbase exchange",
    users: "15M+",
  },
];
