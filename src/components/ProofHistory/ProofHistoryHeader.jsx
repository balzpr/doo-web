import React from "react";
import {useNavigate} from "react-router-dom";

const ProofHistoryHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-30 border-b bg-white dark:bg-dark-secondary border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between h-16 px-4">
        <div className="flex items-center space-x-3">
          <button
            onClick={() => navigate("/")}
            className="p-2 rounded-lg text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
            ←
          </button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="font-bold text-gray-900 dark:text-white">Proof History</span>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs text-green-600 dark:text-green-400 font-medium">Live</span>
        </div>
      </div>
    </header>
  );
};

export default ProofHistoryHeader;
