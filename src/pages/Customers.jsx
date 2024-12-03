import React from "react";
import Layout from "../layouts/Layout";
import DynamicTable from "../components/DynamicTable";

const Customers = () => {
  const faqColumns = [
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "mobile no", label: "Mobile no" },
    { key: "status", label: "Status" },
    { key: "registeredAt", label: "Registered At" },
  ];

  const faqData = [
    {
      id: 1,
      name: "Aman Yadav",
      "mobile no": "1234567890",
      email: "asd@gmail.com",
      status: "Active",
      registeredAt: "22 May 2024",
    },
    {
      id: 2,
      name: "Pawan Yadav",
      "mobile no": "123451565590",
      email: "asd@gmail.com",
      status: "Inactive",
      registeredAt: "15 May 2024",
    },
  ];

  const pageConfig = {
    select: true, 
    importExport: true, 
    AddnewEntry: true,
    Action: true,
    statusOptions: ["Active", "Inactive"], 
    actions: {
      view: true, 
      delete: true,
      pending: false, 
      debitBalance: false, 
      edit: true,
    },
  };

  return (
    <Layout>
      <div className="p-6 bg-gray-100 min-h-screen">
        <DynamicTable
          title="Customers"
          initialData={faqData}
          columns={faqColumns}
          pageConfig={pageConfig} 
        />
      </div>
    </Layout>
  );
};

export default Customers;
