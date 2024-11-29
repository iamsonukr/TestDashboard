import { useState, useEffect } from "react";
import Modal from "../components/Modal";
import Layout from "../layouts/Layout";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; 

const Profile = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        avatar: "",
        code: "",
    });
    const [avatarPreview, setAvatarPreview] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalAction, setModalAction] = useState(null); 
    const navigate = useNavigate();

    // Mocking initial data fetch for profile
    useEffect(() => {
        setFormData({
            name: "John Doe",
            phone: "1234567890", 
            code: "+55",
            email: "john.doe@example.com",
            avatar: "", 
        });
    }, []);

    const handleFieldChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                toast.error("File size exceeds 5MB.");
                return;
            }

            const reader = new FileReader();
            reader.onloadend = () => {
                setAvatarPreview(reader.result);
                setFormData({ ...formData, avatar: file });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = () => {
        toast.success("Profile updated successfully!");
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
                <h1 className="text-2xl font-bold mb-4">Edit Profile</h1>

                <form className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:space-x-4 w-full">
                        <div className="flex flex-col w-full">
                            <label htmlFor="name" className="font-semibold text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={(e) => handleFieldChange("name", e.target.value)}
                                className="w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>

                        <div className="flex flex-col w-full">
                            <label htmlFor="phone" className="font-semibold text-gray-700">Phone Number</label>
                            <div className="flex space-x-2 flex-row">
                                <PhoneInput
                                    country={formData.code || ""}
                                    value={formData.code}
                                    onChange={(value) => handleFieldChange("code", value)}
                                    inputClass="w-[10%]"
                                    className='w-[0%]'
                                    specialLabel={false}
                                />
                                <input
                                    type="text"
                                    id="phone"
                                    value={formData.phone}
                                    onChange={(e) => handleFieldChange("phone", e.target.value)}
                                    className="w-[90%] border border-gray-300 rounded-md p-2"
                                    placeholder="Phone number"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Email Field */}
                    <div className="flex flex-col">
                        <label htmlFor="email" className="font-semibold text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={(e) => handleFieldChange("email", e.target.value)}
                            className="w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>

                    {/* Avatar Image Upload */}
                    <div className="flex flex-col sm:flex-row sm:space-x-4">
                        <div className="flex flex-col items-center sm:w-1/4">
                            <label className="font-semibold text-gray-700">Profile Avatar</label>
                            <div
                                className="w-24 h-24 rounded-full bg-gray-200 cursor-pointer flex items-center justify-center"
                                onClick={() => document.getElementById("avatar-upload").click()}
                            >
                                {avatarPreview || formData.avatar ? (
                                    <img
                                        src={avatarPreview || formData.avatar || "https://www.w3schools.com/w3images/avatar2.png"}
                                        alt="Avatar Preview"
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                ) : (
                                    <img
                                        src="https://www.w3schools.com/w3images/avatar2.png"
                                        alt="Current Avatar"
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                )}
                            </div>
                            <input
                                type="file"
                                id="avatar-upload"
                                accept="image/*"
                                className="hidden"
                                onChange={handleAvatarChange}
                            />
                            <div className="mt-2 text-sm text-gray-500">
                                <p>Max. upload file size: 5MB</p>
                                <p
                                    className="text-blue-500 cursor-pointer"
                                    onClick={() => avatarPreview && window.open(avatarPreview, "_blank")}
                                >
                                    Preview
                                </p>
                            </div>
                        </div>
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
                </form>

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

export default Profile;
