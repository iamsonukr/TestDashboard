import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const LoginPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  // const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://yarpacom.onrender.com/api/v1/users/login', {
        phoneNumber,
        password,
      });
      console.log(response)
      console.log("Checking Credentials")
      if (response.data.success) {
        toast.success("Login Successfull")
        navigate('/dashboard')
        console.log(response)
        console.log('Login successful:', response.data);
        // Redirect or save token as needed

      } else {
        setError('Invalid Phone Number or password.');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Something went wrong. Please try again later.');
    }
  };
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className=" flex items-center justify-center pt-4 pb-10">
        <div className="w-full h-full flex flex-col md:px-8 md:flex-row">

          {/* Left Panel - Background with Text */}
          <div className="md:flex md:w-1/2 relative">
            <div className='md:m-10 m-6 bg-gray-800 p-12 flex flex-col items-start justify-between rounded-[10%]'>
              <div className="z-10">
                <h1 className="text-white text-4xl font-bold mb-4">Welcome to Yarpacom Cleaning Business.</h1>
                <p className="text-gray-200 mb-8">
                  We’re your trusted Cleaning Service partner. <br />
                  We’re thrilled to see you again! Easily access your <b>Bookings, Services,</b> and <b>Personalized Recommendations</b>.
                  <br />
                  Let’s keep your spaces sparkling clean together!
                </p>
              </div>

              <div className="z-10">
                <p className="text-gray-200">Don't have an account?</p>
                <button onClick={() => navigate('/register ')} className="text-white hover:underline mt-2">Register</button>
              </div>
            </div>

            <div
              className="absolute inset-0 opacity-60 rounded-[10%]"
              style={{
                backgroundImage: 'url("./cleaner.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>

          {/* Right Panel - Login Form */}
          <div className="w-full md:w-1/2 p-8 md:p-12 bg-white min-h-[100vh] block">
            <div className="max-w-md mx">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Log In</h2>
              <p className="text-gray-600 mb-8">Log In to try our amazing services</p>

              {error && <p className="text-red-500 mb-4">{error}</p>}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    id="phoneNumber"
                    type="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Enter Password"
                  />
                </div>

                <div className="text-right">
                  <button onClick={() => navigate('/forgot ')} className="text-emerald-500 hover:text-emerald-600 text-sm">Forgot Password</button>

                </div>
                <div className='w-full h-full flex items-center justify-center'>

                  <button
                    type="submit"
                    className="w-1/2 bg-[#2C52A0] text-white font-bold py-3 rounded-lg hover:bg-emerald-600 transition-colors"
                  >
                    Log in
                  </button>
                </div>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-500 mb-4">OR</p>

                <div className=" gap-2 flex items-center justify-center">
                  <button className="h-full w-1/3 flex items-center justify-center  bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors">
                    <FaGoogle className="w-5 h-5 mx-auto" />
                  </button>

                  <button className="h-full w-1/3  flex items-center justify-center  bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    <FaFacebook className="w-5 h-5 mx-auto" />

                  </button>
                  <button className="h-full w-1/3  bg-gray-900 text-white py-3 rounded-lg hover:bg-black transition-colors">
                    <span>
                      <img src="./apple.png" alt="apple icon" className="w-5 h-5 mx-auto" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=''>
        <Footer />
      </div>
    </>
  );
};

export default LoginPage;
