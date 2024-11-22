import React, { useState } from "react";
import PropTypes from "prop-types";
import { FiEdit } from "react-icons/fi";
import { MdPreview } from "react-icons/md";
import { MdDelete } from "react-icons/md";


const DynamicTable = ({
  title,
  initialData,
  columns,
  onAddNew = () => {},
  pageConfig,
}) => {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newEntry, setNewEntry] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [viewItem, setViewItem] = useState(null); // New state to manage the view modal

  const handleSearch = (e) => setSearchQuery(e.target.value);

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setNewEntry((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = () => {
    if (isEditing) {
      setData((prevData) =>
        prevData.map((item) =>
          item.id === editingId ? { ...item, ...newEntry } : item
        )
      );
    } else {
      const newId = data.length ? data[data.length - 1].id + 1 : 1;
      setData([...data, { ...newEntry, id: newId }]);
      onAddNew(newEntry);
    }
    setNewEntry({});
    setIsEditing(false);
    setEditingId(null);
    setIsFormOpen(false);
  };

  const handleEdit = (id) => {
    const itemToEdit = data.find((item) => item.id === id);
    setNewEntry(itemToEdit);
    setIsEditing(true);
    setEditingId(id);
    setIsFormOpen(true);
  };

  const handleImport = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result;
        const rows = content.split("\n").map((row) => row.split(","));
        const headers = rows[0];
        const importedData = rows.slice(1).map((row) =>
          row.reduce((acc, value, idx) => {
            acc[headers[idx]] = value.trim();
            return acc;
          }, {})
        );
        setData((prevData) => [...prevData, ...importedData]);
      };
      reader.readAsText(file);
    }
  };

  const handleExport = () => {
    const headers = columns.map((col) => col.key).join(",");
    const rows = data.map((row) =>
      columns.map((col) => row[col.key] || "").join(",")
    );
    const csvContent = [headers, ...rows].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${title}_data.csv`;
    link.click();
  };

  const filteredData = data.filter((item) => {
    const matchesSearchQuery = Object.values(item)
      .join(" ")
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesFilter = filter === "All" || item.status === filter;
    return matchesSearchQuery && matchesFilter;
  });

  const handleView = (id) => {
    const itemToView = data.find((item) => item.id === id);
    setViewItem(itemToView); // Set the item to be viewed
  };

  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <div className="flex justify-between flex-wrap gap-4 mb-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <div className="flex gap-2">
          {pageConfig?.importExport && (
            <>
              <button
                onClick={handleExport}
                className="bg-blue-600 text-[1.5vw] text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Export
              </button>
              <label className="bg-blue-600 text-[1.5vw] text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer">
                Import
                <input
                  type="file"
                  accept=".csv"
                  onChange={handleImport}
                  className="hidden"
                />
              </label>
            </>
          )}
          <button
            onClick={() => {
              setIsFormOpen(true);
              setIsEditing(false);
            }}
            className="bg-green-600 text-[1.5vw] text-white px-4 py-2 rounded-md hover:bg-green-700"
          >
            + Add New Entry
          </button>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between mb-4 gap-4">
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
            {pageConfig?.statusOptions?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center border border-gray-300 rounded-md flex-grow">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search"
            className="px-4 py-2 outline-none w-full"
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-left text-sm font-medium text-gray-600">
              {pageConfig?.select && (
                <th className="border px-4 py-2">Select</th>
              )}
              {columns.map((col) => (
                <th key={col.key} className="border px-4 py-2">
                  {col.label}
                </th>
              ))}
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id} className="text-sm text-gray-700">
                {pageConfig?.select && (
                  <td className="border px-4 py-2">
                    <input type="checkbox" />
                  </td>
                )}
                {columns.map((col) => (
                  <td key={col.key} className="border px-4 py-2">
                    {col.key === "status" ? (
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          item.status === "Active"
                            ? "bg-green-200 text-green-800"
                            : "bg-orange-200 text-orange-800"
                        }`}
                      >
                        {item[col.key]}
                      </span>
                    ) : (
                      item[col.key]
                    )}
                  </td>
                ))}
                
                <td className="border px-4 py-2 flex items-center gap-2">
                  {pageConfig?.actions?.view && (
                    <button
                      className="text-green-500 hover:text-green-900"
                      onClick={() => handleView(item.id)}
                    >
                      <MdPreview />

                    </button>
                  )}
                  {pageConfig?.actions?.edit && (
                  <button
                    onClick={() => handleEdit(item.id)}
                    className="text-yellow-500 hover:text-yellow-900"
                  >
                    <FiEdit />

                  </button>
                  )}
                  {pageConfig?.actions?.delete && (
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-red-500 hover:text-red-900"
                  >
                    <MdDelete />

                  </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isFormOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">
              {isEditing ? "Edit Entry" : "Add New Entry"}
            </h3>
            {columns.map((col) => (
              <div className="mb-4" key={col.key}>
                <label className="block text-sm font-medium">{col.label}</label>
                <input
                  type="text"
                  name={col.key}
                  value={newEntry[col.key] || ""}
                  onChange={handleFormChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
            ))}
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

      {viewItem && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">View Entry</h3>
            <div>
              {columns.map((col) => (
                <div key={col.key} className="mb-4">
                  <label className="block text-sm font-medium">{col.label}</label>
                  <p>{viewItem[col.key]}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setViewItem(null)}
                className="bg-gray-300 px-4 py-2 rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

DynamicTable.propTypes = {
  title: PropTypes.string.isRequired,
  initialData: PropTypes.array.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  onAddNew: PropTypes.func,
  pageConfig: PropTypes.shape({
    select: PropTypes.bool,
    importExport: PropTypes.bool,
    statusOptions: PropTypes.arrayOf(PropTypes.string),
    actions: PropTypes.shape({
      view: PropTypes.bool,
      edit: PropTypes.bool,
      delete: PropTypes.bool,
      pending: PropTypes.bool,
      debitBalance: PropTypes.bool,
    }),
  }).isRequired,
};

export default DynamicTable;
