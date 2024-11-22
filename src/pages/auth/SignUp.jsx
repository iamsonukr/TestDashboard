import React from "react";
import FormCard from "../auth/component/FormCard";
import logo from "/logo.png"; // Replace with your logo file
import { toast } from "react-toastify";

const Signup = () => {
  const handleSignupSubmit = async (formData) => {
    console.log("Signup Form Data:", formData);
    // Simulating an API call
    try {
      const response = await fakeSignupAPI(formData);
      if (response.status === 200) {
        toast.success("Signup successful!");
      }
    } catch (error) {
      toast.error("Signup failed. Please try again.");
    }
  };

  const fakeSignupAPI = async (data) => {
    // Simulating an API request
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data.email && data.password && data.confirmPassword && data.password === data.confirmPassword) {
          resolve({ status: 200 });
        } else {
          reject(new Error("Invalid signup data"));
        }
      }, 1000);
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#2C52A0] to-[#4189C4]">
      <FormCard
        heading="Sign Up"
        fields={["fullName", "email", "username", "password", "confirmPassword"]}
        buttonLabel="Sign Up"
        onSubmit={handleSignupSubmit}
        logo={logo}
        formType="signup"
      />
    </div>
  );
};

export default Signup;
