import React from "react";
import {Link, useLocation} from "react-router-dom";
import {useTheme} from "../../contexts/ThemeContext";

const DashboardSidebar = ({isOpen, onClose}) => {
  const {isDark} = useTheme();
  const location = useLocation();

  const menuItems = [
    {path: "/dashboard/trade", icon: "💰", label: "Trade", badge: null},
    {path: "/dashboard/verify", icon: "🔍", label: "Verify", badge: "3"},
    {path: "/dashboard/history", icon: "📊", label: "History", badge: null},
    {path: "/dashboard/billing", icon: "💳", label: "Billing", badge: null},
    {path: "/dashboard/support", icon: "🛟", label: "Support", badge: null},
    {path: "/dashboard/settings", icon: "⚙️", label: "Settings", badge: null},
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Desktop Sidebar */}
      <div
        className={`hidden lg:flex lg:flex-col h-full w-64 flex-shrink-0 ${isDark ? "bg-dark-secondary" : "bg-white"} border-r ${
          isDark ? "border-gray-700" : "border-gray-200"
        } transition-colors duration-300`}>
        {/* Logo Section */}
        <div className="flex items-center justify-between h-16 flex-shrink-0 px-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="font-avenir text-lg font-bold text-gray-900 dark:text-white">MrProve</span>
          </div>
        </div>

        {/* Navigation - Scrollable if needed */}
        <div className="flex-1 overflow-y-auto">
          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? "bg-blue-500 text-white shadow-lg"
                    : `text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 ${isDark ? "hover:text-white" : "hover:text-gray-900"}`
                }`}>
                <span className="text-lg">{item.icon}</span>
                <span className="flex-1">{item.label}</span>
                {item.badge && <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{item.badge}</span>}
              </Link>
            ))}
          </nav>
        </div>

        {/* User Profile - Fixed at bottom */}
        <div className={`border-t ${isDark ? "border-gray-700" : "border-gray-200"} p-4 flex-shrink-0`}>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">U</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-white truncate">User Account</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">user@mrprove.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`lg:hidden fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"} ${
          isDark ? "bg-dark-secondary" : "bg-white"
        } border-r ${isDark ? "border-gray-700" : "border-gray-200"} flex flex-col h-full`}>
        {/* Mobile Header */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="font-avenir text-lg font-bold text-gray-900 dark:text-white">MrProve</span>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            ✕
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex-1 overflow-y-auto">
          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={`flex items-center space-x-3 px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? "bg-blue-500 text-white shadow-lg"
                    : `text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 ${isDark ? "hover:text-white" : "hover:text-gray-900"}`
                }`}>
                <span className="text-lg">{item.icon}</span>
                <span className="flex-1">{item.label}</span>
                {item.badge && <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{item.badge}</span>}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile User Profile */}
        <div className={`border-t ${isDark ? "border-gray-700" : "border-gray-200"} p-4 flex-shrink-0`}>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">U</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-white truncate">User Account</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">user@mrprove.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardSidebar;
