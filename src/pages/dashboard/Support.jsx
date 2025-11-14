import React, {useState} from "react";

const Support = () => {
  const [activeCategory, setActiveCategory] = useState("general");
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const categories = [
    {id: "general", label: "General Help", icon: "❓"},
    {id: "technical", label: "Technical Issues", icon: "🔧"},
    {id: "billing", label: "Billing Support", icon: "💳"},
    {id: "verification", label: "Verification Help", icon: "🔍"},
  ];

  const faqs = {
    general: [
      {question: "How do I get started with MrProve?", answer: "Simply create an account, verify your identity, and start using our verification services."},
      {
        question: "What is zero-knowledge proof?",
        answer: "Zero-knowledge proofs allow one party to prove to another that they know a value, without conveying any information apart from the fact that they know the value.",
      },
      {question: "Is my data secure?", answer: "Yes, we use military-grade encryption and never store your private keys or sensitive data."},
    ],
    technical: [
      {question: "The verification is taking too long", answer: "Verifications usually take 2-5 minutes. If it takes longer, please check your internet connection and try again."},
      {question: "I'm getting an error code", answer: "Error codes can indicate various issues. Please contact our support team with the specific error code for assistance."},
      {question: "The app is not loading properly", answer: "Try clearing your browser cache or using a different browser. If the issue persists, contact support."},
    ],
    billing: [
      {question: "How do I cancel my subscription?", answer: "You can cancel your subscription anytime from the Billing page. No cancellation fees."},
      {question: "Can I get a refund?", answer: "We offer refunds within 14 days of purchase for unused services."},
      {question: "How do I update my payment method?", answer: "Go to Billing → Payment Methods to update your credit card or other payment details."},
    ],
    verification: [
      {question: "What types of verification do you support?", answer: "We support transaction verification, identity verification, and smart contract verification."},
      {question: "How long does verification take?", answer: "Most verifications complete within 2-5 minutes, depending on network conditions."},
      {question: "Can I verify multiple transactions at once?", answer: "Yes, you can batch verify multiple transactions for efficiency."},
    ],
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Component untuk FAQ item dengan animasi
  const FaqItem = ({faq, index, isOpen}) => (
    <div className="border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden">
      <button onClick={() => toggleFaq(index)} className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
        <span className="font-medium text-gray-900 dark:text-white pr-4 text-sm lg:text-base">{faq.question}</span>
        <span className={`text-gray-500 transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="p-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-600">
          <p className="text-gray-600 dark:text-gray-300 text-sm lg:text-base">{faq.answer}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Support</h1>
          <p className="text-gray-600 dark:text-gray-400">Get help and contact our support team</p>
        </div>
        <div className="mt-4 lg:mt-0 flex items-center space-x-4">
          <div className="text-right">
            <p className="text-sm text-gray-500 dark:text-gray-400">Support Status</p>
            <p className="text-xl font-bold text-green-500">Online</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Categories - Mobile: di atas, Desktop: di samping */}
        <div className="lg:w-1/3 space-y-6 order-2 lg:order-1">
          {/* Contact Support - Mobile: di bawah FAQs */}
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-6 text-white lg:hidden">
            <h3 className="text-lg font-semibold mb-4">Need More Help?</h3>
            <p className="text-blue-100 mb-4">Our support team is available 24/7 to assist you.</p>
            <div className="space-y-3">
              <button className="w-full bg-white/20 hover:bg-white/30 py-3 rounded-lg transition-colors duration-200">📞 Call Support</button>
              <button className="w-full bg-white/20 hover:bg-white/30 py-3 rounded-lg transition-colors duration-200">💬 Live Chat</button>
              <button className="w-full bg-white/20 hover:bg-white/30 py-3 rounded-lg transition-colors duration-200">📧 Email Support</button>
            </div>
          </div>

          {/* Categories */}
          <div className="bg-white dark:bg-dark-secondary rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Help Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setOpenFaqIndex(null);
                  }}
                  className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                    activeCategory === category.id ? "bg-blue-500 text-white" : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}>
                  <span className="text-xl">{category.icon}</span>
                  <span className="font-medium text-sm lg:text-base">{category.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Contact Support - Desktop: di samping */}
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-6 text-white hidden lg:block">
            <h3 className="text-lg font-semibold mb-4">Need More Help?</h3>
            <p className="text-blue-100 mb-4">Our support team is available 24/7 to assist you.</p>
            <div className="space-y-3">
              <button className="w-full bg-white/20 hover:bg-white/30 py-3 rounded-lg transition-colors duration-200">📞 Call Support</button>
              <button className="w-full bg-white/20 hover:bg-white/30 py-3 rounded-lg transition-colors duration-200">💬 Live Chat</button>
              <button className="w-full bg-white/20 hover:bg-white/30 py-3 rounded-lg transition-colors duration-200">📧 Email Support</button>
            </div>
          </div>
        </div>

        {/* FAQs dan Contact Form */}
        <div className="lg:w-2/3 space-y-6 order-1 lg:order-2">
          {/* FAQs */}
          <div className="bg-white dark:bg-dark-secondary rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">{categories.find((c) => c.id === activeCategory)?.label} - FAQs</h3>
            <div className="space-y-4">
              {faqs[activeCategory].map((faq, index) => (
                <FaqItem key={index} faq={faq} index={index} isOpen={openFaqIndex === index} />
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-dark-secondary rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact Support Team</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-primary border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white"
                  placeholder="Brief description of your issue"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-primary border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white"
                  placeholder="Detailed description of your issue..."
                />
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-colors duration-200">Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
