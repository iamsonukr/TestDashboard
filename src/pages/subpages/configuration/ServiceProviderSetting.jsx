import React, { useState } from 'react';

const SettingsForm = () => {
  const [formData, setFormData] = useState({
    serviceProviderArea: '',
    serviceProviderPerRequest: '',
    waitTime: '',
    commission: '',
    partialRefundAmount: '',
    otpEnabled: true,
    bookingStatuses: [
      { status: 'Pending', refundType: 'Full', description: '', enabled: true },
      { status: 'Confirmed', refundType: 'Partial', description: '', enabled: true }
    ]
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Toggle OTP validation
  const toggleOTP = () => {
    setFormData({ ...formData, otpEnabled: !formData.otpEnabled });
  };

  // Handle booking status changes
  const handleBookingChange = (index, field, value) => {
    const updatedStatuses = [...formData.bookingStatuses];
    updatedStatuses[index][field] = value;
    setFormData({ ...formData, bookingStatuses: updatedStatuses });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-md">
      
      {/* General Settings */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">General Settings</h2>
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block mb-2">Service Provider Area</label>
            <input
              type="text"
              name="serviceProviderArea"
              value={formData.serviceProviderArea}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="flex-1">
            <label className="block mb-2">Service Provider Per Request</label>
            <input
              type="text"
              name="serviceProviderPerRequest"
              value={formData.serviceProviderPerRequest}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
      </section>

      {/* OTP Validation */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">OTP Validation</h2>
        <div className="flex items-center gap-4">
          <span>OTP For Trip Started</span>
          <button
            type="button"
            onClick={toggleOTP}
            className={`px-4 py-2 rounded ${formData.otpEnabled ? 'bg-green-500' : 'bg-red-500'} text-white`}
          >
            {formData.otpEnabled ? 'On' : 'Off'}
          </button>
        </div>
      </section>

      {/* Cancellation Policy */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Cancellation Policy</h2>
        <label className="block mb-2">Partial Refund Amount (%)</label>
        <input
          type="text"
          name="partialRefundAmount"
          value={formData.partialRefundAmount}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <table className="w-full mt-4 border-collapse border">
          <thead>
            <tr>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Refund Type</th>
              <th className="p-2 border">Description</th>
              <th className="p-2 border">Enabled</th>
            </tr>
          </thead>
          <tbody>
            {formData.bookingStatuses.map((status, index) => (
              <tr key={index} className="border-t">
                <td className="p-2 border">{status.status}</td>
                <td className="p-2 border">{status.refundType}</td>
                <td className="p-2 border">
                  <input
                    type="text"
                    value={status.description}
                    onChange={(e) => handleBookingChange(index, 'description', e.target.value)}
                    className="w-full p-1 border rounded"
                  />
                </td>
                <td className="p-2 border">
                  <button
                    type="button"
                    onClick={() => handleBookingChange(index, 'enabled', !status.enabled)}
                    className={`px-4 py-1 rounded ${status.enabled ? 'bg-green-500' : 'bg-red-500'} text-white`}
                  >
                    {status.enabled ? 'Enable' : 'Disable'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <button type="submit" className="bg-blue-600 text-white w-full py-3 rounded">
        Save Changes
      </button>
    </form>
  );
};

export default SettingsForm;
