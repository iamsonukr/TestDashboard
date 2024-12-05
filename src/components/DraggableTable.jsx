import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdDragIndicator, MdMoreVert } from 'react-icons/md';

const DraggableTable = ({ columns, columnMap, data, onReorder, onNavigate, heading }) => {
  const [draggedRow, setDraggedRow] = useState(null);
  const [dragOverRow, setDragOverRow] = useState(null);
  const [selectedRows, setSelectedRows] = useState([]);
  const [menuOpen, setMenuOpen] = useState(null); // Track the open menu
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [rowToEdit, setRowToEdit] = useState(null);
  const [rowToDelete, setRowToDelete] = useState(null);
  const navigate = useNavigate();

  const handleDragStart = (index) => {
    setDraggedRow(index);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    setDragOverRow(index);
  };

  const handleDrop = (e, index) => {
    e.preventDefault();
    if (draggedRow !== null && draggedRow !== index) {
      const updatedData = Array.from(data);
      const [removed] = updatedData.splice(draggedRow, 1);
      updatedData.splice(index, 0, removed);
      onReorder(updatedData);
    }
    setDraggedRow(null);
    setDragOverRow(null);
  };

  const handleDragEnd = () => {
    setDraggedRow(null);
    setDragOverRow(null);
  };

  const handleNavigateClick = () => {
    if (onNavigate) {
      navigate(onNavigate);
    }
  };

  const handleCheckboxChange = (e, rowId) => {
    if (e.target.checked) {
      setSelectedRows((prevSelectedRows) => [...prevSelectedRows, rowId]);
    } else {
      setSelectedRows((prevSelectedRows) => prevSelectedRows.filter((id) => id !== rowId));
    }
  };

  const handleSelectAllChange = (e) => {
    if (e.target.checked) {
      setSelectedRows(data.map((row) => row.id));
    } else {
      setSelectedRows([]);
    }
  };

  const handleMenuToggle = (index) => {
    setMenuOpen(menuOpen === index ? null : index); // Toggle the dropdown for the clicked row
  };

  const handleEdit = (row) => {
    setRowToEdit(row);
    setIsEditModalOpen(true);
  };

  const handleDelete = (row) => {
    setRowToDelete(row);
    setIsDeleteModalOpen(true);
  };

  const handleEditSave = (updatedRow) => {
    const updatedData = data.map((row) =>
      row.id === updatedRow.id ? updatedRow : row
    );
    onReorder(updatedData);
    setIsEditModalOpen(false);
  };

  const handleDeleteConfirm = () => {
    const updatedData = data.filter((row) => row.id !== rowToDelete.id);
    onReorder(updatedData);
    setIsDeleteModalOpen(false);
  };

  const handleDeleteCancel = () => {
    setIsDeleteModalOpen(false);
  };

  const getStatusBgColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-200';
      case 'Inactive':
        return 'bg-red-200';
      default:
        return 'bg-gray-100';
    }
  };
  
  return (
    <div className="overflow-x-auto">
      <div className="mb-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold">{heading}</h1>
        <button
          onClick={handleNavigateClick}
          className="border-blue-600 border-2 text-black px-4 py-1 rounded-md hover:text-white hover:bg-gradient-to-r from-[#2C52A0] to-[#4189C4] flex items-center gap-1 cursor-pointer"
        >
          Add {heading}
        </button>
      </div>
  
      {/* Table */}
      <table className="min-w-[80%] table-auto border-collapse rounded-lg overflow-hidden">
        <thead className='hidden'>
          <tr>
            <th className="py-3 px-6 bg-gray-100">Drag</th>
            {columns.map((column, idx) => (
              <th key={idx} className="py-3 px-6 bg-gray-100 text-left">{column}</th>
            ))}
            <th className="py-3 px-6 bg-gray-100">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={row.id}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={(e) => handleDragOver(e, index)}
              onDrop={(e) => handleDrop(e, index)}
              onDragEnd={handleDragEnd}
              className={`cursor-pointer hover:bg-blue-50 ${dragOverRow === index ? 'bg-blue-200' : ''}`}
              style={{
                opacity: draggedRow === index ? 0.5 : 1,
                transition: 'opacity 0.3s ease',
              }}
            >
              <td className="py-3 px-6 border-b">
                <div
                  className="flex items-center justify-center cursor-grab"
                  onDragStart={() => handleDragStart(index)}
                  draggable
                  style={{ cursor: 'grab' }}
                >
                  <MdDragIndicator className="text-gray-500" />
                </div>
              </td>
              {columns.map((column, idx) => (
                <td
                  key={idx}
                  className={`py-3 px-6 border-b text-gray-800 ${column === 'Status' ? 'text-center' : ''}`}
                >
                  {column === 'Status' ? (
                    <span
                      className={`inline-block px-3 py-1 text-sm font-semibold text-center rounded-full ${getStatusBgColor(row[columnMap[column]])}`}
                    >
                      {row[columnMap[column]] || 'N/A'}
                    </span>
                  ) : (
                    row[columnMap[column]] || 'N/A'
                  )}
                </td>
              ))}
              <td className="text-center pr-5">
                {/* Menu Icon */}
                <div className="relative inline-block text-left">
                  <button
                    onClick={() => handleMenuToggle(index)}
                    className="text-gray-500 focus:outline-none"
                  >
                    <MdMoreVert className="text-xl text-blue-500" />
                  </button>
  
                  {/* Dropdown Menu */}
                  {menuOpen === index && (
                    <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg z-10">
                      <button
                        onClick={() => handleEdit(row)}
                        className="block w-full px-4 py-2 text-sm text-black hover:bg-blue-200"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(row)}
                        className="block w-full px-4 py-2 text-sm text-black hover:bg-red-200"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
  
      {/* Edit Modal */}
      {isEditModalOpen && rowToEdit && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">Edit Category</h2>
            <div className="mt-4">
              <label className="block text-sm">Category Name</label>
              <input
                type="text"
                value={rowToEdit.categoryName}
                onChange={(e) => setRowToEdit({ ...rowToEdit, categoryName: e.target.value })}
                className="mt-2 p-2 border rounded-md w-full"
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm">Status</label>
              <input
                type="text"
                value={rowToEdit.status}
                onChange={(e) => setRowToEdit({ ...rowToEdit, status: e.target.value })}
                className="mt-2 p-2 border rounded-md w-full"
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm">Item Count</label>
              <input
                type="number"
                value={rowToEdit.itemCount}
                onChange={(e) => setRowToEdit({ ...rowToEdit, itemCount: parseInt(e.target.value) })}
                className="mt-2 p-2 border rounded-md w-full"
              />
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={() => handleEditSave(rowToEdit)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
  
      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && rowToDelete && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">Are you sure you want to delete this category?</h2>
            <div className="mt-4 flex justify-end space-x-2">
              <button
                onClick={handleDeleteCancel}
                className="bg-gray-500 text-white px-4 py-2 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteConfirm}
                className="bg-red-500 text-white px-4 py-2 rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
  
};

export default DraggableTable;
