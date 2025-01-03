import React from "react";
import Layout from "../layouts/Layout";
import DynamicTable from "../components/DynamicTable";
const  Booking = () => {
  const faqColumns = [
    { key: "Booking ID", label: "Booking ID" },
    { key: "Customer", label: "Customer" },
    { key: "Cost", label: "Cost" },
    { key: "status", label: "Status" },
    { key: "createdAt", label: "Created At" },
  ];

  const faqData = [
    {
      id: 1,
      "Booking ID": "02254",
      Customer: "Roy",
      Cost: "$100",
      status: "Active",
      createdAt: "22 May 2024",
    },
    {
      id: 2,
     "Booking ID": "02254",
      Customer: "Roy",
      Cost: "$100",
      status: "Active",
      createdAt: "22 May 2024",
    },
  ];

 

  return (
    <Layout>
      <div className="p-6 bg-gray-100 h-full">
        <DynamicTable title="Bookings" initialData={faqData} columns={faqColumns}  pageConfig={{
            addNewEntryRoute: "/add/customer",
            statusOptions: ["Active", "Inactive"],
            select: true,
            Action: true,
            showAction: true,
            showView: true,
          }}/>
      </div>
    </Layout>
  );
};

export default  Booking;


