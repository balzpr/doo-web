import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
const Billing = () => {
  const [activeTab, setActiveTab] = useState("subscription");

  const navigate = useNavigate();

  const subscriptionPlans = [
    {
      name: "Starter",
      price: "$0",
      period: "forever",
      features: ["Up to 100 verifications/month", "Basic email support", "Standard processing speed", "Community access", "Basic analytics"],
      popular: false,
    },
    {
      name: "Pro",
      price: "$29",
      period: "per month",
      features: [
        "Up to 10,000 verifications/month",
        "Priority email & chat support",
        "Fast processing speed",
        "Advanced analytics dashboard",
        "API access",
        "Custom verification templates",
        "Batch processing",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "per month",
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
      ],
      popular: false,
    },
  ];

  const paymentHistory = [
    {id: 1, date: "2024-01-15", description: "Pro Plan Subscription", amount: "$29.00", status: "Completed"},
    {id: 2, date: "2023-12-15", description: "Pro Plan Subscription", amount: "$29.00", status: "Completed"},
    {id: 3, date: "2023-11-15", description: "Pro Plan Subscription", amount: "$29.00", status: "Completed"},
  ];

  const invoices = [
    {
      id: "INV-2024-001",
      date: "January 15, 2024",
      amount: "$29.00",
      status: "Paid",
      description: "Pro Plan Subscription - January 2024",
      downloadUrl: "#",
    },
    {
      id: "INV-2023-012",
      date: "December 15, 2023",
      amount: "$29.00",
      status: "Paid",
      description: "Pro Plan Subscription - December 2023",
      downloadUrl: "#",
    },
    {
      id: "INV-2023-011",
      date: "November 15, 2023",
      amount: "$29.00",
      status: "Paid",
      description: "Pro Plan Subscription - November 2023",
      downloadUrl: "#",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Billing</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage your subscription and payment methods</p>
        </div>
        <div className="mt-4 lg:mt-0 flex items-center space-x-4">
          <div className="text-right">
            <p className="text-sm text-gray-500 dark:text-gray-400">Current Plan</p>
            <p className="text-xl font-bold text-green-500">Pro Plan</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white dark:bg-dark-secondary rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="flex space-x-1 mb-6">
          {["subscription", "payment-methods", "invoices"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === tab ? "bg-blue-500 text-white shadow-lg" : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              }`}>
              {tab
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </button>
          ))}
        </div>

        {/* Subscription Plans */}
        {activeTab === "subscription" && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Choose Your Plan</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {subscriptionPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative rounded-2xl p-6 border-2 transition-all duration-300 flex flex-col h-full ${
                    plan.popular ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 transform scale-105" : "border-gray-200 dark:border-gray-600 bg-white dark:bg-dark-primary hover:border-blue-300"
                  }`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">Most Popular</span>
                    </div>
                  )}

                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h4>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                      <span className="text-gray-500 dark:text-gray-400">/{plan.period}</span>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2 text-gray-600 dark:text-gray-300">
                          <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Button selalu di bawah */}
                  <button
                    onClick={() => {
                      if (plan.popular) {
                        navigate("/dashboard/manage-subscription");
                      } else {
                        navigate("/dashboard/upgrade-plan", {state: {selectedPlan: plan.id}});
                      }
                    }}
                    className={`w-full py-3 rounded-lg font-semibold transition-colors duration-200 mt-auto ${
                      plan.popular ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                    }`}>
                    {plan.popular ? "Manage Subscription" : "Upgrade Plan"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Payment History */}
        {activeTab === "payment-methods" && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Payment History</h3>
            <div className="space-y-4">
              {paymentHistory.map((payment) => (
                <div key={payment.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-dark-primary rounded-lg">
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">{payment.description}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{payment.date}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-gray-900 dark:text-white">{payment.amount}</div>
                    <div className="text-sm text-green-500">{payment.status}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Invoices */}
        {activeTab === "invoices" && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Invoice History</h3>
            <div className="space-y-4">
              {invoices.map((invoice) => (
                <div key={invoice.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-dark-primary rounded-lg border border-gray-200 dark:border-gray-600">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="font-semibold text-gray-900 dark:text-white">{invoice.id}</div>
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${invoice.status === "Paid" ? "bg-green-500 text-white" : "bg-yellow-500 text-white"}`}>
                        {invoice.status}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">{invoice.description}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Issued: {invoice.date}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-gray-900 dark:text-white text-lg mb-2">{invoice.amount}</div>
                    <button className="text-blue-500 hover:text-blue-600 text-sm font-medium">Download PDF</button>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty state jika tidak ada invoices */}
            {invoices.length === 0 && (
              <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                <div className="text-4xl mb-4">📄</div>
                <p>No invoices available yet</p>
                <p className="text-sm">Your invoices will appear here after your first payment</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Current Subscription Info */}
      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-6 text-white">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-2">Current Subscription</h3>
            <p className="text-blue-100">Pro Plan - $29/month</p>
            <p className="text-blue-200 text-sm">Next billing date: February 15, 2024</p>
          </div>
          <div className="mt-4 lg:mt-0 flex space-x-3">
            <button onClick={() => navigate("/dashboard/upgrade-plan")} className="px-6 py-2 bg-white text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 font-semibold">
              Upgrade Plan
            </button>
            <button onClick={() => navigate("/dashboard/manage-subscription")} className="px-6 py-2 bg-white text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 font-semibold">
              Manage Subscription
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
