import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#2C52A0] to-[#4189C4] text-white p-6 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <p className="mb-8">
        You may have mistyped the address or the page may have been moved.
      </p>
      <Link
        to="/"
        className="flex items-center space-x-2 bg-white text-[#2C52A0] px-6 py-3 rounded-full shadow-lg hover:bg-gray-200 transition"
      >
        <FiHome size={20} />
        <span>Back to Home</span>
      </Link>
      <div className="absolute bottom-4 text-sm text-gray-200">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </div>
  );
};

export default ErrorPage;
