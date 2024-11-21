import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiMenu,
  FiUsers,
  FiTool,
  FiFileText,
  FiSettings,
  FiTag,
  FiCreditCard,
  FiBarChart,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";

const navLinks = [
  { id: 1, name: "Dashboard", path: "/", icon: <FiMenu /> },
  { id: 2, name: "Customers", path: "/customers", icon: <FiUsers /> },
  { id: 3, name: "Service Provider", path: "/serviceprovider", icon: <FiTool /> },
  { id: 4, name: "Dispute", path: "/dispute", icon: <FiFileText /> },
  { id: 5, name: "Transactions", path: "/transactions", icon: <FiCreditCard /> },
  { id: 6, name: "Bookings", path: "/bookings", icon: <FiTag /> },
  {
    id: 7,
    name: "Catalogue",
    icon: <FiSettings />,
    isDropdown: true,
    subLinks: [
      { id: 1, name: "Services", path: "/catalogue/services" },
      { id: 2, name: "Categories", path: "/catalogue/categories" },
      { id: 3, name: "Add On", path: "/catalogue/addon" },
    ],
  },
  {
    id: 8,
    name: "Reports",
    icon: <FiBarChart />,
    isDropdown: true,
    subLinks: [
      { id: 1, name: "Orders", path: "/reports/orders" },
      { id: 2, name: "Customers", path: "/reports/customerreports" },
    ],
  },
  {
    id: 9,
    name: "System Access",
    icon: <FiSettings />,
    isDropdown: true,
    subLinks: [
      { id: 1, name: "Sub Admin", path: "/system-access/subadmin" },
      { id: 2, name: "Role", path: "/system-access/role" },
    ],
  },
  {
    id: 10,
    name: "Configuration",
    icon: <FiSettings />,
    isDropdown: true,
    subLinks: [
      { id: 1, name: "FAQ", path: "/configuration/faq" },
      { id: 2, name: "Content Pages", path: "/configuration/contentpages" },
      { id: 3, name: "E-Mail Templates", path: "/configuration/emailtemplates" },
      { id: 4, name: "Document Templates", path: "/configuration/documenttemplates" },
    ],
  },
];

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (id) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-[60vw] h-full bg-gradient-to-r from-[#2C52A0] to-[#4189C4] text-white md:block transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:w-64 z-50`}
      >
        {/* Logo Section */}
        <div className="hidden md:flex md:justify-center md:items-center">
          <img src="/logo.png" alt="Logo" className="w-16 h-16 p-4" />
        </div>

        {/* Navigation Section */}
        <nav className="mt-4 space-y-2 h-[calc(100%-4rem)] overflow-y-auto scrollbar-hide">
          {navLinks.map((link) => (
            <div key={link.id}>
              {link.isDropdown ? (
                <div
                  className={`w-full px-[1vw] py-2 text-center md:text-left hover:bg-gray-700 flex items-center space-x-2 cursor-pointer justify-between`}
                  onClick={() => toggleDropdown(link.id)}
                >
                  <div className="flex items-center space-x-2">
                    {link.icon}
                    <span>{link.name}</span>
                  </div>
                  <div>
                    {openDropdown === link.id ? <FiChevronUp /> : <FiChevronDown />}
                  </div>
                </div>
              ) : (
                <Link
                  to={link.path}
                  className="w-full px-[1vw] py-2 text-center md:text-left hover:bg-gray-700 flex items-center space-x-2"
                  onClick={toggleSidebar}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              )}

              {/* Render Dropdown if it exists */}
              {link.isDropdown && openDropdown === link.id && (
                <div className="pl-6 mt-2 space-y-2">
                  {link.subLinks.map((subLink) => (
                    <Link
                      key={subLink.id}
                      to={subLink.path}
                      className="block text-sm text-left hover:bg-gray-600 px-4 py-2"
                      onClick={toggleSidebar}
                    >
                      {subLink.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Overlay for Smaller Screens */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
