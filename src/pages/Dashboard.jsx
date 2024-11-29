import Layout from "../layouts/Layout";
import DashCard from "../pagecomponents/dashboardcomponents/dashCard";
import { FaMoneyBillWave, FaUserFriends, FaClipboardList, FaHandHoldingUsd } from "react-icons/fa";

const Dashboard = () => {
  // Data for the cards
  const cardData = [
    { name: "Bookings", number: "1,245", Icon: FaClipboardList },
    { name: "Revenue", number: "$35,420", Icon: FaMoneyBillWave },
    { name: "Service Providers", number: "87", Icon: FaHandHoldingUsd },
    { name: "Customers", number: "5,412", Icon: FaUserFriends },
  ];

  return (
    <Layout>
      {/* Styled heading */}
      <div className="">
        <h2 className="text-[8vw] sm:text-[6vw] md:text-[2.5vw] font-bold bg-black bg-clip-text">
          Dashboard Overview
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[3vw] p-[1vw]">
        {/* Map through card data to render DashCards */}
        {cardData.map((card, index) => (
          <DashCard
            key={index}
            name={card.name}
            number={card.number}
            Icon={card.Icon}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Dashboard;
