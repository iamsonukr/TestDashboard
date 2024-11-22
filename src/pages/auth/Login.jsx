import React from "react";
import { useNavigate } from "react-router-dom"; 
import FormCard from "../auth/component/FormCard"; 
import logo from "/logo.png"; 
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate(); 

  // Handle form submission
  const handleLoginSubmit = async (formData) => {
    console.log("Login Form Data:", formData); 
    try {
      const response = await fakeLoginAPI(formData);
      if (response.status === 200) {
        toast.success("Login successful!"); 
        navigate("/"); 
      }
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
    }
  };

  // Fake API simulation for login
  const fakeLoginAPI = async (data) => {
    console.log("Data sent to API:", data);  
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulating a successful login check with hardcoded credentials
        if (data.email === "test@example.com" && data.password === "password123") {
          resolve({ status: 200 });
        } else {
          reject(new Error("Invalid credentials"));
        }
      }, 1000);
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#2C52A0] to-[#4189C4]">
      <FormCard
        heading="Login"
        fields={["email", "password"]}
        buttonLabel="Login"
        onSubmit={handleLoginSubmit}
        logo={logo}
        formType="login"
      />
    </div>
  );
};

export default Login;
