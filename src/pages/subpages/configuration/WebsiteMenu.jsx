import React from "react";
import Layout from "../../../layouts/Layout";
import DynamicTable from "../../../components/DynamicTable";const  WebsiteMenu = () => {
  const faqColumns = [
    { key: "Label", label: "Label" },
    // { key: "lang", label: "Language" },
    { key: "status", label: "Status" },
    { key: "createdAt", label: "Created At" },
  ];

  const faqData = [
    {
      id: 1,
      Label: "FAQ",
      status: "Active",
      createdAt: "22 May 2024",
    },
    {
      id: 2,
      Label: "FAQ",
      status: "Inactive",
      createdAt: "15 May 2024",
    },
  ];
  return (
    <Layout>
      
     
      <div className="p-6 bg-gray-100 h-full">
      <DynamicTable title="Menu" initialData={faqData} columns={faqColumns}
          pageConfig={{
            statusOptions: ["Active", "Inactive"],
          
            showAction: true,

            select: true,
            Action: true,
  
            showView: true,
          }}/>         
      </div>
    </Layout>
  );
};

export default  WebsiteMenu;


