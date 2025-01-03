import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { FiMenu, FiBell, FiUser, FiUserCheck, FiKey, FiLogOut } from "react-icons/fi"; // Import necessary icons

const Header = ({ toggleSidebar }) => {
  const [isAccountMenuOpen, setAccountMenuOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const toggleAccountMenu = () => {
    setAccountMenuOpen((prev) => !prev);
  };

  // Handle the navigation based on selected option
  const handleNavigation = (action) => {
    if (action === "profile") {
      navigate("/dashboard/profile"); // Navigate to the profile page
    } else if (action === "password") {
      navigate("/dashboard/password"); // Navigate to the password change page
    } else if (action === "logout") {
      localStorage.removeItem("authToken"); // Remove auth token on logout
      navigate("/login"); // Redirect to login page
    }
  };

  return (
    <header className="bg-gradient-to-r from-[#4189C4] to-[#2C52A0] text-white p-4 flex items-center justify-end md:justify-end relative w-full">
      {/* Menu icon (for mobile) */}
      <div className="absolute left-4 top-4 md:hidden">
        <button className="text-white p-2 rounded" onClick={toggleSidebar}>
          <FiMenu size={24} />
        </button>
      </div>

      {/* Icons for Notification and Account */}
      <div className="flex items-center space-x-4 relative">
        {/* Notification icon */}
        <button className="text-white p-2 rounded">
          <FiBell size={24} />
        </button>

        {/* Account icon with dropdown */}
        <div className="relative">
          <button
            className="text-white p-2 rounded focus:outline-none"
            onClick={toggleAccountMenu}
          >
            <FiUser size={24} />
          </button>

          {/* Dropdown menu */}
          {isAccountMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded shadow-lg z-50">
              <ul className="py-2">
                <li>
                  <button
                    className="flex items-center w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={() => handleNavigation("profile")}
                  >
                    <FiUserCheck className="mr-2" size={18} /> Profile
                  </button>
                </li>
                <li>
                  <button
                    className="flex items-center w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={() => handleNavigation("password")}
                  >
                    <FiKey className="mr-2" size={18} /> Password
                  </button>
                </li>
                <li>
                  <button
                    className="flex items-center w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={() => handleNavigation("logout")}
                  >
                    <FiLogOut className="mr-2" size={18} /> Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
