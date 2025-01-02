import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import { toast } from 'react-toastify';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    agreeToTerms: false,
    role: 'client',
    address: ['']
  });
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const API_BASE_URL = 'https://yarpacom.onrender.com/api/v1';
  // const API_BASE_URL = 'http://192.168.1.14:5911/api/v1';
  // const API_BASE_URL = 'http://localhost:5001/api/v1';

  // Function to update the address array
  const handleAddressChange = (index, value) => {
    const updatedAddresses = [...formData.address];
    updatedAddresses[index] = value;
    setFormData({ ...formData, address: updatedAddresses });
  };

  // To add a new address field
  const addAddressField = () => {
    setFormData({ ...formData, address: [...formData.address, ''] });
  };

  // To remove an address field
  const removeAddressField = (index) => {
    const updatedAddresses = formData.address.filter((_, i) => i !== index);
    setFormData({ ...formData, address: updatedAddresses });
  };


  // sent OTP
  const handleSendOtp = async (e) => {
    e.preventDefault();
    setIsOtpVerified(true)
    if (!formData.phoneNumber) {
      toast.error('Please enter a phone number');
      return;
    }
    toast.success("OTP sent to user")
    setIsLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/otp/sendOtp`, {
        phoneNumber: formData.phoneNumber,
      });

      if (response.data.success) {
        console.log("Response after sending otp", response)
        setIsOtpSent(true);
        toast.success('OTP sent successfully!');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to send OTP. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };


  // verify otp
  const handleVerifyOtp = async (e) => {
    e.preventDefault();

    if (!otp) {
      toast.error('Please enter the OTP');
      return;
    }


    setIsLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/otp/otpVerification`, {
        phoneNumber: formData.phoneNumber,
        otp,
      });
      console.log("OTP sent for verification")


      if (response.data.success) {
        console.log("Respponse after verifying otp", response)
        setIsOtpVerified(true);
        toast.success('Phone number verified successfully!');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Invalid OTP. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // register the user
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isOtpVerified) {
      toast.error('Please verify your phone number first');
      return;
    }

    if (!formData.agreeToTerms) {
      toast.error('Please agree to the terms and conditions');
      return;
    }

    if (!formData.fullName || !formData.email || !formData.password) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsLoading(true);
    console.log("Sending user data")
    const phoneNumber = `+91 8210490833`
    const otp = '7541'
    try {
      const response = await axios.post(`${API_BASE_URL}/users/verify`, { ...formData, phoneNumber, otp });
      // const response = await axios.post(`localhost:5001/api/v1/users/register`, formData);

      console.log("Response after registereing the user", response)

      if (response.data.success) {
        toast.success('Registration successful!');
        // Add navigation to login page or other post-registration logic here
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
            {/* Left Panel */}
            <div className="w-full md:w-1/2">
              <div className="relative h-[300px] md:h-full rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/70 z-10" />
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: 'url("./cleaner.jpg")',
                  }}
                />
                <div className="relative z-20 p-6 md:p-12 h-full flex flex-col justify-between">
                  <div>
                    <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">
                      Welcome to Yarpacom Cleaning Business
                    </h1>
                    <p className="text-gray-200 mb-8">
                      We're your trusted Cleaning Service partner. <br />
                      We're thrilled to see you again! Easily access your <b>Bookings, Services,</b> and <b>Personalized Recommendations</b>.
                      <br />
                      Let's keep your spaces sparkling clean together!
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-200">Already have an account?</p>
                    <button className="text-white hover:underline mt-2">Sign In</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel - Registration Form */}
            <div className="w-full md:w-1/2">
              <div className="max-w-md mx-auto">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Sign Up</h2>
                <p className="text-gray-600 mb-8">Sign Up to try our amazing services</p>

                {/* Phone Verification Form */}
                {!isOtpVerified && (
                  <form onSubmit={isOtpSent ? handleVerifyOtp : handleSendOtp} className="space-y-6">
                    <div>
                      <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <div className="flex gap-2">
                        <input
                          id="phoneNumber"
                          type="tel"
                          value={formData.phoneNumber}
                          onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                          className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                          placeholder="Enter your phone number"
                          disabled={isOtpSent}
                        />
                        {!isOtpSent && (
                          <button
                            type="submit"
                            disabled={isLoading}
                            className="whitespace-nowrap bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                          >
                            {isLoading ? 'Sending...' : 'Send OTP'}
                          </button>
                        )}
                      </div>
                    </div>

                    {isOtpSent && (
                      <div>
                        <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-2">
                          Enter OTP
                        </label>
                        <div className="flex gap-2">
                          <input
                            id="otp"
                            type="text"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                            placeholder="Enter the OTP"
                          />
                          <button
                            type="submit"
                            disabled={isLoading}
                            className="whitespace-nowrap bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
                          >
                            {isLoading ? 'Verifying...' : 'Verify OTP'}
                          </button>
                        </div>
                      </div>
                    )}
                  </form>
                )}

                {/* Registration Form */}
                {isOtpVerified && (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                        Password
                      </label>
                      <input
                        id="password"
                        type="password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Enter Password"
                      />
                    </div>
                    <div>
                      {formData.address.map((address, index) => (
                        <div key={index}>
                          <label htmlFor={`address-${index}`}>Address {index + 1}</label>
                          <input
                            id={`address-${index}`}
                            type="text"
                            value={address}
                            onChange={(e) => handleAddressChange(index, e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                          />
                          <button type="button" onClick={() => removeAddressField(index)} className="text-red-500 ml-2">Remove</button>
                        </div>
                      ))}
                      <button type="button" onClick={addAddressField} className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-2">
                        Add Address
                      </button>
                    </div>

                    <div className="flex items-start gap-2">
                      <input
                        id="terms"
                        type="checkbox"
                        checked={formData.agreeToTerms}
                        onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                        className="mt-1 h-4 w-4 text-emerald-500 border-gray-300 rounded"
                      />
                      <label htmlFor="terms" className="text-sm text-gray-600">
                        I agree with Terms of Service, Terms Of Payments and Privacy Policy
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-[#2C52A0] text-white py-3 rounded-lg hover:bg-[#234180] transition-colors disabled:opacity-50"
                    >
                      {isLoading ? 'Registering...' : 'Register'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RegisterPage;