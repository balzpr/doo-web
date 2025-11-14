import React from "react";

const StepIndicator = ({activeStep}) => {
  const steps = [1, 2, 3, 4];

  return (
    <div className="flex items-center justify-center space-x-4 mb-8">
      {steps.map((step) => (
        <div key={step} className="flex items-center">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
              activeStep >= step ? "bg-blue-500 border-blue-500 text-white scale-110" : "border-gray-300 dark:border-gray-600 text-gray-400"
            }`}>
            {step}
          </div>
          {step < 4 && <div className={`w-8 h-1 mx-2 transition-all duration-300 ${activeStep > step ? "bg-blue-500" : "bg-gray-300 dark:bg-gray-600"}`} />}
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
