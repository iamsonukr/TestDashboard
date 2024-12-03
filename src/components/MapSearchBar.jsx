import  { useState } from "react";

const MapSearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <div className="flex items-center justify-center px-4 md:px-0">
      <div className="flex w-full max-w-3xl bg-white shadow-md rounded-lg overflow-hidden">
        <input
          type="text"
          className="w-full px-4 py-2 md:px-8 md:py-3 text-gray-700 focus:outline-none text-lg"
          placeholder="Search location..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className=" px-3 py-2 md:px-6 md:py-3 bg-gradient-to-r from-[#2C52A0] to-[#4189C4] text-white focus:outline-none text-lg"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default MapSearchBar;
