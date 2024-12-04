
const DashCard = ({ name, number, Icon }) => {
  return (
    <div className="flex items-center justify-between bg-white shadow-lg rounded-lg p-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
      {/* Left Side */}
      <div className="flex flex-col justify-between">
        {/* Card Name */}
        <h3 className="text-xl font-semibold text-gray-700">{name}</h3>
        {/* Card Number */}
        <p className="text-2xl font-bold text-gray-800">{number}</p>
      </div>

      {/* Right Side */}
      <div className="flex items-center justify-center bg-gray-100 rounded-full w-16 h-16">
        <Icon className="text-4xl text-blue-500" />
      </div>
    </div>
  );
};

export default DashCard;
