import React from "react";
import Layout from "../layouts/Layout";
import DynamicTable from "../components/DynamicTable";

const Customers = () => {
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
    select: true, // Enable row selection
    importExport: true, // Enable import/export functionality
    statusOptions: ["Active", "Inactive"], // Status filter options
    actions: {
      view: false, // Enable "View" action button
      pending: false, // Disable "Pending" action button
      debitBalance: false, // Disable "Debit Balance" action button
    },
  };

  return (
    <Layout>
      <div className="p-6 bg-gray-100 min-h-screen">
        <DynamicTable
          title="Customers"
          initialData={faqData}
          columns={faqColumns}
          pageConfig={pageConfig} // Pass the page-specific configuration
        />
      </div>
    </Layout>
  );
};

export default Customers;
