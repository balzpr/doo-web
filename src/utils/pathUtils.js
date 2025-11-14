// Base path untuk GitHub Pages
const BASE_PATH = import.meta.env.PROD ? "/doo-web" : "";

// Auto-correct path berdasarkan environment
export const correctPath = (path) => {
  if (import.meta.env.PROD && !path.startsWith(BASE_PATH) && path !== "/") {
    return BASE_PATH + path;
  }
  return path;
};

// Utility untuk navigation
export const nav = {
  home: correctPath("/"),
  auth: correctPath("/auth"),
  dashboard: correctPath("/dashboard"),
  trade: correctPath("/dashboard/trade"),
  verify: correctPath("/dashboard/verify"),
  history: correctPath("/dashboard/history"),
  settings: correctPath("/dashboard/settings"),
  billing: correctPath("/dashboard/billing"),
  support: correctPath("/dashboard/support"),
  p2p: correctPath("/p2p-swap"),
  verification: correctPath("/verification"),
  proofHistory: correctPath("/proof-history"),
  onboarding: correctPath("/onboarding"),
};
