import { useState } from "react";
import Layout from "../../../layouts/Layout";

const ServiceProviderSettings = () => {
  // State for form inputs
  const [settings, setSettings] = useState({
    area: 19999990,
    perRequest: 5,
    waitTime: 5,
    commission: 90,
    partialRefund: 50,
    bookingDescriptions: {
      pending: "",
      confirmed: "",
    },
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: value,
    }));
  };

  // Handle description changes in the table
  const handleDescriptionChange = (status, value) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      bookingDescriptions: {
        ...prevSettings.bookingDescriptions,
        [status]: value,
      },
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Settings Saved:", settings);
    alert("Settings have been saved successfully!");
    // Here, you can send the settings to the backend or update the app state.
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-md">

        {/* General Settings */}
        <section className="mb-8">
          <div className="flex justify-between ">
            <h2 className="text-xl font-semibold mb-4">General Settings</h2>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block mb-2 text-gray-700">Service Provider Area</label>
                <div className="flex items-center gap-1 border-2 border-black rounded-md p-1">
                  <input
                    type="number"
                    name="area"
                    value={settings.area}
                    onChange={handleChange}
                    className="w-full p-1 text-black text-center outline-none"

                  />
                  <span className="text-black border-l-2 border-black">Miles</span>
                </div>
              </div>
              <div className="flex-1">
                <label className="block mb-2 text-gray-700">Service Provider Per Request</label>
                <div className="flex items-center gap-1 border-2  border-black rounded-md p-1">

                <input
                  type="number"
                  name="perRequest"
                  value={settings.perRequest}
                  onChange={handleChange}
                  className="w-full p-1 text-black text-center outline-none"
                  />
              </div>
              </div>

            </div>
          </div>
          <div className="w-[15vw]"><h1> <span className="font-semibold">Service Provider Per Request</span> No. of Service Provider you wants to be requested on an booking,to manage the booking queue</h1></div>
        </section>

        {/* Waiting Time */}
        <section className="mb-8 flex gap-32">
            <h2 className="text-xl font-semibold mb-4">Waiting Time</h2>
            <div className="flex gap-4">
              <div className="">
                <label className="block mb-2 text-gray-700">Service Provider Wait Time</label>
                <div className="flex items-center gap-1 border-2 border-black rounded-md p-2">
                  <input
                    type="number"
                    name="waitTime"
                    value={settings.waitTime}
                    onChange={handleChange}
                    className="w-full p-1 text-black text-center outline-none"
                  />
                  <span className="text-black border-l-2 border-black">Minutes</span>
                </div>

              </div>
            </div>
        </section>

        {/* Commission */}
        <section className="mb-8 flex gap-32">

          <h2 className="text-xl font-semibold mb-4">Commission</h2>
          <div className="w-[10vw]">

            <label className="block mb-2 text-gray-700">Service Provider</label>
            
              <div className="flex items-center gap-1 border-2 border-black rounded-md p-2">
                  <input
                    type="number"
                    name="commission"
                    value={settings.commission}
                    onChange={handleChange}
                    className="w-full p-1 text-black text-center outline-none"
                  />
                  <span className="text-black border-l-2 border-black">%</span>
                </div>
                <h1>10% Admin Commission</h1>
          </div>

        </section>

        {/* Cancellation Policy */}
        <section className="mb-8 flex gap-32">
          <div>
          <h2 className="text-xl font-semibold mb-4">Cancellation Policy</h2>
          <h1>You can refund the full payment or partial or No Refund, so you need to define to partial amount %, It will be deducted accordingly from ServiceProvider & Admin on the basis of current Booking status</h1>
          </div>
          <div className="w-1/2 mb-4">
            <label className="block mb-2 text-gray-700">Partial Refund Amount (%)</label>
            <div className="flex items-center gap-1 border-2 border-black rounded-md p-2">
                  <input
                    type="number"
                    name="commission"
                    value={settings.commission}
                    onChange={handleChange}
                    className="w-full p-1 text-black text-center outline-none"
                  />
                  <span className="text-black border-l-2 border-black">%</span>
                </div>
                <h1>You can refund the full payment or partial or No Refund, so you need to define to partial amount %, It will be deducted accordingly from ServiceProvider & Admin on the basis of current Booking status</h1>

          <table className="w-full border border-gray-300 text-center">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2">Booking Status</th>
                <th className="p-2">Refund Type</th>
                <th className="p-2">Description</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-300">
                <td className="p-2">Pending</td>
                <td className="p-2">Full</td>
                <td className="p-2">
                  <input
                    type="text"
                    value={settings.bookingDescriptions.pending}
                    onChange={(e) => handleDescriptionChange("pending", e.target.value)}
                    placeholder="Description"
                    className="w-full p-1 border border-gray-300 rounded-md"
                  />
                </td>
                <td className="p-2">
                  <button type="button" className="bg-green-500 text-white px-4 py-1 rounded-md">
                    Enable
                  </button>
                </td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="p-2">Confirmed</td>
                <td className="p-2">Partial</td>
                <td className="p-2">
                  <input
                    type="text"
                    value={settings.bookingDescriptions.confirmed}
                    onChange={(e) => handleDescriptionChange("confirmed", e.target.value)}
                    placeholder="Description"
                    className="w-full p-1 border border-gray-300 rounded-md"
                  />
                </td>
                <td className="p-2">
                  <button type="button" className="bg-green-500 text-white px-4 py-1 rounded-md">
                    Enable
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          </div>

        </section>

        {/* Save Button */}
        <button
          type="submit"
          className="bg-green-600 text-white w-full py-3 rounded-md hover:bg-green-700 transition"
        >
          Save Changes
        </button>
      </form>
    </Layout>
  );
};

export default ServiceProviderSettings;
