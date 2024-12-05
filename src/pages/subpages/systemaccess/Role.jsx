import React from "react";
import Layout from "../../../layouts/Layout";
import DynamicTable from "../../../components/DynamicTable";
const Services = () => {
  const faqColumns = [
    { key: "Name", label: "Name" },
    { key: "status", label: "Status" },
    { key: "createdAt", label: "Created At" },
  ];

  const faqData = [
    {
      id: 1,
      Name: "Roy",
      status: "Active",
      createdAt: "22 May 2024",
    },
    {
      id: 2,
      Name: "Roy",
      status: "Active",
      createdAt: "22 May 2024",
    },
  ];


  return (
    <Layout>
      <div className="p-6 bg-gray-100 h-full">
        <DynamicTable title="Roles" subTitle="You can customise multiple user roles as per your requirements and assign these roles to your sub-admin users to have very specific data access" initialData={faqData} columns={faqColumns} pageConfig={{
          AddnewEntry: true,
          addNewEntryRoute: "/add/role",
          statusOptions: ["Active", "Inactive"],

          select: true,
          Action: true,

          showDelete: true,
          showEdit: true,
        }} />
      </div>
      
    </Layout>
  );
};

export default Services;


