import { useState } from "react";
import formConfig from "../constants/formconfigs";
import Layout from "../layouts/Layout";

const DynamicForm = ({ configKey, onBack, onSubmit }) => {
  const config = formConfig[configKey];
  const [formData, setFormData] = useState({});
  const [imagePreviews, setImagePreviews] = useState({});

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      const file = files[0];
      if (file) {
        const previewUrl = URL.createObjectURL(file);
        setImagePreviews((prevPreviews) => ({
          ...prevPreviews,
          [name]: previewUrl,
        }));

        setFormData((prevData) => ({
          ...prevData,
          [name]: file,
        }));
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleToggleChange = (e, name) => {
    const value = e.target.checked;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(config.endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Form submitted successfully", data);
        if (onSubmit) onSubmit();
      } else {
        console.error("Submission failed:", data);
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  const renderImageUpload = (field) => {
    const styles = {
      circle: "rounded-full w-28 h-28",
      square: "w-32 h-32",
      banner: "w-80 h-32 rounded-md",
    };

    return (
      <div className="flex flex-col items-center">
        <label className="cursor-pointer">
          <div
            className={`border border-gray-300 overflow-hidden flex items-center justify-center ${styles[field.variant]}`}
          >
            {imagePreviews[field.name] ? (
              <img
                src={imagePreviews[field.name]}
                alt="Preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-gray-500">Upload</span>
            )}
          </div>
          <input
            type="file"
            name={field.name}
            accept="image/*"
            onChange={handleChange}
            className="hidden"
          />
        </label>
        <p className="text-xs text-gray-500 mt-2">Max. file size: 5MB</p>
      </div>
    );
  };

  const renderToggle = (field) => {
    const { label, options } = field;  // Assuming config contains 'options' for toggle

    return (
      <div className="flex items-center">
        <label className="relative flex items-center w-20 h-11 bg-gray-300 rounded-full">
          <input
            type="checkbox"
            name={field.name}
            checked={formData[field.name] || false}
            onChange={(e) => handleToggleChange(e, field.name)}
            className="hidden"
          />
          <span
            className={`absolute text-[3vw] md:text-[0.8vw] text-white w-1/2 h-full flex items-center justify-center rounded-full transition-transform p-1 ${
              formData[field.name]
                ? "bg-blue-500 translate-x-full"
                : "bg-gray-400 translate-x-0"
            }`}
          >
            {/* Dynamically setting the label based on options */}
            {formData[field.name] ? options.enabled : options.disabled}
          </span>
        </label>
      </div>
    );
  };

  return (
    <Layout>
      <div className="flex justify-center mt-6">
        <div className="w-full max-w-4xl p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">
            Add {configKey.charAt(0).toUpperCase() + configKey.slice(1)}
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {config.fields.map((field) => (
                <div key={field.name} className="flex flex-col">
                  <label className="text-gray-700 font-medium mb-1">
                    {field.label}
                    {field.subLabel && (
                      <span className="block text-sm text-gray-500">
                        {field.subLabel}
                      </span>
                    )}
                  </label>
                  {field.type === "dropdown" ? (
                    <select
                      name={field.name}
                      onChange={handleChange}
                      className="border rounded px-4 py-2"
                      required={field.required}
                    >
                      <option value="">Select {field.label}</option>
                      {field.options.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : field.type === "toggle" ? (
                    renderToggle(field)
                  ) : field.type === "file" ? (
                    renderImageUpload(field)
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      onChange={handleChange}
                      className="border rounded px-4 py-2"
                      required={field.required}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4">
              <button
                type="button"
                onClick={onBack}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
              >
                Back
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default DynamicForm;