import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { MdPreview, MdDelete } from "react-icons/md";
import { FaFileExport } from "react-icons/fa6";
import { MdImportExport } from "react-icons/md";

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
  const [isViewing, setIsViewing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // New state for delete confirmation modal
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSearch = (e) => setSearchQuery(e.target.value);

  const handleDelete = (id) => {
    setItemToDelete(id); // Store the item ID to be deleted
    setIsDeleteModalOpen(true); // Open the delete confirmation modal
  };

  const confirmDelete = () => {
    const updatedData = data.filter((item) => item.id !== itemToDelete);
    setData(updatedData);
    setIsDeleteModalOpen(false);
    setItemToDelete(null); // Clear the item to delete
  };

  const cancelDelete = () => {
    setIsDeleteModalOpen(false);
    setItemToDelete(null); // Clear the item to delete
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
    setIsViewing(false); // Ensure that "viewing" is turned off when editing
  };

  const handleView = (id) => {
    const itemToView = data.find((item) => item.id === id);
    setNewEntry(itemToView);
    setIsViewing(true);
    setIsFormOpen(true);
    setIsEditing(false); // Ensure that "editing" is turned off when viewing
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

  const handleAddNewEntryClick = () => {
    if (pageConfig?.addNewEntryRoute) {
      navigate(pageConfig.addNewEntryRoute); // Use navigate to go to the route
    }
  };

  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <div className="flex justify-between flex-wrap gap-4 mb-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <div className="flex gap-2 justify-center items-center">
          {pageConfig?.importExport && (
            <>
              <button
                onClick={handleExport}
                className="border-blue-600 border-2 text-[1vw] text-black px-2 rounded-md hover:text-white hover:bg-gradient-to-r from-[#2C52A0] to-[#4189C4] flex items-center gap-1 cursor-pointer"
              >
                <FaFileExport /> Export
              </button>
              <button className="border-blue-600 border-2 text-[1vw] text-black px-2 rounded-md hover:text-white hover:bg-gradient-to-r from-[#2C52A0] to-[#4189C4] flex items-center gap-1 cursor-pointer">
                <MdImportExport />
                Import
                <input
                  type="file"
                  accept=".csv"
                  onChange={handleImport}
                  className="hidden"
                />
              </button>
            </>
          )}
          {pageConfig?.AddnewEntry && (
            <button
              onClick={handleAddNewEntryClick} // Trigger route navigation
              className="border-blue-600 border-2 text-[1vw] text-black px-2 rounded-md hover:text-white hover:bg-gradient-to-r from-[#2C52A0] to-[#4189C4]"
            >
              + Add New Entry
            </button>
          )}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col.key} className="px-4 py-2 border-b">
                  {col.label}
                </th>
              ))}
              <th className="px-4 py-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id}>
                {columns.map((col) => (
                  <td key={col.key} className="px-4 py-2 border-b">
                    {item[col.key]}
                  </td>
                ))}
                <td className="px-4 py-2 border-b flex gap-2">
                  <button onClick={() => handleView(item.id)}>
                    <MdPreview />
                  </button>
                  <button onClick={() => handleEdit(item.id)}>
                    <FiEdit />
                  </button>
                  <button onClick={() => handleDelete(item.id)}>
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isDeleteModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg">
            <p>Are you sure you want to delete this item?</p>
            <button onClick={confirmDelete} className="mr-2 bg-red-500 text-white px-4 py-2 rounded">
              Yes
            </button>
            <button onClick={cancelDelete} className="bg-gray-500 text-white px-4 py-2 rounded">
              No
            </button>
          </div>
        </div>
      )}

      {/* Modal for View or Edit */}
      {(isEditing || isViewing) && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-[400px]">
            <h3 className="text-xl font-semibold mb-4">{isEditing ? "Edit" : "View"} Item</h3>
            {columns.map((col) => (
              <div key={col.key} className="mb-4">
                <label className="block text-gray-700">{col.label}</label>
                <input
                  type="text"
                  name={col.key}
                  value={newEntry[col.key] || ""}
                  onChange={handleFormChange}
                  disabled={isViewing} // Disable input if viewing
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                />
              </div>
            ))}
            <div className="flex justify-between gap-2">
              {isEditing && (
                <button
                  onClick={handleFormSubmit}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Save
                </button>
              )}
              <button
                onClick={() => {
                  setIsFormOpen(false);
                  setIsEditing(false);
                  setIsViewing(false);
                }}
                className="bg-gray-500 text-white px-4 py-2 rounded"
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
  columns: PropTypes.array.isRequired,
  onAddNew: PropTypes.func,
  pageConfig: PropTypes.object,
};

export default DynamicTable;
