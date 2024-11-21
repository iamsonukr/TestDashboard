import React, { useState } from "react";
import PropTypes from "prop-types";

const DynamicTable = ({
  title,
  initialData,
  columns,
  onAddNew = () => {},
}) => {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newEntry, setNewEntry] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

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

  const filteredData = data.filter((item) => {
    const matchesSearchQuery = Object.values(item)
      .join(" ")
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesFilter = filter === "All" || item.status === filter;
    return matchesSearchQuery && matchesFilter;
  });

  return (
    <div className="bg-white shadow-md rounded-md p-4">
        <div className="flex justify-between">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="  ">
        <button
          onClick={() => {
            setIsFormOpen(true);
            setIsEditing(false);
          }}
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
        >
          + Add New Entry
        </button>
      </div></div>
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
        </div>
      </div>
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100 text-left text-sm font-medium text-gray-600">
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
              {columns.map((col) => (
                <td key={col.key} className="border px-4 py-2">
                  {item[col.key]}
                </td>
              ))}
              <td className="border px-4 py-2 flex items-center gap-2">
                <button
                  onClick={() => handleEdit(item.id)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
     
      {isFormOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md shadow-md w-96">   
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
                  className="w-full px-3 py-2 border border-black rounded-md"
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
};

export default DynamicTable;
