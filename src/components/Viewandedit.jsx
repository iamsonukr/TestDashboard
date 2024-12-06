import React from "react";
import { useLocation } from "react-router-dom";
import Layout from "../layouts/Layout";

const UserProfile = () => {
  const location = useLocation();

  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 p-6">
        {/* Header Section */}
        <div className="bg-white shadow rounded-lg p-6 flex items-center space-x-6">
          {/* Profile Image */}
          <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
            <img src="https://via.placeholder.com/150" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Aman Yadav</h2>
            <p className="text-gray-500">Member Since: 22 May 2024</p>
            <div className="mt-2 flex items-center">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Active</span>
              <span className="ml-4 text-yellow-500">★ 0/5</span>
            </div>
          </div>
          <button className="ml-auto bg-red-500 text-white px-4 py-2 rounded-lg">Block</button>
        </div>

        {/* Statistics Section */}
        <div className="bg-white shadow rounded-lg p-6 mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <p className="text-gray-500">Completed Orders</p>
            <p className="text-xl font-semibold text-green-500">0</p>
          </div>
          <div className="text-center">
            <p className="text-gray-500">Total Spent</p>
            <p className="text-xl font-semibold text-green-500">$0.00</p>
          </div>
          <div className="text-center">
            <p className="text-gray-500">Average Order Value</p>
            <p className="text-xl font-semibold text-green-500">$0.00</p>
          </div>
        </div>

        {/* Profile Details Section */}
        <div className="mt-6 w-[40vw] grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personal Information Section (Narrowed Width) */}
          <div className="bg-white shadow rounded-lg p-6 ">
            <h3 className="text-lg font-medium mb-4">Personal Information</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <strong>Full Name:</strong> Aman Yadav
              </li>
              <li>
                <strong>Mobile Number:</strong>  1234567890
              </li>
              <li>
                <strong>Email:</strong> asd@gmail.com
              </li>
              <li>
                <strong>Wallet Amount:</strong> $0
              </li>
            </ul>
            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg">Edit</button>
          </div>

          {/* Orders Section */}
          <div className="bg-white shadow rounded-lg p-6 w-[50vw] ">
            <h3 className="text-lg font-medium mb-4">My Orders</h3>
            <table className="min-w-full table-auto text-sm">
              <thead>
                <tr className="text-left text-gray-500">
                  <th className="py-2 px-4">Booking ID</th>
                  <th className="py-2 px-4">Cost</th>
                  <th className="py-2 px-4">Status</th>
                  <th className="py-2 px-4">Created At</th>
                  <th className="py-2 px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4">936243</td>
                  <td className="py-2 px-4">$2200</td>
                  <td className="py-2 px-4 text-red-500">Cancelled</td>
                  <td className="py-2 px-4">07 Aug 2024, 7:02 PM</td>
                  <td className="py-2 px-4">
                    <button className="text-blue-500">View</button>
                  </td>
                </tr>
              </tbody>
            </table>
            {/* Reviews Section */}
            <div className="mt-6">
              <h3 className="text-lg font-medium mb-4">Reviews</h3>
              <table className="min-w-full table-auto text-sm">
                <thead>
                  <tr className="text-left text-gray-500">
                    <th className="py-2 px-4">Order ID</th>
                    <th className="py-2 px-4">Review By</th>
                    <th className="py-2 px-4">Rating</th>
                    <th className="py-2 px-4">Review</th>
                    <th className="py-2 px-4">Created At</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="5" className="py-2 px-4 text-center text-gray-500">
                      No Reviews Found
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Address Section */}
        <div className="bg-white shadow rounded-lg p-6 mt-6">
          <h3 className="text-lg font-medium mb-4">Addresses</h3>
          <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
            <div>
              <p>Home</p>
              <p className="text-gray-500">
                8-A, Industrial Area, Sector 75, Sahibzada Ajit Singh Nagar, Punjab 160005
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-blue-500">Edit</button>
              <button className="text-red-500">Delete</button>
            </div>
          </div>
          <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg">Add Address</button>
        </div>
      </div>
    </Layout>
  );
};

export default UserProfile;
