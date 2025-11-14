import React, {useState} from "react";
import {Outlet} from "react-router-dom";
import {useTheme} from "../contexts/ThemeContext";
import DashboardSidebar from "../components/Dashboard/DashboardSidebar";
import DashboardHeader from "../components/Dashboard/DashboardHeader";

const Dashboard = () => {
  const {isDark} = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? "bg-dark-primary" : "bg-gray-50"}`}>
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      <div className="flex h-screen">
        {/* Sidebar - Full Height */}
        <div className="flex-shrink-0">
          <DashboardSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        </div>

        {/* Main Content Area - Scrollable */}
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          <DashboardHeader onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />

          {/* Scrollable Content - No Animation */}
          <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto w-full">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
