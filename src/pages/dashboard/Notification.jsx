import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

const Notifications = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all");
  const [notifications, setNotifications] = useState([
    {id: 1, title: "Trade Completed", message: "Your ETH purchase of 0.5 ETH was successful", time: "2 min ago", unread: true, type: "success", category: "trading"},
    {id: 2, title: "Verification Ready", message: "Proof #ZK123 is ready for review", time: "5 min ago", unread: true, type: "info", category: "verification"},
    {id: 3, title: "New Message", message: "You have a new support ticket from customer service", time: "1 hour ago", unread: false, type: "message", category: "support"},
    {id: 4, title: "Withdrawal Processed", message: "Your withdrawal of 100 MRP has been processed", time: "3 hours ago", unread: false, type: "success", category: "wallet"},
    {id: 5, title: "Security Alert", message: "New login detected from unknown device", time: "5 hours ago", unread: true, type: "warning", category: "security"},
    {id: 6, title: "Subscription Renewal", message: "Your Pro plan subscription has been renewed", time: "1 day ago", unread: false, type: "info", category: "billing"},
    {id: 7, title: "KYC Approved", message: "Your identity verification has been approved", time: "2 days ago", unread: false, type: "success", category: "verification"},
    {id: 8, title: "API Limit Warning", message: "You've used 80% of your API limit for this month", time: "3 days ago", unread: false, type: "warning", category: "api"},
    {id: 9, title: "New Feature Available", message: "Batch verification is now available in your plan", time: "1 week ago", unread: false, type: "info", category: "product"},
    {id: 10, title: "System Maintenance", message: "Scheduled maintenance this weekend", time: "1 week ago", unread: false, type: "info", category: "system"},
  ]);

  const filters = [
    {id: "all", label: "All", count: notifications.length},
    {id: "unread", label: "Unread", count: notifications.filter((n) => n.unread).length},
    {id: "trading", label: "Trading", count: notifications.filter((n) => n.category === "trading").length},
    {id: "verification", label: "Verification", count: notifications.filter((n) => n.category === "verification").length},
    {id: "security", label: "Security", count: notifications.filter((n) => n.category === "security").length},
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case "success":
        return "✅";
      case "info":
        return "ℹ️";
      case "warning":
        return "⚠️";
      case "message":
        return "💬";
      default:
        return "📢";
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "success":
        return "text-green-500 bg-green-500/10";
      case "info":
        return "text-blue-500 bg-blue-500/10";
      case "warning":
        return "text-yellow-500 bg-yellow-500/10";
      case "message":
        return "text-purple-500 bg-purple-500/10";
      default:
        return "text-gray-500 bg-gray-500/10";
    }
  };

  const markAsRead = (id) => {
    setNotifications(notifications.map((notif) => (notif.id === id ? {...notif, unread: false} : notif)));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map((notif) => ({...notif, unread: false})));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter((notif) => notif.id !== id));
  };

  const filteredNotifications = notifications.filter((notification) => {
    if (filter === "all") return true;
    if (filter === "unread") return notification.unread;
    return notification.category === filter;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Notifications</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage your notifications and alerts</p>
        </div>
        <div className="mt-4 lg:mt-0 flex items-center space-x-4">
          <div className="text-right">
            <p className="text-sm text-gray-500 dark:text-gray-400">Unread</p>
            <p className="text-xl font-bold text-blue-500">{notifications.filter((n) => n.unread).length}</p>
          </div>
        </div>
      </div>

      {/* Filters and Actions */}
      <div className="bg-white dark:bg-dark-secondary rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filterItem) => (
              <button
                key={filterItem.id}
                onClick={() => setFilter(filterItem.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  filter === filterItem.id ? "bg-blue-500 text-white shadow-lg" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}>
                {filterItem.label}
                <span className="ml-2 text-xs opacity-80">({filterItem.count})</span>
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <button
              onClick={markAllAsRead}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
              Mark All as Read
            </button>
            <button onClick={() => navigate("/dashboard/support")} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200">
              Notification Settings
            </button>
          </div>
        </div>
      </div>

      {/* Notifications List */}
      <div className="bg-white dark:bg-dark-secondary rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-dark-primary">
          <div className="grid grid-cols-12 gap-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
            <div className="col-span-1">Type</div>
            <div className="col-span-6">Message</div>
            <div className="col-span-3">Time</div>
            <div className="col-span-2">Actions</div>
          </div>
        </div>

        {/* Notifications */}
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {filteredNotifications.map((notification) => (
            <div key={notification.id} className={`px-6 py-4 transition-colors duration-200 ${notification.unread ? "bg-blue-50 dark:bg-blue-900/20" : "hover:bg-gray-50 dark:hover:bg-gray-800"}`}>
              <div className="grid grid-cols-12 gap-4 items-center">
                {/* Type Icon */}
                <div className="col-span-1">
                  <span className="text-lg">{getTypeIcon(notification.type)}</span>
                </div>

                {/* Message */}
                <div className="col-span-6">
                  <div className="flex items-center space-x-3">
                    {notification.unread && <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>}
                    <div>
                      <h4 className={`font-medium ${notification.unread ? "text-blue-600 dark:text-blue-400" : "text-gray-900 dark:text-white"}`}>{notification.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{notification.message}</p>
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium mt-2 ${getTypeColor(notification.type)}`}>{notification.category}</span>
                    </div>
                  </div>
                </div>

                {/* Time */}
                <div className="col-span-3">
                  <div className="text-sm text-gray-500 dark:text-gray-400">{notification.time}</div>
                </div>

                {/* Actions */}
                <div className="col-span-2">
                  <div className="flex items-center space-x-2">
                    {notification.unread && (
                      <button onClick={() => markAsRead(notification.id)} className="text-blue-500 hover:text-blue-600 text-sm font-medium transition-colors duration-200">
                        Mark Read
                      </button>
                    )}
                    <button onClick={() => deleteNotification(notification.id)} className="text-red-500 hover:text-red-600 text-sm font-medium transition-colors duration-200">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredNotifications.length === 0 && (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">🔔</div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No notifications</h3>
            <p className="text-gray-500 dark:text-gray-400">You're all caught up!</p>
          </div>
        )}

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-dark-primary">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Showing {filteredNotifications.length} of {notifications.length} notifications
            </div>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-lg text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">Previous</button>
              <button className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-lg text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">Next</button>
            </div>
          </div>
        </div>
      </div>

      {/* Notification Preferences */}
      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-6 text-white">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-2">Notification Preferences</h3>
            <p className="text-blue-100">Customize which notifications you want to receive</p>
          </div>
          <button
            onClick={() => navigate("/dashboard/settings?tab=notifications")}
            className="mt-4 lg:mt-0 px-6 py-2 bg-white text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 font-semibold">
            Manage Preferences
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
