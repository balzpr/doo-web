import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import Modal from "../../components/Modal/Modal";

const UpgradePlan = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState("pro");
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");

  const plans = [
    {
      id: "starter",
      name: "Starter",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started",
      features: ["Up to 100 verifications/month", "Basic email support", "Standard processing speed", "Community access", "Basic analytics", "1 user account"],
      popular: false,
      current: false,
    },
    {
      id: "pro",
      name: "Pro",
      price: "$29",
      period: "per month",
      description: "Best for growing businesses",
      features: [
        "Up to 10,000 verifications/month",
        "Priority email & chat support",
        "Fast processing speed",
        "Advanced analytics dashboard",
        "API access",
        "Custom verification templates",
        "Batch processing",
        "Up to 5 user accounts",
      ],
      popular: true,
      current: false,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "$99",
      period: "per month",
      description: "For large-scale operations",
      features: [
        "Unlimited verifications",
        "24/7 premium phone support",
        "Instant processing speed",
        "Custom integrations",
        "Dedicated account manager",
        "SLA guarantee",
        "White-label solutions",
        "Advanced security features",
        "Custom reporting",
        "Unlimited user accounts",
      ],
      popular: false,
      current: false,
    },
  ];

  const currentPlan = {
    id: "starter",
    name: "Starter",
    price: "$0",
  };

  const selectedPlanData = plans.find((plan) => plan.id === selectedPlan);

  const handleUpgrade = () => {
    setShowPaymentModal(true);
  };

  const handlePayment = () => {
    // Simulasi proses pembayaran
    alert(`Successfully upgraded to ${selectedPlanData.name} plan!`);
    setShowPaymentModal(false);
    navigate("/dashboard/billing");
  };

  const calculateSavings = () => {
    if (selectedPlan === "enterprise") {
      return "Save 15% compared to monthly billing";
    }
    return null;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Upgrade Your Plan</h1>
          <p className="text-gray-600 dark:text-gray-400">Choose the perfect plan for your needs</p>
        </div>
        <button
          onClick={() => navigate("/dashboard/billing")}
          className="mt-4 lg:mt-0 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
          ← Back to Billing
        </button>
      </div>

      {/* Current Plan Banner */}
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-400">Current Plan</h3>
            <p className="text-blue-700 dark:text-blue-300">
              You're currently on the <span className="font-semibold">{currentPlan.name}</span> plan ({currentPlan.price}/month)
            </p>
          </div>
          <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">Active</span>
        </div>
      </div>

      {/* Plan Comparison */}
      <div className="bg-white dark:bg-dark-secondary rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Compare Plans</h3>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl p-6 border-2 transition-all duration-300 cursor-pointer ${
                selectedPlan === plan.id
                  ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 transform scale-105"
                  : plan.popular
                  ? "border-purple-500 bg-purple-50 dark:bg-purple-900/20 hover:border-purple-300"
                  : "border-gray-200 dark:border-gray-600 bg-white dark:bg-dark-primary hover:border-blue-300"
              }`}
              onClick={() => setSelectedPlan(plan.id)}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">Most Popular</span>
                </div>
              )}

              {selectedPlan === plan.id && (
                <div className="absolute -top-2 -right-2">
                  <div className="bg-blue-500 text-white rounded-full p-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              )}

              <div className="text-center mb-4">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{plan.description}</p>
                <div className="mb-2">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                  <span className="text-gray-500 dark:text-gray-400">/{plan.period}</span>
                </div>
                {calculateSavings() && plan.id === selectedPlan && <p className="text-green-500 text-sm font-medium">{calculateSavings()}</p>}
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
                    <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Selected Plan Summary */}
        <div className="bg-gray-50 dark:bg-dark-primary rounded-xl p-6 border border-gray-200 dark:border-gray-600">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Order Summary</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600 dark:text-gray-400">Selected Plan:</span>
                <span className="font-semibold text-gray-900 dark:text-white">{selectedPlanData.name}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600 dark:text-gray-400">Monthly Price:</span>
                <span className="font-semibold text-gray-900 dark:text-white">{selectedPlanData.price}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Billing Cycle:</span>
                <span className="font-semibold text-gray-900 dark:text-white">Monthly</span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button
                onClick={handleUpgrade}
                disabled={selectedPlan === currentPlan.id}
                className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-200 ${
                  selectedPlan === currentPlan.id
                    ? "bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105"
                }`}>
                {selectedPlan === currentPlan.id ? "Current Plan" : `Upgrade to ${selectedPlanData.name}`}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white dark:bg-dark-secondary rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Can I change plans anytime?</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Is there a contract?</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">No contracts. All plans are month-to-month and you can cancel anytime.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">What payment methods do you accept?</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">We accept all major credit cards, PayPal, and bank transfers for annual plans.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Do you offer refunds?</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Yes, we offer a 14-day money-back guarantee for all new subscriptions.</p>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      <Modal isOpen={showPaymentModal} onClose={() => setShowPaymentModal(false)} size="md">
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Complete Your Upgrade</h3>

          <div className="space-y-4">
            {/* Order Summary */}
            <div className="bg-gray-50 dark:bg-dark-primary rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Order Details</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Plan:</span>
                  <span className="font-semibold">{selectedPlanData.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Price:</span>
                  <span className="font-semibold">{selectedPlanData.price}/month</span>
                </div>
                <div className="flex justify-between border-t border-gray-200 dark:border-gray-600 pt-2">
                  <span className="text-gray-600 dark:text-gray-400">Total Due Today:</span>
                  <span className="font-semibold text-lg">{selectedPlanData.price}</span>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Payment Method</h4>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <button
                  onClick={() => setPaymentMethod("card")}
                  className={`p-3 border-2 rounded-lg transition-all duration-200 ${
                    paymentMethod === "card" ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border-gray-300 dark:border-gray-600 hover:border-gray-400"
                  }`}>
                  💳 Credit Card
                </button>
                <button
                  onClick={() => setPaymentMethod("paypal")}
                  className={`p-3 border-2 rounded-lg transition-all duration-200 ${
                    paymentMethod === "paypal" ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border-gray-300 dark:border-gray-600 hover:border-gray-400"
                  }`}>
                  📊 PayPal
                </button>
              </div>

              {/* Card Form */}
              {paymentMethod === "card" && (
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Card Number"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-primary text-gray-900 dark:text-white"
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <input type="text" placeholder="MM/YY" className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-primary text-gray-900 dark:text-white" />
                    <input type="text" placeholder="CVC" className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-primary text-gray-900 dark:text-white" />
                  </div>
                </div>
              )}

              {/* PayPal Info */}
              {paymentMethod === "paypal" && (
                <div className="text-center py-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <p className="text-yellow-800 dark:text-yellow-400">You'll be redirected to PayPal to complete your payment</p>
                </div>
              )}
            </div>

            <div className="flex space-x-3 pt-4">
              <button
                onClick={() => setShowPaymentModal(false)}
                className="flex-1 py-3 px-4 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 font-semibold">
                Cancel
              </button>
              <button
                onClick={handlePayment}
                className="flex-1 py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-colors duration-200 font-semibold">
                Complete Upgrade
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default UpgradePlan;
