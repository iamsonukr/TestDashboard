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
  { id: 1, name: "Dashboard", path: "/dashboard", icon: <FiMenu /> },
  { id: 2, name: "Customers", path: "/dashboard/customers", icon: <FiUsers /> },
  { id: 3, name: "Service Provider", path: "/dashboard/serviceprovider", icon: <FiTool /> },
  { id: 4, name: "Dispute", path: "/dashboard/dispute", icon: <FiFileText /> },
  { id: 5, name: "Transactions", path: "/dashboard/transactions", icon: <FiCreditCard /> },
  { id: 6, name: "Bookings", path: "/dashboard/bookings", icon: <FiTag /> },
  {
    id: 7,
    name: "Catalogue",
    icon: <FiSettings />,
    isDropdown: true,
    subLinks: [
      { id: 1, name: "Services", path: "/dashboard/catalogue/services" },
      { id: 2, name: "Categories", path: "/dashboard/catalogue/categories" },
      { id: 3, name: "Add On", path: "/dashboard/catalogue/addon" },
    ],
  },
  {
    id: 8,
    name: "Reports",
    icon: <FiBarChart />,
    isDropdown: true,
    subLinks: [
      { id: 1, name: "Orders", path: "/dashboard/reports/orders" },
      { id: 2, name: "Customers", path: "/dashboard/reports/customerreports" },
    ],
  },
  {
    id: 9,
    name: "System Access",
    icon: <FiSettings />,
    isDropdown: true,
    subLinks: [
      { id: 1, name: "Sub Admin", path: "/dashboard/system-access/subadmin" },
      { id: 2, name: "Role", path: "/dashboard/system-access/role" },
    ],
  },
  {
    id: 10,
    name: "Configuration",
    icon: <FiSettings />,
    isDropdown: true,
    subLinks: [
      { id: 1, name: "FAQ", path: "/dashboard/configuration/faq" },
      { id: 2, name: "Content Pages", path: "/dashboard/configuration/contentpages" },
      { id: 3, name: "E-Mail Templates", path: "/dashboard/configuration/emailtemplates" },
      { id: 4, name: "Document Templates", path: "/dashboard/configuration/documenttemplates" },
      { id: 5, name: "GeoFencing", path: "/dashboard/configuration/geofencing" },
      { id: 6, name: "Terminology", path: "/dashboard/configuration/terminology" },
      { id: 7, name: "Theme Setting", path: "/dashboard/configuration/themesetting" },
      { id: 8, name: "Website Menu", path: "/dashboard/configuration/websitemenu" },
      { id: 9, name: "Gallery", path: "/dashboard/configuration/gallery" },
      { id: 10, name: "Basic Settings", path: "/dashboard/configuration/basicsettings" },
      { id: 11, name: "Service Provider Setting", path: "/dashboard/configuration/serviceprovidersettings" },
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
        className={`fixed top-0 left-0 w-[60vw] md:w-64 h-full bg-gradient-to-r from-[#2C52A0] to-[#4189C4] text-white md:block transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static z-50 md:overflow-y-auto scrollbar-hide`}
      >
        {/* Logo Section */}
        <div className="hidden md:flex md:justify-center md:items-center">
          <img src="/logo.png" alt="Logo" className="w-24 h-24 p-4" />
        </div>

        {/* Navigation Section */}
        <nav className="h-full overflow-y-scroll scrollbar-hide flex flex-col items-start gap-4 justify-center md:justify-start md:pl-[1vw]">
          {navLinks.map((link) => (
            <div key={link.id}>
              {link.isDropdown ? (
                <div
                  className="w-full px-[1vw] py-2 text-center md:text-left flex items-center space-x-2 cursor-pointer justify-between"
                  onClick={() => toggleDropdown(link.id)}
                >
                  <div className="flex items-center space-x-2">
                    {link.icon}
                    <span>{link.name}</span>
                  </div>
                  <div className="block md:hidden">
                    {openDropdown === link.id ? <FiChevronUp /> : <FiChevronDown />}
                  </div>
                </div>
              ) : (
                <Link
                  to={link.path}
                  className="w-full px-[1vw] py-2 text-center md:text-left flex items-center space-x-2 hover:no-underline hover:text-black"
                  onClick={toggleSidebar}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              )}

              {/* Render Dropdown if it exists */}
              {link.isDropdown && openDropdown === link.id && (
                <div
                  className={`h-full overflow-y-auto scrollbar-hide ${
                    link.id === 10 ? "md:mb-28" : ""
                  }`}
                >
                  {link.subLinks.map((subLink) => (
                    <Link
                      key={subLink.id}
                      to={subLink.path}
                      className="block text-sm text-left px-4 py-2 hover:no-underline hover:text-black"
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
