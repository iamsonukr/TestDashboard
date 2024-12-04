import React from "react";
import Layout from "../../../layouts/Layout";
import DynamicTable from "../../../components/DynamicTable";
const  Services = () => {
  const faqColumns = [
    { key: "Name", label: "Name" },
    { key: "Best Seller", label: "Best Seller" },
    { key: "status", label: "Status" },
    { key: "createdAt", label: "Created At" },
  ];

  const faqData = [
    {
      id: 1,
      Name: "Roy",
      "Best Seller": "Yes",
      status: "Active",
      createdAt: "22 May 2024",
    },
    {
      id: 2,
      Name: "Roy",
      "Best Seller": "Yes",
      status: "Active",
      createdAt: "22 May 2024",
    },
  ];
  

  return (
    <Layout>
      <div className="p-6 bg-gray-100 h-full">
        <DynamicTable title="Services" initialData={faqData} columns={faqColumns}  pageConfig={{
            AddnewEntry: true,
            addNewEntryRoute: "/add/customer",
            statusOptions: ["Active", "Inactive"],

            select: true,
            Action: true,

            showEdit: true,
            showDelete: true,
          }}/>
      </div>
    </Layout>
  );
};

export default  Services;


