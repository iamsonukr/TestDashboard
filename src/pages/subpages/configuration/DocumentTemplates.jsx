import React from "react";
import Layout from "../../../layouts/Layout";
import DynamicTable from "../../../components/DynamicTable";
const FaqManagement = () => {
  const faqColumns = [
    { key: "name", label: "Name" },

    { key: "user", label: "User" },
    { key: "status", label: "Status" },
    { key: "createdAt", label: "Created At" },
  ];

  const faqData = [
    {
      id: 1,
      name: "aman",
      user: "Admin",
      status: "Active",
      createdAt: "22 May 2024",
    },
    {
      id: 2,
      name: "FAQ",
      user: "Admin",
      status: "Inactive",
      createdAt: "15 May 2024",
    },
  ];

  return (
    <Layout>
      <div className="p-6 bg-gray-100 h-full">
        <DynamicTable title="Document Templates" initialData={faqData} columns={faqColumns}
         pageConfig={{
          statusOptions: ["Active", "Inactive"],
          AddnewEntry: true,
          addNewEntryRoute: "/add/documentTemplate",
          select: true,
          Action: true,
          showEdit: true,
          showDelete: true,
          showView: true,
        }}/> 
      </div>
    </Layout>
  );
};

export default FaqManagement;
