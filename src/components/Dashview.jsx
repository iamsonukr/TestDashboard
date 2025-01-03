import React from 'react';
import Layout from "../layouts/Layout";
import { FaMoneyBillWave, FaUserFriends, FaClipboardList, FaHandHoldingUsd } from "react-icons/fa";
import DashCard from "../pagecomponents/dashboardcomponents/dashCard";

const BookingCard = () => {
 const cardData = [
    { name: "Revenue", number: "$35,420", Icon: FaMoneyBillWave },
    { name: "Service Providers", number: "87", Icon: FaHandHoldingUsd },
  ];
    return (
        <Layout>

            <div className="p-6 bg-gray-50 min-h-screen flex justify-center items-center">
                <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6 grid gap-6 grid-cols-2">
                    {/* Left Section */}
                    <div>
                        <div className="text-sm text-gray-500">
                            <p>Booking Id</p>
                            <h3 className="text-lg font-medium">153518</h3>
                        </div>
                        <div className="mt-2 text-sm text-gray-500">
                            <p>Created At</p>
                            <h3 className="text-lg font-medium">01 Jan 2025, 6:12 PM</h3>
                        </div>
                        <div className="mt-2">
                            <p className="text-sm text-gray-500">Status</p>
                            <span className="inline-block px-3 py-1 text-sm text-white bg-green-500 rounded-full">
                                Completed
                            </span>
                        </div>
                        <div className="mt-2 text-sm text-gray-500">
                            <p>Booking Amount</p>
                            <h3 className="text-lg font-medium text-green-600">$2</h3>
                        </div>
                        <div className="mt-4">
                            <p className="text-sm text-gray-500">Payment Method</p>
                            <h3 className="text-lg font-medium">Cash On Delivery</h3>
                        </div>
                        <div className="mt-4">
                            <button className="bg-green-500 hover:bg-green-600 text-white text-sm py-2 px-4 rounded-lg">
                                Change Booking Status
                            </button>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div>
                            {/* Map through card data to render DashCards */}
                            {cardData.map((card, index) => (
                                <DashCard
                                    key={index}
                                    name={card.name}
                                    number={card.number}
                                    Icon={card.Icon}
                                />
                            ))}

                       
                    </div>

                    {/* Services and Bill */}
                    <div className="mt-6 grid grid-cols-2 gap-4">
                        {/* Services */}
                        <div>
                            <h3 className="text-lg font-medium mb-2">Services</h3>
                            <p className="text-sm flex justify-between">
                                Electional Astrologers <span>$2 x 1</span>
                            </p>
                        </div>

                        {/* Bill */}
                        <div>
                            <h3 className="text-lg font-medium mb-2">Bill</h3>
                            <ul className="text-sm">
                                <li className="flex justify-between">
                                    <span>Service Total</span> <span>$2</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Tax and Fees 0%</span> <span>$0</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Service Amount</span> <span>$2</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    </Layout >

  );
};

export default BookingCard;
