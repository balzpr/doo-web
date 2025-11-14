import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import Logo from "../components/Logo";
import Modal from "../components/Modal/Modal";
import {useTheme} from "../contexts/ThemeContext";

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
  });
  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({title: "", message: ""});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {isDark} = useTheme();

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    // Register specific validations
    if (activeTab === "register") {
      if (!formData.fullName) {
        newErrors.fullName = "Full name is required";
      } else if (formData.fullName.length < 2) {
        newErrors.fullName = "Full name must be at least 2 characters";
      }

      if (!formData.confirmPassword) {
        newErrors.confirmPassword = "Please confirm your password";
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setModalContent({
        title: "Success! 🎉",
        message: activeTab === "login" ? "You have successfully logged in! Redirecting to dashboard..." : "Your account has been created successfully! Welcome aboard!",
      });
      setIsModalOpen(true);
    } catch (error) {
      setModalContent({
        title: "Error!",
        message: "Something went wrong. Please try again.",
      });
      setIsModalOpen(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    // Reset form
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
      fullName: "",
    });
    // Redirect to dashboard after successful auth
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Header */}
      <div className="flex justify-between items-center p-6">
        <Logo />
      </div>

      {/* Auth Container */}
      <div className="flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          {/* Tabs */}
          <div className="flex bg-white dark:bg-gray-800 rounded-t-xl border-b border-gray-200 dark:border-gray-700 overflow-hidden">
            <button
              onClick={() => setActiveTab("login")}
              className={`flex-1 py-4 px-6 text-center font-medium transition-all duration-200 ${
                activeTab === "login"
                  ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 border-b-2 border-blue-600 dark:border-blue-400"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50"
              }`}>
              Login
            </button>
            <button
              onClick={() => setActiveTab("register")}
              className={`flex-1 py-4 px-6 text-center font-medium transition-all duration-200 ${
                activeTab === "register"
                  ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 border-b-2 border-blue-600 dark:border-blue-400"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50"
              }`}>
              Register
            </button>
          </div>

          {/* Form */}
          <div className="bg-white dark:bg-gray-800 rounded-b-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-4">
              {activeTab === "register" && (
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 transition-colors duration-200 ${
                      errors.fullName ? "border-red-500 dark:border-red-400" : "border-gray-300 dark:border-gray-600"
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.fullName}</p>}
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 transition-colors duration-200 ${
                    errors.email ? "border-red-500 dark:border-red-400" : "border-gray-300 dark:border-gray-600"
                  }`}
                  placeholder="you@example.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 transition-colors duration-200 ${
                    errors.password ? "border-red-500 dark:border-red-400" : "border-gray-300 dark:border-gray-600"
                  }`}
                  placeholder="Enter your password"
                />
                {errors.password && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.password}</p>}
              </div>

              {activeTab === "register" && (
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 transition-colors duration-200 ${
                      errors.confirmPassword ? "border-red-500 dark:border-red-400" : "border-gray-300 dark:border-gray-600"
                    }`}
                    placeholder="Confirm your password"
                  />
                  {errors.confirmPassword && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.confirmPassword}</p>}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 px-4 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:cursor-not-allowed flex items-center justify-center">
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : activeTab === "login" ? (
                  "Sign In"
                ) : (
                  "Create Account"
                )}
              </button>
            </form>

            {/* Additional Links */}
            <div className="mt-6 text-center">
              {activeTab === "login" ? (
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Don't have an account?{" "}
                  <button onClick={() => setActiveTab("register")} className="text-blue-600 hover:text-blue-500 font-medium transition-colors duration-200">
                    Sign up
                  </button>
                </p>
              ) : (
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Already have an account?{" "}
                  <button onClick={() => setActiveTab("login")} className="text-blue-600 hover:text-blue-500 font-medium transition-colors duration-200">
                    Sign in
                  </button>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <Modal isOpen={isModalOpen} onClose={handleModalClose} title={modalContent.title} size="sm">
        <div className="p-6">
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 mb-4">
              <svg className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">{modalContent.message}</p>
            <button
              onClick={handleModalClose}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Continue to Dashboard
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AuthPage;
