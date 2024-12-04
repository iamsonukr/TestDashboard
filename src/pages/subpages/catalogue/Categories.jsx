import Layout from "../../../layouts/Layout";
import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
const CategoryManager = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: "Mechanical", status: "Active", image: null },
    { id: 2, name: "Lawyer", status: "Active", image: null },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editMode, setEditMode] = useState(false); // To track if editing
  const [currentCategoryId, setCurrentCategoryId] = useState(null); // Track selected category for editing

  const [newCategory, setNewCategory] = useState({
    name: "",
    description: "",
    status: "Active",
    image: null,
  });

  const [previewImage, setPreviewImage] = useState(null); // For image preview

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewCategory({ ...newCategory, image: file });
      setPreviewImage(URL.createObjectURL(file)); // Show preview
    }
  };

  const addOrUpdateCategory = (e) => {
    e.preventDefault();
    if (editMode) {
      // Update existing category
      setCategories(
        categories.map((cat) =>
          cat.id === currentCategoryId ? { ...newCategory, id: currentCategoryId } : cat
        )
      );
    } else {
      // Add new category
      setCategories([...categories, { ...newCategory, id: categories.length + 1 }]);
    }
    // Reset states
    setShowForm(false);
    setEditMode(false);
    setNewCategory({ name: "", description: "", status: "Active", image: null });
    setPreviewImage(null);
  };

  const handleEdit = (category) => {
    setNewCategory({ ...category }); // Pre-fill form with existing data
    setCurrentCategoryId(category.id);
    setEditMode(true);
    setShowForm(true);
    if (category.image) {
      setPreviewImage(URL.createObjectURL(category.image));
    }
  };

  const handleDelete = (id) => {
    setCategories(categories.filter((category) => category.id !== id));
  };

  return (
    <Layout>
      <div className="p-6 bg-gray-50 rounded-md">
        <h1 className="text-2xl font-semibold mb-4">Categories</h1>
        <button
          onClick={() => {
            setShowForm(true);
            setEditMode(false);
            setNewCategory({ name: "", description: "", status: "Active", image: null });
            setPreviewImage(null);
          }}
          className="border-blue-600 border-2 text-[1vw] text-black px-2 rounded-md hover:text-white hover:bg-gradient-to-r from-[#2C52A0] to-[#4189C4]"
        >
          + Add New Category
        </button>

        {/* Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
              <h2 className="text-xl font-semibold mb-4">
                {editMode ? "Edit Category" : "Add New Category"}
              </h2>
              <form onSubmit={addOrUpdateCategory}>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-gray-700">Name *</label>
                    <input
                      type="text"
                      required
                      value={newCategory.name}
                      onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
                      className="w-full border-black border-2 rounded px-3 py-2 mt-1 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">Status</label>
                    <select
                      value={newCategory.status}
                      onChange={(e) => setNewCategory({ ...newCategory, status: e.target.value })}
                      className="w-full border-black border-2 rounded px-3 py-2 mt-1"
                    >
                      <option>Active</option>
                      <option>Inactive</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700">Description</label>
                    <textarea
                      value={newCategory.description}
                      onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })}
                      className="w-full border-black border-2 rounded px-3 py-2 mt-1"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">Upload Profile Picture</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="w-full border-black border-2 rounded px-3 py-2 mt-1"
                    />
                    {previewImage && (
                      <img src={previewImage} alt="Preview" className="mt-2 w-32 h-32 object-cover rounded-md" />
                    )}
                  </div>
                </div>
                <div className="flex justify-end mt-4">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="mr-2 bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                    {editMode ? "Update" : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Category List */}
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.id} className="flex justify-between items-center bg-white shadow-md p-4 rounded-md">
              <div className="flex items-center space-x-4">
                {category.image && (
                  <img
                    src={URL.createObjectURL(category.image)}
                    alt={category.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                )}
                <span className="font-medium text-lg">{category.name}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded-full">
                   {category.status}
                </span>
                 <span className="ml-4 text-gray-500">Items: 0</span>
                  <button
                    onClick={() => handleEdit(category)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  >
                      <FiEdit />

                  </button>
                  <button
                    onClick={() => handleDelete(category.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                      <MdDelete />
                      </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default CategoryManager;









