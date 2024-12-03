import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaCartShopping } from "react-icons/fa6";
import { IoLogOutOutline } from "react-icons/io5";

const Navbar = ({ isAuthenticated = false }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { carts } = useSelector((state) => state.allCart);

  function handleLogout() {
    isAuthenticated = false;
  }

  function handleSignIn() {
    navigate("/login");
  }

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="h-20 flex items-center justify-center gap-10 text-lg font-semibold ">
            <a href="/">
              <div className="w-full h-20 p-4 overflow-hidden flex items-center justify-center gap-2">
                <img
                  className="w-full h-full rounded-xl object-cover"
                  src="https://s3-alpha-sig.figma.com/img/1c0c/d169/3dbdc0fd97d8c3de81ffbaef9d4c9586?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qUirXu4SfnS8EyQMEmCnb1mI5OI3CKIKFhtpuDJ0j9QL8FT40MHgnxbPjG3ERG5jITIru7u4aB5jHlOZzRYGasDe-r8mDLjv6qUDQQsbBtJPYVzNjQvI57prg2q9Hk9mNQ8dfogyg2FUjJOASsuG2c3rtFJPcOZ-fOV8rBxEA9QWDDH-WK6cTK7WW2Lym4S4s64l-HuqdD6ZDXNr7xNpigmIBz8BQcGSATD5wAoxyzZLMhU2rpYKh81J2iJ-uWPeuHgg4oeI8kbRN7EfmiaKw3Hn9LeDbI9CyZHlLk4Lo~PAaZpJtr87WSgeP1ROV3TOa6CtYSmeQVhaJvkpd8DfoA__"
                  alt=""
                />
                <p className="text-2xl font-bold bg-gradient-to-r from-[#2C52A0] to-[#4189C4] bg-clip-text text-transparent">
                  Yarpacom
                </p>
              </div>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-3">

          <NavLink
              to={`${!isAuthenticated ? `/login` :`/cart`}`}
              className="text-decoration-none text-light flex items-center justify-center "
            >
              <div className="relative flex items-center justify-center">
                <FaCartShopping className="text-black" size={40} />
                {carts.length > 0 && (
                  <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                    {carts.length}
                  </span>
                )}
              </div>
            </NavLink>

            {isAuthenticated ? (
              <div className="flex gap-3">
                <div className="w-12 h-12 bg-gray-500 rounded-full p-2 flex items-center justify-center hover:cursor-pointer">
                  <p className="font-bold text-2xl text-white">H</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="p-2 gap-2 items-center justify-center flex rounded-2xl text-red-500 border-2 border-red-500 font-extrabold hover:text-white hover:bg-red-500 hover:border-none"
                >
                  <IoLogOutOutline size={30} />
                </button>
              </div>
            ) : (
              <button
                onClick={handleSignIn}
                className="px-3 py-2 rounded-md text-white font-semibold bg-gray-400 hover:bg-gradient-to-r from-[#2C52A0] to-[#4189C4]"
              >
                Sign In
              </button>
            )}

            

          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-[#2C52A0] focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="py-2 space-y-1 flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center">
              {isAuthenticated ? (
                <div className="flex gap-4">
                <div className="w-10 h-10 bg-gray-500 rounded-full p-2 flex items-center justify-center">
                  <p className="font-semibold text-xl text-white">H</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="p-2 gap-2 items-center justify-center flex rounded-2xl text-red-500 border-2 border-red-500 font-extrabold hover:text-white hover:bg-red-500 hover:border-none"
                >
                  <IoLogOutOutline size={20} />
                </button>
                </div>
              ) : (
                <button
                  onClick={handleSignIn}
                  className="p-1 text-sm rounded-sm text-white font-medium bg-gray-400 hover:bg-gradient-to-r from-[#2C52A0] to-[#4189C4]"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
