// import Layout from "../layouts/Layout";

// const ServiceProvider = () => {
//   return (
//     <Layout>
//       <div className="bg-white shadow p-4 rounded-lg">
//         <h1 className="text-2xl font-bold">ServiceProvider</h1>
//         <p className="mt-4">View and update your ServiceProvider details here.</p>
//       </div>
//     </Layout>
//   );
// };

// export default ServiceProvider;

import React from "react";
import Layout from "../layouts/Layout";
import DynamicTable from "../components/DynamicTable";
const  ServiceProvider = () => {
  const faqColumns = [
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "mobile no", label: "Mobile no" },
    { key: "status", label: "Status" },
    { key: "balance", label: "Balance" },
    { key: "createdAt", label: "Created At" },
  ];

  const faqData = [
    {
      id: 1,
      name: "Aman Yadav",
      "mobile no": "1234567890",
      email: "asd@gmail.com",
      status: "Active",
      balance: "$100",
      createdAt: "22 May 2024",
    },
    {
      id: 2,
      name: "pawan Yadav",
      "mobile no": "123451565590",
      email: "asd@gmail.com",
      status: "Inactive",
      balance: "$200",
      createdAt: "15 May 2024",
    },
  ];

  return (
    <Layout>
      <div className="p-6 bg-gray-100 min-h-screen">
        <DynamicTable title="Service Provider" initialData={faqData} columns={faqColumns} />
      </div>
    </Layout>
  );
};

export default  ServiceProvider;

