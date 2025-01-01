import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import WhatWeOffer from "../components/WhatWeOffer";
import MapSearchBar from "../components/MapSearchBar";
import { useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
import LoginPage from './auth/Login';
import 'react-toastify/dist/ReactToastify.css';

function Landing({ isAuthenticated = false }) {

  const navigate = useNavigate();

  const [activeModal, setActiveModal] = useState(null);
  const openModal = (modal) => setActiveModal(modal);
  const closeModal = () => setActiveModal(null);

  const handleClick = () => {
    if (!isAuthenticated) {
      openModal("login");
    } else {
      navigate("/CleaningServices");
    }
  };

  useEffect(() => {
    if (window.location.hash === "#faq") {
      const faqSection = document.getElementById("faq");
      if (faqSection) {
        faqSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className="w-full h-full  ">
      <Navbar isAuthenticated={isAuthenticated} />
      {/* static content */}
      <div className="w-full flex bg-cover bg-center flex-col md:flex-row gap-4 p-20">
        <div className="flex flex-col items-start justify-center gap-3 md:gap-4 md:w-1/2 md:p-[3vw]">
          <h1 className="text-3xl md:text-[4vw] text-gray-600 font-bold md:leading-[4vw]">
            Find Cleaning{" "}
            <span className="bg-gradient-to-r from-[#2C52A0] to-[#4189C4] bg-clip-text text-transparent">
              Services Near You
            </span>
          </h1>
          <h2 className="text-md md:text-[2vw] font-semibold text-gray-600">
            Explore Best Cleaning Services Near You
          </h2>
          <button
            onClick={handleClick}
            className="text-lg md:text-[2vw] px-4 py-2 md:px-2vw] md:py-[1vw] rounded-md font-semibold text-white bg-[#2C52A0] hover:bg-gradient-to-r from-[#2C52A0] to-[#4189C4]"
          >
            Book Now
          </button>
        </div>

        <div className=" md:w-1/2 p-[3vw]">
          <img
            className="h-full w-full hover:scale-105 duration-1000 rounded-2xl object-fill shadow-xl"
            src="https://th.bing.com/th?id=OIP.KkxfezKFPzxP8MXBT4hdxwHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
            alt=""
          />
        </div>
      </div>

      {/* Search Bar */}
      <div className="w-full pt-5">
        <MapSearchBar />
      </div>

      {/* Maps */}
      <div className="w-full"></div>

      {/*  */}
      <div className="w-full h-full">
        <WhatWeOffer isAuthenticated={isAuthenticated} />
      </div>

      {/* Testimonials */}
      <div className="w-full h-full">
        <Slider />
      </div>

      <div className="w-full h-full">
        <Footer />
      </div>

      {/* modal */}
      <LoginPage isOpen={activeModal === "login"} onClose={closeModal} />
    </div>
  );
}

export default Landing;
