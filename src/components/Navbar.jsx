import React, { useState } from "react";

const Navbar = ({ isAuthenticated = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                <p className="text-2xl font-bold bg-gradient-to-r from-[#2C52A0] to-[#4189C4] bg-clip-text text-transparent">Yarpacom</p>
              </div>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:bg-gradient-to-r from-[#2C52A0] to-[#4189C4] bg-clip-text hover:text-transparent hidden md:block"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-400 hover:bg-gradient-to-r from-[#2C52A0] to-[#4189C4] bg-clip-text hover:text-transparent hidden md:block"
            >
              About
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {isAuthenticated ? (
              <img
                className="rounded-full object-cover w-[3vw] h-[3vw]"
                src="https://lh3.googleusercontent.com/a/ACg8ocLo1k9z4lf-TrNDEykxp8ciG497GKuHDTn-eAFriebIPui-Ff-v=s96-c"
                alt=""
              />
            ) : (
              <button className="px-3 py-2 rounded-md text-white font-semibold bg-gray-400 hover:bg-gradient-to-r from-[#2C52A0] to-[#4189C4]">
                Login / Sign Up
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
          <div className="py-4 space-y-1 flex flex-col gap-2 items-center justify-center">
            <div>
              {isAuthenticated ? (
                <img
                  className="rounded-full object-cover w-12 h-12"
                  src="https://lh3.googleusercontent.com/a/ACg8ocLo1k9z4lf-TrNDEykxp8ciG497GKuHDTn-eAFriebIPui-Ff-v=s96-c"
                  alt=""
                />
              ) : (
                <button className="p-1 text-sm rounded-sm text-white font-medium bg-gray-400 hover:bg-gradient-to-r from-[#2C52A0] to-[#4189C4]">
                  Login / Sign Up
                </button>
              )}
            </div>
            <a
              href="#"
              className="block rounded-md text-base font-medium text-gray-400 hover:bg-gradient-to-r from-[#2C52A0] to-[#4189C4] bg-clip-text hover:text-transparent"
            >
              Home
            </a>
            <a
              href="#"
              className="block rounded-md text-base font-medium text-gray-400 hover:bg-gradient-to-r from-[#2C52A0] to-[#4189C4] bg-clip-text hover:text-transparent"
            >
              About
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;