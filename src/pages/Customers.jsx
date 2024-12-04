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



  return (
    <Layout>
      <div className="p-6 bg-gray-100 h-full">
        <DynamicTable
          title="Customers"
          initialData={faqData}
          columns={faqColumns}
          pageConfig={{
            AddnewEntry: true,
            addNewEntryRoute: "/add/customer",
            importExport: true,
            statusOptions: ["Active", "Inactive"],

            select: true,
            Action: true,

            showView: true,
            showEdit: true,
            showDelete: true,
          }}
        />
      </div>
    </Layout>
  );
};

export default Customers;
