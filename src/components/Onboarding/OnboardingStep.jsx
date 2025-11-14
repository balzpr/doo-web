import React from "react";
import {BROWSER_EXTENSIONS, WALLETS} from "../../utils/onboardingData";
import ExtensionMockup from "./ExtensionMockup";
import {useNavigate} from "react-router-dom";

const OnboardingStep = ({step, isActive, onInstallExtension, onConnectWallet, onNext, onPrev, isExtensionInstalled, isWalletConnected, selectedBrowser, selectedWallet}) => {
  if (!isActive) return null;

  const navigate = useNavigate();

  const renderStepContent = () => {
    switch (step.id) {
      case "welcome":
        return <WelcomeStep onNext={onNext} />;
      case "install":
        return <InstallStep onInstall={onInstallExtension} isInstalled={isExtensionInstalled} selectedBrowser={selectedBrowser} onNext={onNext} />;
      case "connect":
        return <ConnectStep onConnect={onConnectWallet} isConnected={isWalletConnected} selectedWallet={selectedWallet} onNext={onNext} />;
      case "proving":
        return <ProvingStep />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {renderStepContent()}

      {/* Navigation - Hide Back button on first step and last step */}
      <div className="flex justify-between pt-6">
        {step.id !== "welcome" && step.id !== "proving" && (
          <button
            onClick={onPrev}
            className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 font-medium">
            Back
          </button>
        )}

        {/* Add invisible spacer to maintain layout when Back button is hidden */}
        {step.id === "welcome" && <div></div>}

        {step.id !== "proving" && (
          <button
            onClick={onNext}
            disabled={(step.id === "install" && !isExtensionInstalled) || (step.id === "connect" && !isWalletConnected)}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
              (step.id === "install" && !isExtensionInstalled) || (step.id === "connect" && !isWalletConnected)
                ? "bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105"
            }`}>
            {step.id === "welcome" ? "Get Started" : "Continue"}
          </button>
        )}
      </div>
    </div>
  );
};

// Sub-components for each step
const WelcomeStep = ({onNext}) => (
  <div className="text-center space-y-6">
    <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto">
      <span className="text-white text-4xl">👋</span>
    </div>

    <div>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Welcome to MrProve</h2>
      <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
        Get ready to experience the future of trustless interactions. Zero-knowledge proofs let you verify information without revealing sensitive data.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
      {[
        {icon: "🔒", title: "Privacy First", desc: "Your data stays with you"},
        {icon: "⚡", title: "Instant Verification", desc: "No more waiting periods"},
        {icon: "🌐", title: "Universal Access", desc: "Works across platforms"},
      ].map((feature, index) => (
        <div key={index} className="bg-white dark:bg-dark-secondary p-4 rounded-xl border border-gray-200 dark:border-gray-700">
          <div className="text-2xl mb-2">{feature.icon}</div>
          <div className="font-semibold text-gray-900 dark:text-white mb-1">{feature.title}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">{feature.desc}</div>
        </div>
      ))}
    </div>

    <button
      onClick={onNext}
      className="w-full max-w-md mx-auto py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
      Get Started
    </button>
  </div>
);

const InstallStep = ({onInstall, isInstalled, selectedBrowser, onNext}) => {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Install Browser Extension</h2>
        <p className="text-gray-600 dark:text-gray-400">Add MrProve to your browser for seamless zero-knowledge proofs</p>
      </div>

      {/* Extension Mockup */}
      <ExtensionMockup isInstalled={isInstalled} />

      {/* Browser Options */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {BROWSER_EXTENSIONS.map((browser) => (
          <button
            key={browser.id}
            onClick={() => onInstall(browser.id)}
            className={`p-4 rounded-xl border-2 transition-all duration-300 ${
              selectedBrowser === browser.id
                ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 scale-105"
                : "border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-secondary hover:border-gray-300 dark:hover:border-gray-600"
            } ${isInstalled && selectedBrowser !== browser.id ? "opacity-50" : "hover:scale-105"}`}>
            <div className="text-3xl mb-2">{browser.icon}</div>
            <div className="font-semibold text-gray-900 dark:text-white">{browser.name}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{browser.users} users</div>
            {selectedBrowser === browser.id && <div className="text-green-500 text-sm mt-1">✓ Selected</div>}
          </button>
        ))}
      </div>

      {isInstalled ? (
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-green-600 dark:text-green-400">
              <span className="text-lg">✅</span>
              <span className="font-semibold">Extension installed successfully!</span>
            </div>
            <button onClick={() => onInstall(null)} className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
              Change browser
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-xl p-4 text-center">
          <p className="text-blue-600 dark:text-blue-400 text-sm">Select your browser above to install the MrProve extension</p>
        </div>
      )}

      {/* Manual Continue Button */}
      {isInstalled && (
        <div className="text-center">
          <button
            onClick={onNext}
            className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
            Continue to Wallet Connection
          </button>
        </div>
      )}
    </div>
  );
};

const ConnectStep = ({onConnect, isConnected, selectedWallet, onNext}) => {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Connect Your Wallet</h2>
        <p className="text-gray-600 dark:text-gray-400">Link your crypto wallet to start proving and verifying</p>
      </div>

      {/* Wallet Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {WALLETS.map((wallet) => (
          <button
            key={wallet.id}
            onClick={() => onConnect(wallet.id)}
            className={`p-6 rounded-xl border-2 transition-all duration-300 text-left ${
              selectedWallet === wallet.id
                ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 scale-105"
                : "border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-secondary hover:border-gray-300 dark:hover:border-gray-600"
            } ${isConnected && selectedWallet !== wallet.id ? "opacity-50" : "hover:scale-105"}`}>
            <div className="flex items-center space-x-4">
              <div className="text-3xl">{wallet.icon}</div>
              <div className="flex-1">
                <div className="font-semibold text-gray-900 dark:text-white text-lg">{wallet.name}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{wallet.description}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">{wallet.users} users</div>
                {selectedWallet === wallet.id && <div className="text-green-500 text-sm mt-2">✓ Connected</div>}
              </div>
            </div>
          </button>
        ))}
      </div>

      {isConnected ? (
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-green-600 dark:text-green-400">
              <span className="text-lg">✅</span>
              <span className="font-semibold">Wallet connected successfully!</span>
            </div>
            <button onClick={() => onConnect(null)} className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
              Change wallet
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-xl p-4 text-center">
          <p className="text-blue-600 dark:text-blue-400 text-sm">Select your wallet above to connect to MrProve</p>
        </div>
      )}

      {/* Manual Continue Button */}
      {isConnected && (
        <div className="text-center">
          <button
            onClick={onNext}
            className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
            Complete Setup
          </button>
        </div>
      )}
    </div>
  );
};

const ProvingStep = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center space-y-8">
      <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto">
        <span className="text-white text-4xl">🎉</span>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">You're All Set!</h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Congratulations! You're ready to start using zero-knowledge proofs. Begin your journey towards trustless and private digital interactions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {[
          {icon: "🔄", title: "P2P Swaps", desc: "Trustless cryptocurrency trading"},
          {icon: "✅", title: "Verifications", desc: "Prove facts without revealing data"},
          {icon: "💰", title: "Payments", desc: "Private and secure transactions"},
        ].map((action, index) => (
          <div key={index} className="bg-white dark:bg-dark-secondary p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
            <div className="text-3xl mb-3">{action.icon}</div>
            <div className="font-semibold text-gray-900 dark:text-white text-lg mb-2">{action.title}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">{action.desc}</div>
          </div>
        ))}
      </div>

      <div className="flex space-x-4 justify-center">
        <button
          onClick={() => navigate("/p2p-swap")}
          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
          Start Proving
        </button>
        <button
          onClick={() => navigate("/")}
          className="px-8 py-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 font-bold text-lg">
          Explore Features
        </button>
      </div>
    </div>
  );
};

export default OnboardingStep;
