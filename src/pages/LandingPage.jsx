import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import TechnologySection from "../components/TechnologySection";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300 overflow-hidden">
      <Header />
      <main className="overflow-hidden">
        <HeroSection />
        <FeaturesSection />
        <TechnologySection />
      </main>

      <footer className="bg-black text-white py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            {/* Logo - menggunakan warna khusus yang tidak dipakai di tempat lain */}
            <div className="w-8 h-8 bg-[#FF6B35] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="font-inter text-xl font-bold">MrProve</span>
          </div>
          <p className="text-gray-400 mb-4">Trustless Proofs. Zero Middlemen.</p>
          <p className="text-gray-600 text-sm">© 2025 MrProve. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
