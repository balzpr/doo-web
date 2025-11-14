import React, {useState, useEffect, useRef} from "react";
import {useTheme} from "../../contexts/ThemeContext";
import {useNavigate} from "react-router-dom";

const DashboardHeader = ({onMenuToggle}) => {
  const {isDark, toggleTheme} = useTheme();
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    {id: 1, title: "Trade Completed", message: "Your ETH purchase was successful", time: "2 min ago", unread: true, type: "success"},
    {id: 2, title: "Verification Ready", message: "Proof #ZK123 is ready for review", time: "5 min ago", unread: true, type: "info"},
    {id: 3, title: "New Message", message: "You have a new support ticket", time: "1 hour ago", unread: false, type: "message"},
  ]);

  const navigate = useNavigate();
  const notificationsRef = useRef(null);
  const userMenuRef = useRef(null);

  const unreadCount = notifications.filter((n) => n.unread).length;

  // Handle click outside untuk notifications dan user menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close notifications jika klik di luar
      if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
        setNotificationsOpen(false);
      }

      // Close user menu jika klik di luar
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNotificationClick = (notificationId) => {
    setNotifications(notifications.map((notif) => (notif.id === notificationId ? {...notif, unread: false} : notif)));
    setNotificationsOpen(false);
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map((notif) => ({...notif, unread: false})));
  };

  const handleLogout = () => {
    // Close modals
    setLogoutModalOpen(false);
    setUserMenuOpen(false);

    // Simulate logout process
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  const userMenuItems = [
    {
      icon: "👤",
      label: "Profile",
      action: () => navigate("/dashboard/settings"),
      description: "Manage your profile information",
    },
    {
      icon: "⚙️",
      label: "Settings",
      action: () => navigate("/dashboard/settings"),
      description: "Account preferences and settings",
    },
    {
      icon: "🔒",
      label: "Security",
      action: () => navigate("/dashboard/settings?tab=security"),
      description: "Two-factor, biometrics, and security",
    },
    {
      icon: "💳",
      label: "Billing",
      action: () => navigate("/dashboard/billing"),
      description: "Subscription and payment details",
    },
    {
      icon: "🛟",
      label: "Support",
      action: () => navigate("/dashboard/support"),
      description: "Get help and contact support",
    },
    {
      icon: "🌐",
      label: "Language",
      action: () => navigate("/dashboard/settings?tab=preferences"),
      description: "Change language and region",
    },
    {
      icon: "📚",
      label: "Documentation",
      action: () => navigate("/dashboard/documentation"),
      description: "API docs and guides",
    },
    {
      icon: "🚪",
      label: "Logout",
      action: () => setLogoutModalOpen(true),
      isDanger: true,
      description: "Sign out of your account",
    },
  ];

  // Logout Confirmation Modal
  const LogoutModal = () => {
    if (!logoutModalOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className={`relative max-w-md w-full rounded-2xl shadow-2xl ${isDark ? "bg-dark-secondary border-gray-600" : "bg-white border-gray-200"} border`}>
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-600">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Confirm Logout</h2>
            <button
              onClick={() => setLogoutModalOpen(false)}
              className={`p-2 rounded-lg transition-colors duration-200 ${isDark ? "text-gray-400 hover:text-white hover:bg-gray-700" : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"}`}>
              ✕
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="text-center">
              <div className="text-6xl mb-4">🚪</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Are you sure you want to logout?</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">You will be signed out of your MrProve account. Any unsaved changes will be lost.</p>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-xl mb-6">
                <div className="flex items-start space-x-3">
                  <span className="text-yellow-600 dark:text-yellow-400 text-lg">⚠️</span>
                  <div className="text-left">
                    <p className="text-sm text-yellow-800 dark:text-yellow-200 font-medium">Security Notice</p>
                    <p className="text-xs text-yellow-700 dark:text-yellow-300 mt-1">Make sure to save any important work before logging out.</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={() => setLogoutModalOpen(false)}
                  className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-3 rounded-xl font-semibold transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-700">
                  Cancel
                </button>
                <button onClick={handleLogout} className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold transition-colors duration-200">
                  Yes, Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <header className={`sticky top-0 z-30 border-b transition-colors duration-300 ${isDark ? "bg-dark-secondary border-gray-700" : "bg-white border-gray-200"}`}>
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Left Section */}
          <div className="flex items-center">
            <button
              onClick={onMenuToggle}
              className={`p-2 rounded-lg lg:hidden ${
                isDark ? "text-gray-400 hover:text-white hover:bg-gray-700" : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
              } transition-colors duration-200`}>
              ☰
            </button>

            {/* Page Title */}
            <h1 className="ml-2 lg:ml-0 text-xl font-semibold text-gray-900 dark:text-white">Dashboard</h1>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors duration-200 ${isDark ? "text-gray-400 hover:text-white hover:bg-gray-700" : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"}`}
              aria-label="Toggle theme">
              {isDark ? "🌙" : "☀️"}
            </button>

            {/* Notifications */}
            <div className="relative" ref={notificationsRef}>
              <button
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className={`relative p-2 rounded-lg transition-colors duration-200 ${
                  isDark ? "text-gray-400 hover:text-white hover:bg-gray-700" : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                }`}
                aria-label="Notifications">
                🔔
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white dark:border-dark-secondary text-xs flex items-center justify-center text-white">
                    {unreadCount}
                  </span>
                )}
              </button>

              {/* Notifications Dropdown */}
              {notificationsOpen && (
                <div className={`absolute right-0 mt-2 w-80 rounded-2xl shadow-2xl border z-50 ${isDark ? "bg-dark-secondary border-gray-600" : "bg-white border-gray-200"}`}>
                  <div className="p-4 border-b border-gray-200 dark:border-gray-600 flex justify-between items-center">
                    <h3 className="font-semibold text-gray-900 dark:text-white">Notifications</h3>
                    {unreadCount > 0 && (
                      <button onClick={markAllAsRead} className="text-sm text-blue-500 hover:text-blue-600">
                        Mark all read
                      </button>
                    )}
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`p-4 border-b border-gray-100 dark:border-gray-700 cursor-pointer transition-colors duration-200 ${
                          notification.unread ? "bg-blue-50 dark:bg-blue-900/20" : "hover:bg-gray-50 dark:hover:bg-gray-700"
                        }`}
                        onClick={() => handleNotificationClick(notification.id)}>
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <span className={`w-2 h-2 rounded-full ${notification.type === "success" ? "bg-green-500" : notification.type === "info" ? "bg-blue-500" : "bg-gray-500"}`}></span>
                              <h4 className={`font-medium ${notification.unread ? "text-blue-600 dark:text-blue-400" : "text-gray-900 dark:text-white"}`}>{notification.title}</h4>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-300">{notification.message}</p>
                          </div>
                          {notification.unread && <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2"></span>}
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">{notification.time}</p>
                      </div>
                    ))}
                  </div>
                  <div className="p-4">
                    <button
                      onClick={() => {
                        setNotificationsOpen(false);
                        navigate("/dashboard/notifications");
                      }}
                      className="w-full text-center text-blue-500 hover:text-blue-600 font-medium">
                      View All Notifications
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* User Menu */}
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className={`flex items-center space-x-3 p-2 rounded-lg transition-colors duration-200 ${isDark ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}
                aria-label="User menu">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">U</span>
                </div>
                <span className="hidden sm:block text-sm font-medium text-gray-700 dark:text-gray-300">User</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${userMenuOpen ? "rotate-180" : ""} ${isDark ? "text-gray-400" : "text-gray-500"}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* User Dropdown Menu */}
              {userMenuOpen && (
                <div className={`absolute right-0 mt-2 w-64 rounded-2xl shadow-2xl border z-50 ${isDark ? "bg-dark-secondary border-gray-600" : "bg-white border-gray-200"}`}>
                  {/* User Info */}
                  <div className="p-4 border-b border-gray-200 dark:border-gray-600">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">U</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-900 dark:text-white truncate">John Doe</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 truncate">john.doe@mrprove.com</p>
                      </div>
                    </div>
                  </div>

                  {/* Menu Items */}
                  <div className="py-2 max-h-96 overflow-y-auto">
                    {userMenuItems.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          item.action();
                          setUserMenuOpen(false);
                        }}
                        className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-colors duration-200 ${
                          item.isDanger ? "text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20" : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                        }`}>
                        <span className="text-lg">{item.icon}</span>
                        <span className="font-medium">{item.label}</span>
                      </button>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="p-4 border-t border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-dark-primary">
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      <div>MrProve v2.1.0</div>
                      <div>Last login: Today, 14:30</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Logout Confirmation Modal */}
      <LogoutModal />
    </>
  );
};

export default DashboardHeader;
