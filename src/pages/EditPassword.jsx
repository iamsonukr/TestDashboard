import { useState } from "react";
import Layout from "../layouts/Layout";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal"; // Importing the Modal component

const PasswordChange = () => {
    const [formData, setFormData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalAction, setModalAction] = useState(null); 
    const navigate = useNavigate();

    const handleFieldChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleSubmit = () => {
        if (formData.newPassword !== formData.confirmPassword) {
            toast.error("Passwords do not match.");
            return;
        }

        toast.success("Password updated successfully!");
        setIsModalOpen(false);
    };

    const handleBack = () => {
        setIsModalOpen(false);
        navigate("/");
    };

    const openModal = (action) => {
        setModalAction(action);
        setIsModalOpen(true);
    };

    return (
        <Layout>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold mb-4">Change Password</h1>

                <div className="space-y-4">
                    {/* Current Password */}
                    <div className="flex flex-col">
                        <label htmlFor="currentPassword" className="font-semibold text-gray-700">Current Password</label>
                        <input
                            type="password"
                            id="currentPassword"
                            value={formData.currentPassword}
                            onChange={(e) => handleFieldChange("currentPassword", e.target.value)}
                            className="w-full border border-gray-300 rounded-md p-2"
                            placeholder="Enter current password"
                        />
                    </div>

                    {/* New Password */}
                    <div className="flex flex-col">
                        <label htmlFor="newPassword" className="font-semibold text-gray-700">New Password</label>
                        <input
                            type="password"
                            id="newPassword"
                            value={formData.newPassword}
                            onChange={(e) => handleFieldChange("newPassword", e.target.value)}
                            className="w-full border border-gray-300 rounded-md p-2"
                            placeholder="Enter new password"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div className="flex flex-col">
                        <label htmlFor="confirmPassword" className="font-semibold text-gray-700">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={(e) => handleFieldChange("confirmPassword", e.target.value)}
                            className="w-full border border-gray-300 rounded-md p-2"
                            placeholder="Confirm new password"
                        />
                    </div>

                    {/* Submit and Back Buttons (in the same row on larger screens) */}
                    <div className="flex space-x-4 mt-4">
                        <button
                            type="button"
                            onClick={() => openModal("submit")}
                            className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
                        >
                            Submit
                        </button>
                        <button
                            type="button"
                            onClick={() => openModal("back")}
                            className="w-full sm:w-auto bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-md"
                        >
                            Back
                        </button>
                    </div>
                </div>

                {/* Reusable Modal */}
                {isModalOpen && (
                    <Modal
                        action={modalAction}
                        onConfirm={modalAction === "submit" ? handleSubmit : handleBack}
                        onCancel={() => setIsModalOpen(false)}
                    />
                )}
            </div>
        </Layout>
    );
};

export default PasswordChange;
