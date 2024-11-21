import React from "react";
import Layout from "../../../layouts/Layout";
import DynamicTable from "../../../components/DynamicTable";
const FaqManagement = () => {
  const faqColumns = [
    { key: "question", label: "Question" },
    { key: "lang", label: "Language" },
    { key: "status", label: "Status" },
    { key: "createdAt", label: "Created At" },
  ];

  const faqData = [
    {
      id: 1,
      question: "How to book a service?",
      lang: "en",
      status: "Active",
      createdAt: "22 May 2024",
    },
    {
      id: 2,
      question: "How to cancel a booking?",
      lang: "en",
      status: "Inactive",
      createdAt: "15 May 2024",
    },
  ];

  return (
    <Layout>
      <div className="p-6 bg-gray-100 min-h-screen">
        <DynamicTable title="FAQs" initialData={faqData} columns={faqColumns} />
      </div>
    </Layout>
  );
};

export default FaqManagement;
