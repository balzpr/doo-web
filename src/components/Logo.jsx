// components/Logo.jsx
import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-[#FF6B35] rounded-full flex items-center justify-center">
        <span className="text-white font-bold text-sm">M</span>
      </div>
      <span className="font-bold text-gray-900 dark:text-white text-xl">MrProve</span>
    </div>
  );
};

export default Logo;
