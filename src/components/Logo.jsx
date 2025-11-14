import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center space-x-3">
      {/* Logo shape - unique dan tidak digunakan di tempat lain */}
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl rotate-45 flex items-center justify-center shadow-lg">
          <div className="w-6 h-6 bg-white rounded-xl rotate-45"></div>
        </div>
      </div>

      {/* Logo text - Avenir Next Bold style */}
      <div className="font-bold text-2xl tracking-tight">
        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">AuthApp</span>
      </div>
    </div>
  );
};

export default Logo;
