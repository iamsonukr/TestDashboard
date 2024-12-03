import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main content area */}
      <div className="flex-1 flex flex-col h-full">
        {/* Header */}
        <Header toggleSidebar={toggleSidebar} />

        {/* Dynamic Content */}
        <main className="flex-1 bg-gray-100 p-6 overflow-y-auto scrollbar-hide">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
