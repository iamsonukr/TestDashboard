import React from "react";
import Layout from "../../../layouts/Layout";
import DynamicTable from "../../../components/DynamicTable";
const FaqManagement = () => {
  const faqColumns = [
    { key: "Content Type", label: "Content Type" },
    // { key: "lang", label: "Language" },
    { key: "status", label: "Status" },
    { key: "createdAt", label: "Created At" },
  ];

  const faqData = [
    {
      id: 1,
      "Content Type": "FAQ",
      status: "Active",
      createdAt: "22 May 2024",
    },
    {
      id: 2,
    "Content Type": "Privacy Policy",
      status: "Inactive",
      createdAt: "15 May 2024",
    },
  ];

  return (
    <Layout>
      <div className="p-6 bg-gray-100 h-full">
        <DynamicTable title="Content Pages" initialData={faqData} columns={faqColumns}
         pageConfig={{
          statusOptions: ["Active", "Inactive"],
        

          select: true,
          Action: true,

          showView: true,
        }}/> 
      </div>
    </Layout>
  );
};

export default FaqManagement;
