import React from "react";
import Layout from "../layouts/Layout";
import DynamicTable from "../components/DynamicTable";

const Dispute = () => {
  const faqColumns = [
    { key: "order ID", label: "Order ID" },
    { key: "Dispute with", label: "Dispute With" },
    { key: "Reason", label: "Reason" },
    { key: "status", label: "Status" },

    { key: "createdAt", label: "Created At" },
  ];
  const faqData = [
    {
      id: 1,
      "order ID": "02254",
      "Dispute with": "Roy",
      Reason: "No Reason",
      status: "Active",
      createdAt: "22 May 2024",
    },
    {
      id: 2,
      "order ID": "054554",
      "Dispute with": "Doy",
      Reason: "No Reason",
      status: "Inactive",
      createdAt: "15 May 2024",
    },
  ];

 

  return (
    <Layout>
      <div className="p-6 bg-gray-100 h-full">
        <DynamicTable
          title="Disputes"
          initialData={faqData}
          columns={faqColumns}
          pageConfig={{ showView: true,
            showEdit: false,
            statusOptions: ["Active", "Inactive"],

            showDelete: false,}}
        />
      </div>
    </Layout>
  );
};

export default Dispute;



