import React from "react";
import {useTheme} from "../../contexts/ThemeContext";

export const TermsOfServiceModal = ({isOpen, onClose}) => {
  const {isDark} = useTheme();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className={`relative max-w-4xl w-full max-h-[85vh] flex flex-col rounded-2xl shadow-2xl ${isDark ? "bg-dark-secondary border-gray-600" : "bg-white border-gray-200"} border`}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-600 flex-shrink-0">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Terms of Service</h2>
          <button
            onClick={onClose}
            className={`p-2 rounded-lg transition-colors duration-200 ${isDark ? "text-gray-400 hover:text-white hover:bg-gray-700" : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"}`}>
            ✕
          </button>
        </div>

        {/* Content - Scrollable */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Last Updated: January 15, 2024</h3>

            <section className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">1. Acceptance of Terms</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-4">By accessing and using MrProve services, you accept and agree to be bound by the terms and provision of this agreement.</p>
            </section>

            <section className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">2. Use License</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-4">Permission is granted to temporarily use MrProve services for personal, non-commercial transitory viewing only.</p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                <li>You must not modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to reverse engineer any software</li>
                <li>Remove any copyright or proprietary notations</li>
                <li>Transfer the materials to another person</li>
              </ul>
            </section>

            <section className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">3. Zero-Knowledge Proof Services</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-4">MrProve provides zero-knowledge proof generation and verification services. Users are responsible for:</p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                <li>Maintaining the security of their cryptographic keys</li>
                <li>Verifying proof validity before accepting transactions</li>
                <li>Complying with local regulations regarding cryptographic services</li>
              </ul>
            </section>

            <section className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">4. Privacy and Data Protection</h4>
              <p className="text-gray-700 dark:text-gray-300">
                We are committed to protecting your privacy. Our zero-knowledge proof technology ensures that your data remains confidential and is never exposed to third parties.
              </p>
            </section>

            <section className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">5. Limitation of Liability</h4>
              <p className="text-gray-700 dark:text-gray-300">In no event shall MrProve be liable for any damages arising out of the use or inability to use our services.</p>
            </section>
          </div>
        </div>

        {/* Footer - Fixed at bottom */}
        <div className="flex justify-end p-6 border-t border-gray-200 dark:border-gray-600 flex-shrink-0">
          <button onClick={onClose} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-colors duration-200">
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};

export const PrivacyPolicyModal = ({isOpen, onClose}) => {
  const {isDark} = useTheme();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className={`relative max-w-4xl w-full max-h-[85vh] flex flex-col rounded-2xl shadow-2xl ${isDark ? "bg-dark-secondary border-gray-600" : "bg-white border-gray-200"} border`}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-600 flex-shrink-0">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Privacy Policy</h2>
          <button
            onClick={onClose}
            className={`p-2 rounded-lg transition-colors duration-200 ${isDark ? "text-gray-400 hover:text-white hover:bg-gray-700" : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"}`}>
            ✕
          </button>
        </div>

        {/* Content - Scrollable */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Your Privacy Matters</h3>

            <section className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Zero-Knowledge Data Protection</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                MrProve is built on the principle of zero-knowledge proofs, meaning we never see or store your sensitive data. Your information remains encrypted and private at all times.
              </p>
            </section>

            <section className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Information We Collect</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-4">We collect minimal information necessary to provide our services:</p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                <li>
                  <strong>Account Information:</strong> Email, name (for authentication)
                </li>
                <li>
                  <strong>Technical Data:</strong> IP addresses, browser type, device information
                </li>
                <li>
                  <strong>Usage Data:</strong> Feature usage patterns (anonymized)
                </li>
                <li>
                  <strong>Proof Metadata:</strong> Timestamps, proof sizes (no content data)
                </li>
              </ul>
            </section>

            <section className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Data We Never See</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-4">Due to our zero-knowledge architecture:</p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                <li>We never see your transaction details</li>
                <li>We never access your private keys</li>
                <li>We never view your proof inputs</li>
                <li>We never store your verification data</li>
              </ul>
            </section>

            <section className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Data Sharing</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification
                information.
              </p>
            </section>

            <section className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Security</h4>
              <p className="text-gray-700 dark:text-gray-300">
                We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your
                personal information.
              </p>
            </section>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end p-6 border-t border-gray-200 dark:border-gray-600 flex-shrink-0">
          <button onClick={onClose} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-colors duration-200">
            Accept Policy
          </button>
        </div>
      </div>
    </div>
  );
};

export const CheckUpdatesModal = ({isOpen, onClose}) => {
  const {isDark} = useTheme();
  const [checking, setChecking] = React.useState(false);
  const [updateAvailable, setUpdateAvailable] = React.useState(false);

  const checkForUpdates = () => {
    setChecking(true);
    // Simulate API call
    setTimeout(() => {
      setChecking(false);
      setUpdateAvailable(true);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className={`relative max-w-md w-full rounded-2xl shadow-2xl ${isDark ? "bg-dark-secondary border-gray-600" : "bg-white border-gray-200"} border`}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-600">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Check for Updates</h2>
          <button
            onClick={onClose}
            className={`p-2 rounded-lg transition-colors duration-200 ${isDark ? "text-gray-400 hover:text-white hover:bg-gray-700" : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"}`}>
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {!updateAvailable ? (
            <div className="text-center">
              <div className="text-6xl mb-4">🔄</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{checking ? "Checking for Updates..." : "Check for New Versions"}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {checking ? "Scanning for the latest features and security updates..." : "Ensure you're running the latest version of MrProve with all security patches and new features."}
              </p>

              {!checking && (
                <div className="space-y-4">
                  <div className="text-left p-4 bg-gray-50 dark:bg-dark-primary rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-900 dark:text-white">Current Version</span>
                      <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm">v2.1.0</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Last checked: Never</p>
                  </div>

                  <button onClick={checkForUpdates} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-colors duration-200">
                    Check Now
                  </button>
                </div>
              )}

              {checking && (
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">This may take a few seconds...</p>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center">
              <div className="text-6xl mb-4 text-green-500">🎉</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Update Available!</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">A new version of MrProve is available with exciting new features and security improvements.</p>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-dark-primary rounded-lg">
                  <span className="text-gray-700 dark:text-gray-300">Current Version</span>
                  <span className="bg-gray-500 text-white px-2 py-1 rounded text-sm">v2.1.0</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <span className="text-gray-700 dark:text-gray-300">New Version</span>
                  <span className="bg-green-500 text-white px-2 py-1 rounded text-sm">v2.2.0</span>
                </div>
              </div>

              <div className="text-left bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl mb-4">
                <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">What's New:</h4>
                <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                  <li>• Enhanced zero-knowledge proof performance</li>
                  <li>• New verification algorithms</li>
                  <li>• Improved security features</li>
                  <li>• Bug fixes and stability improvements</li>
                </ul>
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={onClose}
                  className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-3 rounded-xl font-semibold transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-700">
                  Later
                </button>
                <button
                  onClick={() => {
                    alert("Update process started! The app will restart to apply updates.");
                    onClose();
                  }}
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition-colors duration-200">
                  Update Now
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
