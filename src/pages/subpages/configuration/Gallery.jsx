import Layout from "../../../layouts/Layout";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const navigate = useNavigate();

  const handleAddGallery = () => {
    navigate('/add/gallery');
  };

  return (
    <Layout>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Gallery</h2>
        <button
          onClick={handleAddGallery}
          className="border-blue-600 border-2 text-black px-4 py-1 rounded-md hover:text-white hover:bg-gradient-to-r from-[#2C52A0] to-[#4189C4] flex items-center gap-1 cursor-pointer"
        >
          Add Gallery
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="bg-gray-200 h-48 flex justify-center items-center">
          <img src="https://via.placeholder.com/150" alt="Gallery Item" className="object-cover h-full w-full rounded-md" />
        </div>
        <div className="bg-gray-200 h-48 flex justify-center items-center">
          <img src="https://via.placeholder.com/150" alt="Gallery Item" className="object-cover h-full w-full rounded-md" />
        </div>
      </div>
    </Layout>
  );
};

export default Gallery;
