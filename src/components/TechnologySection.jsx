import React from "react";

const TechnologySection = () => {
  const technologies = [
    {
      name: "Zero-Knowledge Proofs",
      description: "Prove validity without revealing underlying data. Perfect for privacy-preserving transactions.",
      icon: "🎭",
      specs: ["zk-SNARKs", "zk-STARKs", "Bulletproofs"],
    },
    {
      name: "Blockchain Integration",
      description: "Seamlessly connect with multiple blockchain networks for maximum compatibility.",
      icon: "⛓️",
      specs: ["Ethereum", "Solana", "Polygon", "Avalanche"],
    },
    {
      name: "PrivateProver Protocol",
      description: "Our proprietary verification system ensuring fastest proof generation and validation.",
      icon: "🚀",
      specs: ["< 100ms verification", "99.99% uptime", "Quantum-resistant"],
    },
    {
      name: "Decentralized Identity",
      description: "Self-sovereign identity management without centralized control.",
      icon: "🆔",
      specs: ["DIDs", "Verifiable Credentials", "Biometric integration"],
    },
  ];

  const stats = [
    {number: "10M+", label: "Verifications Daily"},
    {number: "50+", label: "Countries Supported"},
    {number: "99.9%", label: "Uptime SLA"},
    {number: "< 1s", label: "Average Verification"},
  ];

  return (
    <section id="tech" className="w-full px-4 sm:px-6 py-16 lg:py-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-semibold mb-4">Cutting-Edge Technology</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-inter font-bold text-gray-900 dark:text-white mb-4">Built on Advanced Cryptography</h2>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">Leveraging the latest advancements in cryptographic research and distributed systems</p>
        </div>

        {/* Stats - No Gradients */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 lg:mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 lg:p-8">
              <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-black dark:text-white mb-2">{stat.number}</div>
              <div className="text-sm lg:text-base text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 lg:p-8 hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 relative overflow-hidden">
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center text-xl lg:text-2xl transform group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2">{tech.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{tech.description}</p>
                  </div>
                </div>

                {/* Specifications */}
                <div className="flex flex-wrap gap-2">
                  {tech.specs.map((spec, specIndex) => (
                    <span
                      key={specIndex}
                      className="px-3 py-1 bg-white dark:bg-black text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700 group-hover:border-gray-300 dark:group-hover:border-gray-600 transition-colors duration-300">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Architecture Diagram Placeholder */}
        <div className="mt-16 lg:mt-20 bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 lg:p-12 border border-gray-200 dark:border-gray-800">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">System Architecture</h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Our distributed architecture ensures maximum reliability and performance across all operations</p>
          </div>

          {/* Simplified Architecture Visualization */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {["Client Layer", "Verification Layer", "Blockchain Layer"].map((layer, index) => (
                <div key={index} className="bg-white dark:bg-black rounded-xl p-4 text-center border border-gray-200 dark:border-gray-700">
                  <div className="w-8 h-8 bg-gray-800 dark:bg-gray-200 rounded-full mx-auto mb-2 flex items-center justify-center text-white dark:text-black text-sm font-bold">{index + 1}</div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">{layer}</div>
                </div>
              ))}
            </div>

            <div className="bg-white dark:bg-black rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
                {["🔐", "⚡", "🌐", "🛡️"].map((icon, index) => (
                  <div key={index} className="text-center flex-1 min-w-[70px]">
                    <div className="text-xl sm:text-2xl mb-1 sm:mb-2">{icon}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Component {index + 1}</div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-4 text-xs sm:text-sm text-gray-600 dark:text-gray-300">Secure • Fast • Global • Reliable</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA - No Gradients */}
        <div className="text-center mt-16 lg:mt-20">
          <div className="bg-gray-800 rounded-2xl p-8 lg:p-12 border-l-4 border-blue-500">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-white">Start Building with Our API</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">Integrate MrProve technology into your application with our comprehensive developer tools</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">View API Docs</button>
              <button className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">Contact Sales</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
