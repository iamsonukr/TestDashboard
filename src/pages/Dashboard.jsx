import Layout from "../layouts/Layout";
import DashCard from "../pagecomponents/dashboardcomponents/dashCard";
import { FaMoneyBillWave, FaUserFriends, FaClipboardList, FaHandHoldingUsd } from "react-icons/fa";
import DynamicTable from "../components/DynamicTable";

const Dashboard = () => {
  // Data for the cards
  const cardData = [
    { name: "Bookings", number: "1,245", Icon: FaClipboardList },
    { name: "Revenue", number: "$35,420", Icon: FaMoneyBillWave },
    { name: "Service Providers", number: "87", Icon: FaHandHoldingUsd },
    { name: "Customers", number: "5,412", Icon: FaUserFriends },
  ];
  const faqColumns = [
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "mobile no", label: "Mobile no" },
    { key: "status", label: "Status" },
    { key: "createdAt", label: "Created At" },
  ];

  const faqData = [
    {
      id: 1,
      name: "Aman Yadav",
      "mobile no": "1234567890",
      email: "asd@gmail.com",
      status: "Active",
      createdAt: "22 May 2024",
    },
    {
      id: 2,
      name: "Pawan Yadav",
      "mobile no": "123451565590",
      email: "asd@gmail.com",
      status: "Inactive",
      createdAt: "15 May 2024",
    },
  ];

  const pageConfig = {
    select: true, 
    importExport: false, 
    statusOptions: ["Active", "Inactive"], 
    showEdit: true,
    showDelete: true,
    showView: true,
    
  };

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
      <div className="p-6 bg-gray-100 h-full">
        <DynamicTable
          
          initialData={faqData}
          columns={faqColumns}
          pageConfig={pageConfig} 
        />
      </div>
    </Layout>
  );
};

export default Dashboard;
