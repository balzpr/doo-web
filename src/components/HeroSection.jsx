import React from "react";
import {useNavigate} from "react-router-dom";
const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full px-4 sm:px-6 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <div className="mb-4 lg:mb-6">
            <span className="inline-block px-3 py-1 sm:px-4 sm:py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs sm:text-sm font-semibold">
              Decentralized Verification
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-avenir font-bold text-gray-900 dark:text-white leading-tight mb-4 lg:mb-6">
            Trustless Proofs.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">Zero Middlemen.</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-6 lg:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            PrivateProver tech lets users <span className="font-semibold text-gray-700 dark:text-gray-200">trade, verify, and pay</span>—without intermediaries.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <button
              onClick={() => navigate("/auth")}
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
              <span>🚀</span>
              Try Demo
            </button>
            <button
              onClick={() => navigate("/onboarding")}
              className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <span>⚡</span>
              Install Extension
            </button>
          </div>

          {/* Stats - Mobile Optimized */}
          <div className="flex justify-center lg:justify-start gap-4 sm:gap-8 mt-8 lg:mt-12 flex-wrap">
            {[
              {number: "99.9%", label: "Uptime"},
              {number: "0ms", label: "Delay"},
              {number: "∞", label: "Scalability"},
            ].map((stat, index) => (
              <div key={index} className="text-center min-w-[80px]">
                <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">{stat.number}</div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Animations - Mobile Optimized */}
        <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 mx-auto">
            {/* Coin Burning Animation */}
            <div className="absolute inset-0 burning-coin flex items-center justify-center">
              <div className="w-40 h-40 sm:w-44 sm:h-44 lg:w-48 lg:h-48 bg-gradient-to-br from-yellow-400 to-orange-500 dark:from-yellow-300 dark:to-orange-400 rounded-full shadow-2xl flex items-center justify-center">
                <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-36 lg:h-36 bg-gradient-to-br from-orange-500 to-red-600 dark:from-orange-400 dark:to-red-500 rounded-full shadow-inner flex items-center justify-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white dark:bg-gray-800 rounded-full opacity-20"></div>
                </div>
              </div>
            </div>

            {/* Burning Effect */}
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="w-16 h-8 sm:w-20 sm:h-10 lg:w-24 lg:h-12 bg-gradient-to-t from-red-500 to-transparent rounded-full blur-lg opacity-60"></div>
            </div>

            {/* Floating Elements - Hide on smallest screens */}
            <div className="hidden sm:block absolute -top-4 -left-4 floating">
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-blue-500 dark:bg-blue-400 rounded-2xl rotate-45 opacity-80"></div>
            </div>
            <div className="hidden sm:block absolute -bottom-4 -right-4 floating" style={{animationDelay: "2s"}}>
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-green-500 dark:bg-green-400 rounded-2xl rotate-12 opacity-80"></div>
            </div>

            {/* Proof Handshake Animation - Mobile Adjusted */}
            <div className="absolute top-1/2 -right-4 sm:-right-8 proof-handshake">
              <div className="flex space-x-1">
                <div className="w-6 h-4 sm:w-8 sm:h-6 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
                <div className="w-6 h-4 sm:w-8 sm:h-6 bg-green-500 dark:bg-green-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
