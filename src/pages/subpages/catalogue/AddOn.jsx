import React, { useContext, useEffect, useState } from "react";
import Layout from "../../../layouts/Layout";
import DynamicTable from "../../../components/DynamicTable";
import { ServiceContext } from "../../../context/ServiceContext";
const  Services = () => {
  // const [faqData,setFaqData]=useState()

  const {allAddOns}=useContext(ServiceContext)


  const faqColumns = [
    { key: "Name", label: "Name" },
    { key: "max limit", label: "Max Limit" },
    { key: "type", label: "Type" },
    { key: "status", label: "Status" },
    { key: "createdAt", label: "Created At" },
  ];

  const faqData = [
    {
      id: 1,
      Name: "Roy",
      "max limit": "5",
      type: "Type",
      status: "Active",
      createdAt: "22 May 2024",
    },
    {
      id: 2,
      Name: "Roy",
      "max limit": "5",
      type: "Type",
      status: "Active",
      createdAt: "22 May 2024",
    },
  ];

  useEffect(()=>{
    if(allAddOns){
      console.log(allAddOns)
      // setFaqData(allAddOns)
    }
  },[])
 

  return (
    <Layout>
      <div className="p-6 bg-gray-100 h-full">
        <DynamicTable title="Add On" initialData={faqData} columns={faqColumns}  pageConfig={{
            AddnewEntry: true,
            addNewEntryRoute: "/add/addAddons",
            statusOptions: ["Active", "Inactive"],

            select: true,
            Action: true,
            showAction: true,

            showView: true,
            showDelete: true,
          }}/>
      </div>
    </Layout>
  );
};

export default  Services;


