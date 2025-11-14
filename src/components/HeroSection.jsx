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
            <span className="inline-block px-3 py-1 sm:px-4 sm:py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-xs sm:text-sm font-semibold">
              Decentralized Verification
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-inter font-bold text-gray-900 dark:text-white leading-tight mb-4 lg:mb-6">
            Trustless Proofs.
            <br />
            <span className="text-black dark:text-white">Zero Middlemen.</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-6 lg:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            PrivateProver tech lets users <span className="font-semibold text-gray-700 dark:text-gray-200">trade, verify, and pay</span>—without intermediaries.
          </p>

          {/* CTA Buttons - No Gradients */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <button
              onClick={() => navigate("/auth")}
              className="bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-black px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
              <span>🚀</span>
              Try Demo
            </button>
            <button
              onClick={() => navigate("/onboarding")}
              className="border-2 border-gray-800 dark:border-gray-300 text-gray-800 dark:text-gray-300 hover:bg-gray-800 dark:hover:bg-gray-300 hover:text-white dark:hover:text-black px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
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
            {/* Coin Burning Animation - Solid Colors */}
            <div className="absolute inset-0 burning-coin flex items-center justify-center">
              <div className="w-40 h-40 sm:w-44 sm:h-44 lg:w-48 lg:h-48 bg-yellow-500 dark:bg-yellow-400 rounded-full shadow-2xl flex items-center justify-center">
                <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-36 lg:h-36 bg-orange-500 dark:bg-orange-400 rounded-full shadow-inner flex items-center justify-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white dark:bg-gray-800 rounded-full opacity-20"></div>
                </div>
              </div>
            </div>

            {/* Burning Effect */}
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="w-16 h-8 sm:w-20 sm:h-10 lg:w-24 lg:h-12 bg-red-500 rounded-full blur-lg opacity-60"></div>
            </div>

            {/* Floating Elements - Solid Colors */}
            <div className="hidden sm:block absolute -top-4 -left-4 floating">
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gray-800 dark:bg-gray-200 rounded-2xl rotate-45 opacity-80"></div>
            </div>
            <div className="hidden sm:block absolute -bottom-4 -right-4 floating" style={{animationDelay: "2s"}}>
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gray-600 dark:bg-gray-400 rounded-2xl rotate-12 opacity-80"></div>
            </div>

            {/* Proof Handshake Animation */}
            <div className="absolute top-1/2 -right-4 sm:-right-8 proof-handshake">
              <div className="flex space-x-1">
                <div className="w-6 h-4 sm:w-8 sm:h-6 bg-gray-800 dark:bg-gray-200 rounded-full"></div>
                <div className="w-6 h-4 sm:w-8 sm:h-6 bg-gray-600 dark:bg-gray-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
