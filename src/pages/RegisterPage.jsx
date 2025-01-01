import React, { useState } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    agreeToTerms: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
  };

  return (
    <>
      <Navbar />
      <div className="h-[100vh] flex items-center justify-center pt-4 pb-10 mb-12">
        <div className="w-full h-full flex flex-col md:flex-row">
          {/* Left Panel remains unchanged */}
          <div className="md:flex md:w-1/2 relative">
            <div className='md:m-10 m-6 bg-gray-800 p-12 flex flex-col items-start justify-between rounded-[10%]'>
              <div className="z-10">
                <h1 className="text-white text-4xl font-bold mb-4">Welcome to Yarpacom Cleaning Business.</h1>
                <p className="text-gray-200 mb-8">
                  We're your trusted Cleaning Service partner. <br />
                  We're thrilled to see you again! Easily access your <b>Bookings, Services,</b> and <b>Personalized Recommendations</b>
                  <br />
                  Let's keep your spaces sparkling clean together!
                </p>
              </div>
              <div className="z-10">
                <p className="text-gray-200">Already have an account?</p>
                <button className="text-white hover:underline mt-2">Sign In</button>
              </div>
            </div>
            <div className="absolute inset-0 opacity-60 rounded-[10%]"
              style={{
                backgroundImage: 'url("./cleaner.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }} />
          </div>

          {/* Right Panel - Registration Form */}
          <div className="w-full md:w-1/2  md:p-12  block ">
            <div className="max-w-md mx mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Sign Up</h2>
              <p className="text-gray-600 mb-8">Sign Up to try our amazing services</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
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
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
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
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Enter Password"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    id="terms"
                    type="checkbox"
                    checked={formData.agreeToTerms}
                    onChange={(e) => setFormData({...formData, agreeToTerms: e.target.checked})}
                    className="h-4 w-4 text-emerald-500 border-gray-300 rounded"
                  />
                  <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                    I agree with Terms of Service, Terms Of Payments and Privacy Policy
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#2C52A0] text-white py-3 rounded-lg hover:bg-emerald-600 transition-colors"
                >
                  Log in
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-500 mb-4">OR</p>

                <div className="space-y-3">
                  <button className="w-full flex items-center justify-center gap-2 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors">
                    Continue with Google
                  </button>

                  <div className="flex gap-3">
                    <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                      f
                    </button>
                    <button className="flex-1 bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition-colors">
                      <img src="./apple.png" alt="apple icon" className="w-5 h-5 mx-auto" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-[100vh] md:mt-0 block'>
        <Footer />
      </div>
    </>
  );
};

export default RegisterPage;