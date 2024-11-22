import { useState, useEffect, useRef } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const FormCard = ({ heading, fields, buttonLabel, onSubmit, logo, formType }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [suggestedUsernames, setSuggestedUsernames] = useState([]);
  const [usernameField, setUsernameField] = useState("");
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [passwordMatchError, setPasswordMatchError] = useState("");

  const formRef = useRef(null);

  // Handle form input changes
  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  // Generate unique username suggestions
  const generateUniqueUsername = () => {
    const username = `user${Math.floor(Math.random() * 100000)}`;
    return username;
  };

  const handleUsernameFocus = () => {
    setIsUsernameFocused(true);
    setSuggestedUsernames((prev) => {
      // Generate 5 unique usernames
      const newSuggestions = new Set();
      while (newSuggestions.size < 5) {
        newSuggestions.add(generateUniqueUsername());
      }
      return Array.from(newSuggestions);
    });
  };

  const handleUsernameSelect = (username) => {
    setFormData({ ...formData, username });
    setUsernameField(username);
    setSuggestedUsernames([]); // Hide suggestions after selection
  };

  const handleClickOutside = (e) => {
    if (formRef.current && !formRef.current.contains(e.target)) {
      setSuggestedUsernames([]); // Close suggestions when clicked outside
    }
  };

  // Listen for outside clicks to close the username suggestions
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setPasswordMatchError("Passwords do not match.");
      return;
    }

    setPasswordMatchError(""); // Clear error message
    onSubmit(formData);
    if (formType === "signup") {
      toast.success("Signup successful!");
      navigate("/login");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-10 w-auto relative max-h-[90vh] overflow-hidden m-4">
      {/* Logo and Heading */}
      <div className="flex flex-col items-center mb-6">
        {logo && <img src={logo} alt="Logo" className="h-16 mb-4" />}
        {heading && (
          <h1 className="text-2xl font-bold text-gray-800">{heading}</h1>
        )}
      </div>

      {/* Form Section */}
      <form
        onSubmit={handleSubmit}
        ref={formRef}
        className="space-y-4 max-h-[60vh] overflow-y-auto scrollbar-hide px-2"
      >
        {/* Conditionally Render Fields */}
        {fields?.includes("fullName") && (
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName || ""}
              onChange={(e) => handleChange("fullName", e.target.value)}
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}

        {fields?.includes("email") && (
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email || ""}
              onChange={(e) => handleChange("email", e.target.value)}
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}

        {fields?.includes("phone") && (
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700">Phone Number</label>
            <PhoneInput
              country={"us"}
              value={formData.phone || ""}
              onChange={(value) => handleChange("phone", value)}
              inputClass="!w-full !border-gray-300 !rounded-md"
              dropdownClass="custom-dropdown"
            />
          </div>
        )}

        {fields?.includes("address") && (
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address || ""}
              onChange={(e) => handleChange("address", e.target.value)}
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}

        {fields?.includes("username") && (
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700">Username</label>
            <div className="relative">
              <input
                type="text"
                name="username"
                value={usernameField || ""}
                onFocus={handleUsernameFocus}
                onChange={(e) => {
                  setUsernameField(e.target.value);
                  handleChange("username", e.target.value);
                }}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {/* Username Suggestions */}
              {isUsernameFocused && suggestedUsernames.length > 0 && (
                <ul className="absolute w-full mt-1 bg-white border border-gray-300 shadow-lg z-10">
                  {suggestedUsernames.map((username, index) => (
                    <li
                      key={index}
                      onClick={() => handleUsernameSelect(username)}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {username}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}

        {(formType === "signup" || formType === "login") && fields?.includes("password") && (
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700">Password</label>
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                value={formData.password || ""}
                onChange={(e) => handleChange("password", e.target.value)}
                required
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div
                className="absolute right-2 top-2 cursor-pointer"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? <EyeSlashIcon className="h-5 w-5 text-gray-600" /> : <EyeIcon className="h-5 w-5 text-gray-600" />}
              </div>
            </div>
          </div>
        )}

        {formType === "signup" && fields?.includes("confirmPassword") && (
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700">Confirm Password</label>
            <div className="relative">
              <input
                type={confirmPasswordVisible ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword || ""}
                onChange={(e) => handleChange("confirmPassword", e.target.value)}
                required
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div
                className="absolute right-2 top-2 cursor-pointer"
                onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
              >
                {confirmPasswordVisible ? <EyeSlashIcon className="h-5 w-5 text-gray-600" /> : <EyeIcon className="h-5 w-5 text-gray-600" />}
              </div>
            </div>
            {passwordMatchError && <p className="text-red-600 text-sm">{passwordMatchError}</p>}
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md"
        >
          {buttonLabel || (formType === "signup" ? "Sign Up" : "Log In")}
        </button>
      </form>
    </div>
  );
};

export default FormCard;
