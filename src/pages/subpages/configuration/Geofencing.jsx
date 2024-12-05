import React from "react";
import Layout from "../../../layouts/Layout";
import DynamicTable from "../../../components/DynamicTable";
const  Geofencing = () => {
    const faqColumns = [
      { key: "Label", label: "Label" },
      { key: "Type", label: "Type" },
      { key: "status", label: "Status" },
      { key: "createdAt", label: "Created At" },
    ];
  
    const faqData = [
      {
        id: 1,
        Label: "FAQ",
        Type: "Geofencing",
        status: "Active",
        createdAt: "22 May 2024",
      },
      {
        id: 2,
        Label: "FAQ",
        Type: "Geofencing",

        status: "Inactive",
        createdAt: "15 May 2024",
      },
    ];
  return (
    <Layout>
      
     
    <div className="p-6 bg-gray-100 h-full">
    <DynamicTable title="Geo Fencing" initialData={faqData} columns={faqColumns}
        pageConfig={{
          statusOptions: ["Active", "Inactive"],
          AddnewEntry: true,

          addNewEntryRoute: "/add/geofencing",

          select: true,
          Action: true,
showDelete: true,
          showView: true,
        }}/>         
    </div>
  </Layout>
  );
};

export default  Geofencing;


