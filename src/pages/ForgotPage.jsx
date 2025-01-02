import React, { useState } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const ForgotPage = () => {
  const [emailOrMobile, setEmailOrMobile] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle reset password logic here
  };
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className=" flex items-center justify-center pt-4 pb-10">
        <div className="w-full h-full flex flex-col md:flex-row">
          {/* Left Panel - Background with Text */}
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
                <p className="text-gray-200">Don't have an account?</p>
                <button className="text-white hover:underline mt-2">Register</button>
              </div>
            </div>
            <div className="absolute inset-0 opacity-60 rounded-[10%]"
              style={{
                backgroundImage: 'url("./cleaner.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }} />
          </div>

          {/* Right Panel - Reset Password Form */}
          <div className="w-full md:w-1/2 p-8 md:p-12 md:min-h-[100vh] flex justify-start items-center ">
            <div className="max-w-md mx">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Reset Password</h2>
              <p className="text-gray-600 mb-8">Enter the email address or mobile number associated with your account.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="emailOrMobile" className="block text-sm font-medium text-gray-700 mb-2">
                    Email or Mobile Number
                  </label>
                  <input
                    id="emailOrMobile"
                    type="text"
                    value={emailOrMobile}
                    onChange={(e) => setEmailOrMobile(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Enter your email or mobile number"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#2C52A0] text-white py-3 rounded-lg hover:bg-emerald-600 transition-colors"
                >
                  Continue
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  Return to?{' '}
                  {/* <a href="#" className="text-emerald-500 hover:text-emerald-600">
                    Log in
                  </a> */}
                  <button onClick={()=>navigate('/login2')} className="text-emerald-500 hover:text-emerald-600">Log in</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-1 md:mt-12'>
        <Footer />
      </div>
    </>
  );
};

export default ForgotPage;