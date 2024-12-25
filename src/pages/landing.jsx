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
    <div className="w-full h-full">
      <Navbar isAuthenticated={isAuthenticated} />
      {/* static content */}
      <div className="w-full h-full flex border-2  border-red-700 bg-[url('https://wallpaperaccess.com/full/1137443.jpg')] bg-cover bg-center flex-col md:flex-row gap-4 p-6">
        <div className="flex flex-col items-start justify-center gap-3 md:gap-4 md:w-1/2 md:p-[3vw]">
          <h1 className="text-3xl md:text-[4vw] text-gray-400 font-bold md:leading-[4vw]">
            Find Cleaning{" "}
            <span className="bg-gradient-to-r from-[#2C52A0] to-[#4189C4] bg-clip-text text-transparent">
              Services Near You
            </span>
          </h1>
          <h2 className="text-md md:text-[2vw] font-semibold text-gray-300">
            Explore Best Cleaning Services Near You
          </h2>
          <button
            onClick={handleClick}
            className="text-lg md:text-[2vw] px-4 py-2 md:px-2vw] md:py-[1vw] rounded-md font-semibold text-white bg-gray-500 hover:bg-gradient-to-r from-[#2C52A0] to-[#4189C4]"
          >
            Book Now
          </button>
        </div>

        <div className=" md:w-1/2 p-[3vw]">
          <img
            className="h-full w-full hover:scale-105 duration-1000 rounded-2xl object-fill shadow-xl"
            src="https://img.freepik.com/free-photo/medium-shot-people-cleaning-building_23-2150454555.jpg?t=st=1734599132~exp=1734602732~hmac=da0d17153e3a454f617ea4451c9676456eb5ae330adc154f22faf67cdc32ebc0&w=1060"
            alt=""
          />
        </div>
      </div>

      {/* Search Bar */}
      <div className="w-full">
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
