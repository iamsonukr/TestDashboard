import React from "react";
import Layout from "../layouts/Layout";
import DynamicTable from "../components/DynamicTable";
import faqData from "../utils/Data";

const Customers = () => {
  const faqColumns = [
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "mobile no", label: "Mobile no" },
    { key: "status", label: "Status" },
    { key: "registeredAt", label: "Registered At" },
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
            showAction: true,
            select: true,
            Action: true,

            showView: true,
            showDelete: true,
          }}
        />
      </div>
    </Layout>
  );
};

export default Customers;
