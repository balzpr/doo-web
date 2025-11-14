import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import TechnologySection from "../components/TechnologySection";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-primary transition-colors duration-300 overflow-hidden">
      <Header />
      <main className="overflow-hidden">
        <HeroSection />
        <FeaturesSection />
        <TechnologySection />
      </main>

      <footer className="bg-gray-900 dark:bg-black text-white py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="font-avenir text-xl font-bold">MrProve</span>
          </div>
          <p className="text-gray-400 mb-4">Trustless Proofs. Zero Middlemen.</p>
          <p className="text-gray-500 text-sm">© 2025 MrProve. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
