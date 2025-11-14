import React from "react";

const VerificationCard = ({type, isSelected, onClick}) => {
  return (
    <div
      className={`bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border-2 transition-all duration-300 cursor-pointer hover:scale-105 ${
        isSelected ? "border-blue-600 dark:border-blue-500 shadow-xl" : "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700"
      }`}
      onClick={onClick}>
      {/* Header */}
      <div className="flex items-center space-x-4 mb-4">
        <div className={`w-14 h-14 ${type.color} rounded-full flex items-center justify-center`}>
          <span className="text-white text-2xl">{type.icon}</span>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">{type.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{type.subtitle}</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">{type.description}</p>

      {/* Use Cases */}
      <div className="mb-4">
        <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">Common Use Cases:</p>
        <div className="flex flex-wrap gap-1">
          {type.useCases.map((useCase, index) => (
            <span key={index} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-xs">
              {useCase}
            </span>
          ))}
        </div>
      </div>

      {/* Selected Indicator */}
      {isSelected && (
        <div className="flex items-center justify-center space-x-2 text-blue-600 dark:text-blue-400 mt-2">
          <span className="text-lg">✅</span>
          <span className="text-sm font-medium">Selected - Click to proceed</span>
        </div>
      )}
    </div>
  );
};

export default VerificationCard;
