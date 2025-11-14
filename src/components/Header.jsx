import React, {useState} from "react";
import {useTheme} from "../contexts/ThemeContext";
import {useNavigate} from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const {isDark, toggleTheme} = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full px-4 sm:px-6 py-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg sm:text-xl">M</span>
          </div>
          <div>
            <span className="font-avenir text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">MrProve</span>
            <div className="h-1 w-6 sm:w-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mt-1"></div>
          </div>
        </div>

        {/* Desktop Navigation & Theme Toggle */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex space-x-8">
            <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
              Features
            </a>
            <a href="#tech" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
              Technology
            </a>
            <a href="/auth" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
              Dashboard
            </a>
            <a href="/p2p-swap" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
              P2P Swap
            </a>
            <a href="/verification" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
              Verification
            </a>
            <a href="/proof-history" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
              Proof History
            </a>
          </nav>

          <button onClick={toggleTheme} className="p-2 rounded-lg bg-gray-100 dark:bg-dark-accent hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors" aria-label="Toggle theme">
            {isDark ? "🌙" : "☀️"}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <button onClick={toggleTheme} className="p-2 rounded-lg bg-gray-100 dark:bg-dark-accent hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors" aria-label="Toggle theme">
            {isDark ? "🌙" : "☀️"}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg bg-gray-100 dark:bg-dark-accent hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            aria-label="Toggle menu">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-4 right-4 bg-white dark:bg-dark-secondary rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50">
          <nav className="flex flex-col p-4 space-y-4">
            <a
              href="#features"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-accent"
              onClick={() => setIsMenuOpen(false)}>
              Features
            </a>
            <a
              href="#tech"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-accent"
              onClick={() => setIsMenuOpen(false)}>
              Technology
            </a>
            <a
              href="/dashboard"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-accent"
              onClick={() => setIsMenuOpen(false)}>
              Dashboard
            </a>
            <a
              href="/p2p-swap"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-accent"
              onClick={() => setIsMenuOpen(false)}>
              P2P Swap
            </a>
            <a
              href="/verification"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-accent"
              onClick={() => setIsMenuOpen(false)}>
              Verification
            </a>
            <a
              href="/proof-history"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-accent"
              onClick={() => setIsMenuOpen(false)}>
              Proof History
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
