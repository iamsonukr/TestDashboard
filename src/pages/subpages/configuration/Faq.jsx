import React, { useState } from "react";
import Layout from "../../../layouts/Layout";
const FaqManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("All"); 
  const [faqs, setFaqs] = useState([
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
    {
      id: 3,
      question: "What are the available payment methods?",
      lang: "en",
      status: "Active",
      createdAt: "10 May 2024",
    },
  ]);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newFaq, setNewFaq] = useState({ question: "", lang: "en", status: "Active" });
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  
  const handleSearch = (e) => setSearchQuery(e.target.value);

  const handleDelete = (id) => {
    const updatedFaqs = faqs.filter((faq) => faq.id !== id);
    setFaqs(updatedFaqs);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setNewFaq((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = () => {
    if (isEditing) {
      
      setFaqs((prevFaqs) =>
        prevFaqs.map((faq) =>
          faq.id === editingId ? { ...faq, ...newFaq } : faq
        )
      );
    } else {
      
      const newId = faqs.length ? faqs[faqs.length - 1].id + 1 : 1;
      setFaqs([...faqs, { ...newFaq, id: newId, createdAt: new Date().toLocaleDateString() }]);
    }

    setNewFaq({ question: "", lang: "en", status: "Active" });
    setIsEditing(false);
    setEditingId(null);
    setIsFormOpen(false);
  };

  const handleEdit = (id) => {
    const faqToEdit = faqs.find((faq) => faq.id === id);
    setNewFaq({ question: faqToEdit.question, lang: faqToEdit.lang, status: faqToEdit.status });
    setIsEditing(true);
    setEditingId(id);
    setIsFormOpen(true);
  };

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearchQuery = faq.question.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filter === "All" || faq.status === filter;
    return matchesSearchQuery && matchesFilter;
  });

  return (
    <Layout>
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-md rounded-md p-4">
        <h2 className="text-2xl font-semibold mb-4">FAQs</h2>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <label htmlFor="filter" className="text-sm font-medium">
              Filter By:
            </label>
            <select
              id="filter"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border border-gray-300 rounded-md px-2 py-1"
            >
              <option value="All">All</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <div className="flex items-center border border-gray-300 rounded-md">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search"
              className="px-4 py-2 outline-none w-full"
            />
            <button className="px-4 py-2 bg-green-600 text-white rounded-r-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6a8 8 0 11-4.93 14.36l-5.75 1.44 1.44-5.75A8 8 0 0110 6z"
                />
              </svg>
            </button>
          </div>
        </div>

        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-left text-sm font-medium text-gray-600">
              <th className="border px-4 py-2">
                <input type="checkbox" />
              </th>
              <th className="border px-4 py-2">Question</th>
              <th className="border px-4 py-2">Lang</th>
              <th className="border px-4 py-2">Status</th>
              <th className="border px-4 py-2">Created At</th>
              <th className="border px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredFaqs.map((faq) => (
              <tr key={faq.id} className="text-sm text-gray-700">
                <td className="border px-4 py-2">
                  <input type="checkbox" />
                </td>
                <td className="border px-4 py-2">{faq.question}</td>
                <td className="border px-4 py-2">{faq.lang}</td>
                <td className="border px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded-md ${
                      faq.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {faq.status}
                  </span>
                </td>
                <td className="border px-4 py-2">{faq.createdAt}</td>
                <td className="border px-4 py-2 flex items-center gap-2">
                  <button
                    onClick={() => handleEdit(faq.id)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(faq.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-end mt-4">
          <button
            onClick={() => {
              setIsFormOpen(true);
              setIsEditing(false); 
            }}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
          >
            + Add New FAQ
          </button>
        </div>
      </div>

      {isFormOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md shadow-md w-96">
            <h3 className="text-xl font-semibold mb-4">
              {isEditing ? "Edit FAQ" : "Add New FAQ"}
            </h3>
            <div className="mb-4">
              <label className="block text-sm font-medium">Question</label>
              <input
                type="text"
                name="question"
                value={newFaq.question}
                onChange={handleFormChange}
                className="w-full px-3 py-2 border border-black rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Language</label>
              <select
                name="lang"
                value={newFaq.lang}
                onChange={handleFormChange}
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Status</label>
              <select
                name="status"
                value={newFaq.status}
                onChange={handleFormChange}
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsFormOpen(false)}
                className="bg-gray-300 px-4 py-2 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleFormSubmit}
                className="bg-green-600 text-white px-4 py-2 rounded-md"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </Layout>
  );
};

export default FaqManagement;

