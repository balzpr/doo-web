import React from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import {ThemeProvider} from "./contexts/ThemeContext";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Trade from "./pages/dashboard/Trade";
import Verify from "./pages/dashboard/Verify";
import History from "./pages/dashboard/History";
import Settings from "./pages/dashboard/Settings";
import Billing from "./pages/dashboard/Billing";
import Support from "./pages/dashboard/Support";
import ManageSubscription from "./pages/dashboard/ManageSubscription";
import UpgradePlan from "./pages/dashboard/UpgradePlan";
import Notifications from "./pages/dashboard/Notification";
import Documentation from "./pages/dashboard/Documentation";
import FullArticle from "./components/Documentation/FullArticle";
import P2PSwap from "./pages/P2PSwap";
import Verification from "./pages/Verification";
import ProofHistory from "./pages/ProofHistory";
import Onboarding from "./pages/Onboarding";
import AuthPage from "./pages/AuthPage";
import "./index.css";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/p2p-swap" element={<P2PSwap />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/proof-history" element={<ProofHistory />} />
          <Route path="/onboarding" element={<Onboarding />} />
          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<Navigate to="trade" replace />} />
            <Route path="trade" element={<Trade />} />
            <Route path="verify" element={<Verify />} />
            <Route path="history" element={<History />} />
            <Route path="settings" element={<Settings />} />
            <Route path="billing" element={<Billing />} />
            <Route path="support" element={<Support />} />
            <Route path="manage-subscription" element={<ManageSubscription />} />
            <Route path="upgrade-plan" element={<UpgradePlan />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="documentation" element={<Documentation />} />
            {/* Tambahkan route ini di dalam dashboard */}
            <Route path="documentation/article/:articleId" element={<FullArticle />} />
          </Route>
          {/* 404 Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
