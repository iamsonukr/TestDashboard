import React from "react";
import Layout from "../layouts/Layout";
import DynamicTable from "../components/DynamicTable";

const ServiceProvider = () => {
  const faqColumns = [
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "mobile no", label: "Mobile no" },
    { key: "status", label: "Status" },
    { key: "online status", label: "Online Status" },
    { key: "balance", label: "Balance" },
    { key: "createdAt", label: "Created At" },
  ];

  const faqData = [
    {
      id: 1,
      name: "Aman Yadav",
      "mobile no": "1234567890",
      email: "asd@gmail.com",
      status: "Active",
      "online status": "Online",
      balance: "$100",
      createdAt: "22 May 2024",
    },
   
  ];

 

  return (
    <Layout>
      <div className="p-6 bg-gray-100 h-full ">
        <DynamicTable
          title="Service Providers"
          initialData={faqData}
          columns={faqColumns}
          pageConfig={{
            AddnewEntry: true,
            addNewEntryRoute: "/add/Services",
            importExport: true, 
            statusOptions: ["Active", "Inactive"], 
            showView: true,
            showEdit: false,
            showDelete: true,
            showAction: true,

          }}

        />
      </div>
    </Layout>
  );
};

export default ServiceProvider;
