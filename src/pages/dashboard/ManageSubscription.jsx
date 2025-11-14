import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

const ManageSubscription = () => {
  const navigate = useNavigate();
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [cancellationReason, setCancellationReason] = useState("");

  const currentSubscription = {
    plan: "Pro Plan",
    price: "$29.00",
    period: "month",
    status: "Active",
    nextBilling: "February 15, 2024",
    startDate: "January 15, 2023",
    features: ["Up to 10,000 verifications/month", "Priority email & chat support", "Fast processing speed", "Advanced analytics dashboard", "API access", "Custom verification templates"],
  };

  const cancellationReasons = ["Too expensive", "Missing features", "Found a better alternative", "Not using the service enough", "Technical issues", "Customer service", "Other"];

  const handleCancelSubscription = () => {
    // Simulasi cancel subscription
    alert(`Subscription cancelled. Reason: ${cancellationReason || "Not specified"}`);
    setShowCancelModal(false);
    setCancellationReason("");
    // Redirect back to billing
    navigate("/dashboard/billing");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Manage Subscription</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage your Pro Plan subscription and billing details</p>
        </div>
        <button
          onClick={() => navigate("/dashboard/billing")}
          className="mt-4 lg:mt-0 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
          ← Back to Billing
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Current Plan Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Subscription Details */}
          <div className="bg-white dark:bg-dark-secondary rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Subscription Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Current Plan</label>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{currentSubscription.plan}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Monthly Price</label>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{currentSubscription.price}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Status</label>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-500 text-white">{currentSubscription.status}</span>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Next Billing Date</label>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">{currentSubscription.nextBilling}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Start Date</label>
                <p className="text-gray-900 dark:text-white">{currentSubscription.startDate}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Billing Period</label>
                <p className="text-gray-900 dark:text-white">Monthly</p>
              </div>
            </div>
          </div>

          {/* Plan Features */}
          <div className="bg-white dark:bg-dark-secondary rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Included Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentSubscription.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className="text-green-500 text-lg">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Actions Sidebar */}
        <div className="space-y-6">
          {/* Upgrade/Downgrade */}
          <div className="bg-white dark:bg-dark-secondary rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Change Plan</h3>
            <div className="space-y-3">
              <button onClick={() => navigate("/dashboard/upgrade-plan")} className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition-colors duration-200">
                Upgrade Plan
              </button>
              <button className="w-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 py-3 rounded-lg font-semibold transition-colors duration-200">
                Downgrade to Starter
              </button>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="bg-red-50 dark:bg-red-900/20 rounded-2xl p-6 border border-red-200 dark:border-red-800">
            <h3 className="text-lg font-semibold text-red-800 dark:text-red-400 mb-4">Danger Zone</h3>
            <p className="text-red-700 dark:text-red-300 text-sm mb-4">Cancelling your subscription will stop automatic renewals. You'll still have access until the end of your billing period.</p>
            <button onClick={() => setShowCancelModal(true)} className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold transition-colors duration-200">
              Cancel Subscription
            </button>
          </div>

          {/* Support */}
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800">
            <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-400 mb-4">Need Help?</h3>
            <p className="text-blue-700 dark:text-blue-300 text-sm mb-4">Our support team can help with billing questions or plan changes.</p>
            <button onClick={() => navigate("/dashboard/support")} className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition-colors duration-200">
              Contact Support
            </button>
          </div>
        </div>
      </div>

      {/* Cancel Subscription Modal */}
      {showCancelModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-dark-secondary rounded-2xl p-6 w-full max-w-md">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Cancel Subscription</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">We're sorry to see you go. Please let us know why you're cancelling:</p>

            <div className="space-y-3 mb-4">
              {cancellationReasons.map((reason) => (
                <label key={reason} className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="cancellationReason"
                    value={reason}
                    checked={cancellationReason === reason}
                    onChange={(e) => setCancellationReason(e.target.value)}
                    className="text-blue-500 focus:ring-blue-500"
                  />
                  <span className="text-gray-700 dark:text-gray-300">{reason}</span>
                </label>
              ))}
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => setShowCancelModal(false)}
                className="flex-1 py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                Keep Subscription
              </button>
              <button onClick={handleCancelSubscription} className="flex-1 py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200">
                Confirm Cancellation
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageSubscription;
