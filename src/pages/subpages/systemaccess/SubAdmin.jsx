import React from "react";
import Layout from "../../../layouts/Layout";
import DynamicTable from "../../../components/DynamicTable";
const  Services = () => {
  const faqColumns = [
    { key: "Name", label: "Name" },
    { key: "email", label: "E-mail" },
    { key: "role", label: "Role" },
    { key: "mobile", label: "Mobile no." },

    { key: "status", label: "Status" },
    { key: "createdAt", label: "Created At" },
  ];

  const faqData = [
    {
      id: 1,
      Name: "Roy",
      email: "ty@gmail.com",
      role: "Type",
      mobile:"1234567890",
      status: "Active",
      createdAt: "22 May 2024",
    },
    {
      id: 2,
      Name: "Roy",
      email: "ty@gmail.com",
      role: "Type",
      mobile:"1234567890",      status: "Active",
      createdAt: "22 May 2024",
    },
  ];
 

  return (
    <Layout>
      <div className="p-6 bg-gray-100 h-full">
        <DynamicTable title="Sub-Admin" initialData={faqData} columns={faqColumns}  pageConfig={{
            AddnewEntry: true,
            addNewEntryRoute: "/add/addSubAdmin",
            statusOptions: ["Active", "Inactive"],

            select: true,
            Action: true,
            showAction: true,

            showDelete: true,
            showEdit: true,
          }}/>
      </div>
    </Layout>
  );
};

export default  Services;


