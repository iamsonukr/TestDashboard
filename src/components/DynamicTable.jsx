import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { FaFileExport } from "react-icons/fa6";
import { MdImportExport, MdDelete, MdPreview } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

const DynamicTable = ({
  title,
  subTitle,
  initialData,
  columns,
  onAddNew = () => {},
  pageConfig,
}) => {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("All");

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const navigate = useNavigate();

  const handleSearch = (e) => setSearchQuery(e.target.value);

  const handleDelete = (id) => {
    setItemToDelete(id);
    setIsDeleteModalOpen(true);
  };


  const handleView = (id) => {
    navigate(`/dashboard/viewandedit`, { state: { id } });
  };


  const confirmDelete = () => {
    const updatedData = data.filter((item) => item.id !== itemToDelete);
    setData(updatedData);
    setIsDeleteModalOpen(false);
    setItemToDelete(null);
  };

  const cancelDelete = () => {
    setIsDeleteModalOpen(false);
    setItemToDelete(null);
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
      navigate(pageConfig.addNewEntryRoute);
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
                className="border-blue-600 border-2 text-black px-2 rounded-md hover:text-white hover:bg-gradient-to-r from-[#2C52A0] to-[#4189C4] flex items-center gap-1 cursor-pointer"
              >
                <FaFileExport /> Export
              </button>
              <button className="relative border-blue-600 border-2 text-black px-2 rounded-md hover:text-white hover:bg-gradient-to-r from-[#2C52A0] to-[#4189C4] flex items-center gap-1 cursor-pointer">
                <MdImportExport />
                Import
                <input
                  type="file"
                  accept=".csv"
                  onChange={handleImport}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              </button>
            </>
          )}
          {pageConfig?.AddnewEntry && (
            <button
              onClick={handleAddNewEntryClick}
              className="border-blue-600 border-2 text-black px-2 rounded-md hover:text-white hover:bg-gradient-to-r from-[#2C52A0] to-[#4189C4] flex items-center gap-1 cursor-pointer"
            >
              + Add New {title}
            </button>
          )}
        </div>
      </div>
      <h2 className="text-[1.1vw] text-gray-400 font-light pb-[1vw]">{subTitle}</h2>

      {/* Search and Filter */}
      <div className="mb-4 flex gap-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearch}
          className="p-2 border-2 border-black rounded"
        />
        {pageConfig?.statusOptions && (
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="p-2 border-2 border-black rounded"
          >
            <option value="All">Filter: All</option>
            {pageConfig.statusOptions.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        )}
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
              {pageConfig?.showAction && <th className="px-4 py-2 border-b">Actions</th>}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id}>
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className={`px-4 py-2 border-b ${
                      col.key === "status"
                        ? item[col.key]?.toLowerCase() === "active"
                          ? "text-green-600"
                          : "text-red-600"
                        : ""
                    }`}
                  >
                    {item[col.key]}
                  </td>
                ))}
                {pageConfig?.showAction && (
                      <td className="px-4 py-2 border-b flex gap-2">
                      {pageConfig?.showView && (
                        <button onClick={() => handleView(item.id)}>
                          <MdPreview />
                        </button>
                      )}
                      {pageConfig?.showEdit && (
                        <button onClick={() => handleEdit(item.id)}>
                          <FiEdit />
                        </button>
                      )}
                      {pageConfig?.showDelete && (
                        <button onClick={() => handleDelete(item.id)}>
                          <MdDelete className="text-red-600" />
                        </button>
                      )}
                    </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md">
            <h3>Are you sure you want to delete this item?</h3>
            <div className="flex gap-4 mt-4">
              <button
                onClick={confirmDelete}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Yes, Delete
              </button>
              <button
                onClick={cancelDelete}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
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
  subTitle: PropTypes.string,
  initialData: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  onAddNew: PropTypes.func,
  pageConfig: PropTypes.object,
};

export default DynamicTable;
