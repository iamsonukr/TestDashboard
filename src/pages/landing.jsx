import Card from "../components/Card";
import Navbar from "../components/Navbar";

function landing() {
  return (
    <div className="w-full h-full">
      <Navbar />
      {/* static content */}
      <div className="w-full h-full flex flex-col md:flex-row gap-5 p-6">
        <div className="flex flex-col items-start justify-center gap-2 md:w-1/2 md:p-[3vw]">
          <h1 className="text-3xl md:text-[4vw] font-bold md:leading-[4vw]">
            Find Cleaning{" "}
            <span className="bg-gradient-to-r from-[#2C52A0] to-[#4189C4] bg-clip-text text-transparent">Service Near You</span>
          </h1>
          <h2 className="text-md md:text-[2vw] font-semibold text-gray-400">
            Explore Best Cleaning Service Near You
          </h2>
          <button className="text-lg md:text-[2vw] px-3 py-1 md:px-[1.5vw] md:py-[0.7vw] rounded-md font-semibold text-white bg-gray-400 hover:bg-gradient-to-r from-[#2C52A0] to-[#4189C4]">
            Book Now
          </button>
        </div>
        <div className=" md:w-1/2 p-[3vw]">
          <img
            className="h-full w-full hover:scale-105 duration-1000 rounded-2xl object-fill shadow-xl"
            src="https://img.freepik.com/free-photo/young-housewife-cleaning-with-rug-detergent-isolated_231208-10959.jpg?t=st=1732788504~exp=1732792104~hmac=9e6fb79ebcb02eb7359b16bf35bd315343fbd08b36e97ce9b31806bc686ed287&w=996"
            alt=""
          />
        </div>
      </div>
      {/* card */}

        <Card/>


    </div>
  );
}

export default landing;