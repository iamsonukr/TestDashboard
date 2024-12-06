import { useState } from "react";

function CleanerRegister() {
  const [formData, setFormData] = useState({
    type: "",
    name: "",
    email: "",
    mobileNumber: "",
    address: "",
    country: "",
    city: "",
    state: "",
    zipCode: "",
    password: "",
    confirmPassword: "",
    ProfileImage: null,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, licenseImage: file }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <div className="h-full">
        <main className="container mx-auto py-8 px-4">
          <h1 className="text-2xl font-bold text-center mb-8">Register as a Cleaner</h1>
          <div className="bg-white shadow-md rounded-lg max-w-4xl mx-auto">
            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Business Details */}
                <div>
                  <h2 className="text-xl font-semibold mb-4">Form</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Service Type */}
                    <div>
                      <label htmlFor="type" className="block text-sm font-medium text-gray-700">Service Type</label>
                      <select
                        id="type"
                        name="type"
                        className="block w-full py-2 px-3 border rounded-md"
                        onChange={handleInputChange}
                        value={formData.type}
                      >
                        <option value="">Select Type</option>
                        <option value="restaurant">House Cleaning</option>
                        <option value="cafe">Basic Cleaning</option>
                        <option value="bakery">Deep Cleaning</option>
                      </select>
                    </div>

                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="block w-full py-2 px-3 border rounded-md"
                        placeholder="Name"
                        onChange={handleInputChange}
                        value={formData.name}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="block w-full py-2 px-3 border rounded-md"
                        placeholder="Email"
                        onChange={handleInputChange}
                        value={formData.email}
                      />
                    </div>

                    {/* Mobile Number */}
                    <div>
                      <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700">Mobile Number</label>
                      <input
                        type="tel"
                        id="mobileNumber"
                        name="mobileNumber"
                        className="block w-full py-2 px-3 border rounded-md"
                        placeholder="Mobile Number"
                        onChange={handleInputChange}
                        value={formData.mobileNumber}
                      />
                    </div>

                    {/* Address */}
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                      <textarea
                        id="address"
                        name="address"
                        rows={3}
                        className="block w-full py-2 px-3 border rounded-md"
                        placeholder="Business Address"
                        onChange={handleInputChange}
                        value={formData.address}
                      />
                    </div>

                    {/* City */}
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        className="block w-full py-2 px-3 border rounded-md"
                        placeholder="City"
                        onChange={handleInputChange}
                        value={formData.city}
                      />
                    </div>

                    {/* State */}
                    <div>
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        className="block w-full py-2 px-3 border rounded-md"
                        placeholder="State"
                        onChange={handleInputChange}
                        value={formData.state}
                      />
                    </div>

                    {/* Zip Code */}
                    <div>
                      <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">Zip Code</label>
                      <input
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        className="block w-full py-2 px-3 border rounded-md"
                        placeholder="Zip Code"
                        onChange={handleInputChange}
                        value={formData.zipCode}
                      />
                    </div>

                    {/* Password */}
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="block w-full py-2 px-3 border rounded-md"
                        placeholder="Password"
                        onChange={handleInputChange}
                        value={formData.password}
                      />
                    </div>

                    {/* Confirm Password */}
                    <div>
                      <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                      <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        className="block w-full py-2 px-3 border rounded-md"
                        placeholder="Confirm Password"
                        onChange={handleInputChange}
                        value={formData.confirmPassword}
                      />
                    </div>

                    {/* Profile Image */}
                    <div>
                      <label htmlFor="licenseImage" className="block text-sm font-medium text-gray-700">Profile Image</label>
                      <input
                        type="file"
                        id="profileImage"
                        name="profileImage"
                        className="block w-full py-2 px-3 border rounded-md"
                        onChange={handleFileChange}
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="block w-full px-4 py-2 bg-indigo-600 text-white rounded-md"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default CleanerRegister;
