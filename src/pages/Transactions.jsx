import React from "react";
import Layout from "../layouts/Layout";
import DynamicTable from "../components/DynamicTable";
const  Transactions = () => {
  const faqColumns = [
    { key: "Time", label: "Time" },
    { key: "Type", label: "Type" },
    { key: "Description", label: "Description" },
    { key: "Amount", label: "Amount" },
    { key: "Earning", label: "Earning" },
  ];

  const faqData = [
    {
      id: 1,
      Time: "22 May 2024",
      Type: "Roy",
      Description: "No Reason",
      Amount: "300",
      Earning: "$200",
    },
    {
      id: 2,
      Time: "22 May 2024",
      Type: "Roy",
      Description: "No Reason",
      Amount: "300",
      Earning: "$200",
    },
  ];
  const pageConfig = {
    select: true, 
    Action: true,

    importExport: true, 
    statusOptions: ["Active", "Inactive"], 
    actions: {
      view: true,
      delete: true, 
    },
  };
  return (
    <Layout>
      <div className="p-6 bg-gray-100 min-h-screen">
        <DynamicTable title="Transations" initialData={faqData} columns={faqColumns}  pageConfig={pageConfig} />
      </div>
    </Layout>
  );
};

export default  Transactions;


