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
  const pageConfig = {
    select: true, 
    Action: true,

    importExport: true, 
    statusOptions: ["Active", "Inactive"], 
    actions: {
      view: false,
      delete: true,
      edit: true, 
    },
  };

  return (
    <Layout>
      <div className="p-6 bg-gray-100 min-h-screen">
        <DynamicTable title="Services" initialData={faqData} columns={faqColumns} pageConfig={pageConfig}/>
      </div>
    </Layout>
  );
};

export default  Services;


