import React from "react";

const FeaturesSection = () => {
  const features = [
    {
      icon: "🔒",
      title: "Trustless Verification",
      description: "Mathematical proofs replace trust in third parties. Every transaction is cryptographically verified without relying on intermediaries.",
      color: "text-purple-600 dark:text-purple-400",
    },
    {
      icon: "⚡",
      title: "Instant Settlement",
      description: "Transactions complete in seconds, not days. No more waiting for bank approvals or settlement periods.",
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: "💰",
      title: "Zero Fees",
      description: "No intermediary means no unnecessary costs. Keep 100% of your transaction value without hidden charges.",
      color: "text-green-600 dark:text-green-400",
    },
    {
      icon: "🛡️",
      title: "Military-Grade Security",
      description: "Built with zero-knowledge proofs and advanced cryptography. Your data remains private and secure.",
      color: "text-red-600 dark:text-red-400",
    },
    {
      icon: "🌐",
      title: "Global Access",
      description: "Accessible anywhere in the world. No geographical restrictions or banking limitations.",
      color: "text-indigo-600 dark:text-indigo-400",
    },
    {
      icon: "🔧",
      title: "Developer Friendly",
      description: "Comprehensive APIs and SDKs. Easy integration with existing systems and applications.",
      color: "text-teal-600 dark:text-teal-400",
    },
  ];

  return (
    <section id="features" className="w-full px-4 sm:px-6 py-16 lg:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-semibold mb-4">Why Choose MrProve</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-inter font-bold text-gray-900 dark:text-white mb-4">Revolutionary Features</h2>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">Experience the future of decentralized verification with our cutting-edge technology stack</p>
        </div>

        {/* Features Grid - No Gradients */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-black rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 relative overflow-hidden">
              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-2xl bg-gray-100 dark:bg-gray-800 ${feature.color} flex items-center justify-center text-2xl mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 lg:mt-20">
          <div className="bg-white dark:bg-black rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-200 dark:border-gray-800 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">Ready to Experience the Future?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">Join thousands of users already benefiting from trustless verification technology</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-black px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Free Trial
              </button>
              <button className="border-2 border-gray-800 dark:border-gray-300 text-gray-800 dark:text-gray-300 hover:bg-gray-800 dark:hover:bg-gray-300 hover:text-white dark:hover:text-black px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
