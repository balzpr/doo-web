import React from "react";

const ExtensionMockup = ({isInstalled = false}) => {
  return (
    <div className="relative">
      {/* Browser Window Mockup */}
      <div className="bg-gray-900 rounded-lg shadow-2xl overflow-hidden border border-gray-700 mx-auto max-w-md">
        {/* Browser Header */}
        <div className="bg-gray-800 px-4 py-2 flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex-1 bg-gray-700 rounded px-3 py-1">
            <div className="text-gray-400 text-xs">mrprove.com/onboarding</div>
          </div>
        </div>

        {/* Browser Content */}
        <div className="bg-gray-800 p-6">
          {/* Extension Popup Mockup */}
          <div className={`bg-white dark:bg-gray-700 rounded-xl shadow-lg border-2 transition-all duration-500 ${isInstalled ? "border-green-500 scale-105" : "border-blue-500"}`}>
            {/* Extension Header */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-t-xl">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold text-sm">M</span>
                </div>
                <div>
                  <div className="text-white font-bold text-sm">MrProve Extension</div>
                  <div className="text-purple-200 text-xs">Zero-Knowledge Proofs</div>
                </div>
              </div>
            </div>

            {/* Extension Content */}
            <div className="p-4 space-y-3">
              {isInstalled ? (
                <>
                  <div className="flex items-center space-x-2 text-green-600">
                    <span className="text-lg">✅</span>
                    <span className="font-semibold text-sm">Extension Active</span>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                    <div className="text-green-800 dark:text-green-300 text-xs">Ready to generate zero-knowledge proofs securely in your browser.</div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center space-x-2 text-blue-600">
                    <span className="text-lg">🔒</span>
                    <span className="font-semibold text-sm">Install to Continue</span>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                    <div className="text-blue-800 dark:text-blue-300 text-xs">Install the MrProve extension to enable trustless verification and private transactions.</div>
                  </div>
                </>
              )}

              {/* Mock Actions */}
              <div className="flex space-x-2 pt-2">
                <div className="flex-1 bg-gray-100 dark:bg-gray-600 rounded px-3 py-2 text-center">
                  <div className="text-gray-600 dark:text-gray-300 text-xs font-medium">{isInstalled ? "Active" : "Install"}</div>
                </div>
                <div className="flex-1 bg-gray-100 dark:bg-gray-600 rounded px-3 py-2 text-center">
                  <div className="text-gray-600 dark:text-gray-300 text-xs font-medium">Settings</div>
                </div>
              </div>
            </div>
          </div>

          {/* Browser Content Below Extension */}
          <div className="mt-4 text-center">
            <div className="text-gray-400 text-xs">{isInstalled ? "Extension installed successfully!" : "Click install to add MrProve to your browser"}</div>
          </div>
        </div>
      </div>

      {/* Glow Effect */}
      <div
        className={`absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-xl -z-10 transition-opacity duration-500 ${
          isInstalled ? "opacity-30" : "opacity-20"
        }`}></div>
    </div>
  );
};

export default ExtensionMockup;
