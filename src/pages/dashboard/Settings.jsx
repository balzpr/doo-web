import React, {useState} from "react";
import {useTheme} from "../../contexts/ThemeContext";
// import {TermsOfServiceModal, PrivacyPolicyModal, CheckUpdatesModal} from "../../../components/Modal/SettingsModals";
import {TermsOfServiceModal, PrivacyPolicyModal, CheckUpdatesModal} from "../../components/Modal/SettingsModal";
const Settings = () => {
  const {isDark, toggleTheme} = useTheme();
  const [activeTab, setActiveTab] = useState("general");
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    trade: true,
    verification: false,
    security: true,
  });

  // Modal states
  const [showTOS, setShowTOS] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showUpdates, setShowUpdates] = useState(false);

  // Security settings state
  const [securitySettings, setSecuritySettings] = useState({
    twoFactor: true,
    biometric: false,
    autoLock: "5min",
    sessionTimeout: "1hour",
  });

  // Profile state
  const [profile, setProfile] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@mrprove.com",
    language: "English",
    timezone: "UTC-8 (Pacific Time)",
    currency: "USD ($)",
  });

  const handleNotificationChange = (key) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSecurityChange = (key, value) => {
    setSecuritySettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleProfileChange = (key, value) => {
    setProfile((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const tabs = [
    {id: "general", label: "General", icon: "⚙️"},
    {id: "security", label: "Security", icon: "🔒"},
    {id: "notifications", label: "Notifications", icon: "🔔"},
    {id: "preferences", label: "Preferences", icon: "🎨"},
    {id: "about", label: "About", icon: "ℹ️"},
  ];

  const saveSettings = () => {
    // Simulate API call
    alert("Settings saved successfully!");
  };

  return (
    <>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Settings</h1>
            <p className="text-gray-600 dark:text-gray-400">Manage your account preferences and security settings</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Navigation */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white dark:bg-dark-secondary rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
              <nav className="p-4 space-y-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-3 rounded-xl text-left transition-all duration-200 ${
                      activeTab === tab.id ? "bg-blue-500 text-white shadow-lg" : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white"
                    }`}>
                    <span className="text-lg">{tab.icon}</span>
                    <span className="font-medium">{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white dark:bg-dark-secondary rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
              {/* General Settings */}
              {activeTab === "general" && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">General Settings</h2>

                  {/* Profile Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Profile Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">First Name</label>
                        <input
                          type="text"
                          value={profile.firstName}
                          onChange={(e) => handleProfileChange("firstName", e.target.value)}
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-primary border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
                        <input
                          type="text"
                          value={profile.lastName}
                          onChange={(e) => handleProfileChange("lastName", e.target.value)}
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-primary border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                      <input
                        type="email"
                        value={profile.email}
                        onChange={(e) => handleProfileChange("email", e.target.value)}
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-primary border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white"
                      />
                    </div>
                  </div>

                  {/* Language & Region */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Language & Region</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Language</label>
                        <select
                          value={profile.language}
                          onChange={(e) => handleProfileChange("language", e.target.value)}
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-primary border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white">
                          <option>English</option>
                          <option>Spanish</option>
                          <option>French</option>
                          <option>German</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Timezone</label>
                        <select
                          value={profile.timezone}
                          onChange={(e) => handleProfileChange("timezone", e.target.value)}
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-primary border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white">
                          <option>UTC-8 (Pacific Time)</option>
                          <option>UTC-5 (Eastern Time)</option>
                          <option>UTC+0 (GMT)</option>
                          <option>UTC+8 (Singapore)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <button onClick={saveSettings} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200">
                    Save Changes
                  </button>
                </div>
              )}

              {/* Security Settings */}
              {activeTab === "security" && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">Security Settings</h2>

                  {/* Two-Factor Authentication */}
                  <div className="p-4 bg-gray-50 dark:bg-dark-primary rounded-xl border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">Two-Factor Authentication</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Add an extra layer of security to your account</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={securitySettings.twoFactor} onChange={(e) => handleSecurityChange("twoFactor", e.target.checked)} className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>

                  {/* Biometric Authentication */}
                  <div className="p-4 bg-gray-50 dark:bg-dark-primary rounded-xl border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">Biometric Authentication</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Use fingerprint or face recognition to log in</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={securitySettings.biometric} onChange={(e) => handleSecurityChange("biometric", e.target.checked)} className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>

                  {/* Auto Lock */}
                  <div className="p-4 bg-gray-50 dark:bg-dark-primary rounded-xl border border-gray-200 dark:border-gray-700">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Auto Lock</h3>
                      <select
                        value={securitySettings.autoLock}
                        onChange={(e) => handleSecurityChange("autoLock", e.target.value)}
                        className="w-full px-4 py-3 bg-white dark:bg-dark-secondary border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white">
                        <option>Immediately</option>
                        <option>1 minute</option>
                        <option>5 minutes</option>
                        <option>15 minutes</option>
                        <option>1 hour</option>
                      </select>
                    </div>
                  </div>

                  {/* Session Management */}
                  <div className="p-4 bg-gray-50 dark:bg-dark-primary rounded-xl border border-gray-200 dark:border-gray-700">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Session Timeout</h3>
                      <select
                        value={securitySettings.sessionTimeout}
                        onChange={(e) => handleSecurityChange("sessionTimeout", e.target.value)}
                        className="w-full px-4 py-3 bg-white dark:bg-dark-secondary border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white">
                        <option>15 minutes</option>
                        <option>30 minutes</option>
                        <option>1 hour</option>
                        <option>4 hours</option>
                        <option>Never</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <button onClick={saveSettings} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200">
                      Save Security Settings
                    </button>
                    <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 px-6 py-3 rounded-xl font-semibold transition-colors duration-200">
                      View Active Sessions
                    </button>
                  </div>
                </div>
              )}

              {/* Notifications Settings */}
              {activeTab === "notifications" && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">Notification Settings</h2>

                  <div className="space-y-4">
                    {Object.entries(notifications).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-dark-primary rounded-xl border border-gray-200 dark:border-gray-700">
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white capitalize">{key.replace(/([A-Z])/g, " $1")}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Receive notifications for {key} events</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" checked={value} onChange={() => handleNotificationChange(key)} className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                    ))}
                  </div>

                  <button onClick={saveSettings} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200">
                    Save Notification Preferences
                  </button>
                </div>
              )}

              {/* Preferences */}
              {activeTab === "preferences" && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">Preferences</h2>

                  {/* Theme Preference */}
                  <div className="p-4 bg-gray-50 dark:bg-dark-primary rounded-xl border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">Dark Mode</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Switch between light and dark themes</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={isDark} onChange={toggleTheme} className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>

                  {/* Currency Preference */}
                  <div className="p-4 bg-gray-50 dark:bg-dark-primary rounded-xl border border-gray-200 dark:border-gray-700">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Default Currency</h3>
                      <select
                        value={profile.currency}
                        onChange={(e) => handleProfileChange("currency", e.target.value)}
                        className="w-full px-4 py-3 bg-white dark:bg-dark-secondary border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white">
                        <option>USD ($)</option>
                        <option>EUR (€)</option>
                        <option>GBP (£)</option>
                        <option>JPY (¥)</option>
                      </select>
                    </div>
                  </div>

                  {/* Language Preference */}
                  <div className="p-4 bg-gray-50 dark:bg-dark-primary rounded-xl border border-gray-200 dark:border-gray-700">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Default Language</h3>
                      <select
                        value={profile.language}
                        onChange={(e) => handleProfileChange("language", e.target.value)}
                        className="w-full px-4 py-3 bg-white dark:bg-dark-secondary border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white">
                        <option>English</option>
                        <option>Spanish</option>
                        <option>French</option>
                        <option>German</option>
                      </select>
                    </div>
                  </div>

                  <button onClick={saveSettings} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200">
                    Save Preferences
                  </button>
                </div>
              )}

              {/* About */}
              {activeTab === "about" && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">About MrProve</h2>

                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 dark:bg-dark-primary rounded-xl border border-gray-200 dark:border-gray-700">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Version</h3>
                      <p className="text-gray-600 dark:text-gray-400">v2.1.0</p>
                    </div>

                    <div className="p-4 bg-gray-50 dark:bg-dark-primary rounded-xl border border-gray-200 dark:border-gray-700">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Last Updated</h3>
                      <p className="text-gray-600 dark:text-gray-400">January 15, 2024</p>
                    </div>

                    <div className="p-4 bg-gray-50 dark:bg-dark-primary rounded-xl border border-gray-200 dark:border-gray-700">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">License</h3>
                      <p className="text-gray-600 dark:text-gray-400">Proprietary - All rights reserved</p>
                    </div>

                    <div className="p-4 bg-gray-50 dark:bg-dark-primary rounded-xl border border-gray-200 dark:border-gray-700">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Support</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-3">Need help? Contact our support team</p>
                      <button className="text-blue-500 hover:text-blue-600 font-medium">Contact Support →</button>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <button onClick={() => setShowUpdates(true)} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200">
                      Check for Updates
                    </button>
                    <button
                      onClick={() => setShowPrivacy(true)}
                      className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 px-6 py-3 rounded-xl font-semibold transition-colors duration-200">
                      Privacy Policy
                    </button>
                    <button
                      onClick={() => setShowTOS(true)}
                      className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 px-6 py-3 rounded-xl font-semibold transition-colors duration-200">
                      Terms of Service
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <TermsOfServiceModal isOpen={showTOS} onClose={() => setShowTOS(false)} />
      <PrivacyPolicyModal isOpen={showPrivacy} onClose={() => setShowPrivacy(false)} />
      <CheckUpdatesModal isOpen={showUpdates} onClose={() => setShowUpdates(false)} />
    </>
  );
};

export default Settings;
