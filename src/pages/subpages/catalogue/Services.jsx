import React, { useContext, useEffect, useState } from "react";
import { ServiceContext } from "../../../context/ServiceContext";
import DynamicTable from "../../../components/DynamicTable";
import Layout from "../../../layouts/Layout";

const Services = () => {
  const [faq, setFaq] = useState([]);
  const { allServices } = useContext(ServiceContext);

  // Transform the data to match the expected structure
  const transformData = (services) => {
    return services.map(service => ({
      id: service._id, // Add this to match DynamicTable expectations
      name: service.name,
      description: service.description,
      pricePerHour: `$${service.pricePerHour}`, // Format price with dollar sign
      addOns: Array.isArray(service.addOns) 
        ? service.addOns.map(addon => addon.name).join(", ")
        : "",
      image: service.image ? "✓" : "✗" // Simple image indicator
    }));
  };

  useEffect(() => {
    if (allServices) {
      const transformedData = transformData(allServices);
      setFaq(transformedData);
      // console.log("Original data:", allServices);
      // console.log("Transformed data:", transformedData);
    }
  }, [allServices]);

  const faqColumns = [
    { key: "name", label: "Name" },
    { key: "description", label: "Description" },
    { key: "pricePerHour", label: "Price /hr" },
    { key: "addOns", label: "AddOns" },
    { key: "image", label: "Image" }
  ];

  return (
    <Layout>
      <div className="p-6 bg-gray-100 h-full">
        <DynamicTable 
          title="Services" 
          initialData={faq} 
          columns={faqColumns}
          pageConfig={{
            AddnewEntry: true,
            addNewEntryRoute: "/add/Services",
            statusOptions: ["Active", "Inactive"],
            showAction: true,
            select: true,
            Action: true,
            showEdit: true,
            showDelete: true,
            showView: true, // Added this to enable view button
          }}
        />
      </div>
    </Layout>
  );
};

export default Services;