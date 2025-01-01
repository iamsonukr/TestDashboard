import { useState } from "react";
import { NavLink} from "react-router-dom";
import { useSelector } from "react-redux";
import { FaCartShopping } from "react-icons/fa6";
import { IoLogOutOutline } from "react-icons/io5";
import LoginPage from '../pages/auth/Login';
import ServiceProviderPage from '../pages/auth/ServiceProvider';

const Navbar = ({ isAuthenticated = false }) => {
  const { carts } = useSelector((state) => state.allCart);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const [activeModal, setActiveModal] = useState(null);
  const openModal = (modal) => setActiveModal(modal);
  const closeModal = () => setActiveModal(null);



  function handleLogout() {
    isAuthenticated = false;
  }


  return (
    <nav className="w-full h-full bg-white shadow-md">
      <div className="w-full h-full mx-auto px-4">
        <div className="flex w-full justify-between h-20 items-center md:px-[8vw]">
          {/* Logo */}
          <div className="w-full h-full flex items-center justify-between gap-10 text-lg font-semibold ">
            <a href="/">
              <div className="w-full h-20 p-4 overflow-hidden flex items-center justify-center gap-2">
                <img
                  className="w-full h-full rounded-xl object-cover"
                  src="/logoYarpa.jpg"
                  alt=""
                />
                <p className="text-2xl font-bold bg-gradient-to-r from-[#2C52A0] to-[#4189C4] bg-clip-text text-transparent">
                  Yarpacom
                </p>
              </div>
            </a>
          </div>
          {/* Desktop Menu */}
          <div className="w-full hidden md:flex justify-end gap-3">
            {isAuthenticated ? (
              <div className="flex gap-3">
                <NavLink
              to={`${!isAuthenticated ? `/login` : `/cart`}`}
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

              <div className="flex gap-2">
                {/* signin */}
                <button
                  onClick={() => openModal('login')}
                  className="px-3 py-2 rounded-md text-white font-semibold bg-[#2C52A0] hover:bg-gradient-to-r from-[#2C52A0] to-[#4189C4]"
                >
                  Sign In
                </button>

                {/* Become Partner */}
                <button
                onClick={() => openModal('serviceProvider')}
                  className="px-3 py-2 rounded-md text-white font-semibold bg-[#2C52A0] hover:bg-gradient-to-r from-[#2C52A0] to-[#4189C4]"
                >
                  Become a Partner
                </button>

              </div>
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
                  <NavLink
                    to={`${!isAuthenticated ? `/login` : `/cart`}`}
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
                <div className="flex flex-col gap-2">
                {/* signin */}
                <button
                  onClick={() => openModal('login')}
                  className="px-3 py-2 rounded-md text-white font-semibold bg-gray-400 hover:bg-gradient-to-r from-[#2C52A0] to-[#4189C4]"
                >
                  Sign In
                </button>

                {/* Become Partner */}
                <button
                onClick={() => openModal('serviceProvider')}
                  className="px-3 py-2 rounded-md text-white font-semibold bg-gray-400 hover:bg-gradient-to-r from-[#2C52A0] to-[#4189C4]"
                >
                  Become a Partner
                </button>
                
              </div>
              )}
            </div>
          </div>
        </div> 
      )}


      {/* modal */}
      <LoginPage isOpen={activeModal === 'login'} onClose={closeModal} />
      <ServiceProviderPage isOpen={activeModal === 'serviceProvider'} onClose={closeModal} />
    </nav>
  );
};

export default Navbar;
