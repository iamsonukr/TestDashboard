import React from 'react';
import { useState } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };
  const navigate = useNavigate();

  return (
    <div className=' relative'>
      <Navbar />
      <div className=" flex items-center justify-center pt-4 ">
        <div className="w-full h-full flex    flex-col md:flex-row">

          {/* Left Panel - Background with Text */}
          <div className=" md:flex md:w-1/2 relative">
            <div className=' md:m-10 m-6  bg-gray-800 p-12 flex flex-col items-start justify-between rounded-[10%]'>
              <div className="z-10">
                <div className="text-white text-2xl mb-2"></div>
                <h1 className="text-white text-4xl font-bold mb-4">Welcome to Yarpacom Cleaning Business.</h1>
                {/* <h2 className="text-white text-3xl font-light mb-6"></h2> */}
                <p className="text-gray-200 mb-8">
                  We’re your trusted Cleaning Service partner. <br />
                  We’re thrilled to see you again! Easily access your <b> Bookings, Services,</b> and <b> Personalized Recommendations</b>
                  <br />
                  Let’s keep your spaces sparkling clean together!
                </p>
              </div>

              <div className="z-10">
                <p className="text-gray-200">Don't have an account?</p>
                <button onClick={()=>navigate('/register ')} className="text-white hover:underline mt-2">Register</button>
              </div>
            </div>

            {/* Ice cream background overlay - semi-transparent */}
            <div
              className="absolute inset-0 opacity-60 rounded-[10%]"
              style={{
                backgroundImage: 'url("./cleaner.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
          </div>

          {/* Right Panel - Login Form */}
          <div className="w-full md:w-1/2 p-8 md:p-12 bg-white min-h-[100vh] block">
            <div className="max-w-md mx">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Log In</h2>
              <p className="text-gray-600 mb-8">Log In to try our amazing services</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Enter Password"
                  />
                </div>

                <div className="text-right">
                
                  <button onClick={()=>navigate('/forgot ')} className="text-emerald-500 hover:text-emerald-600 text-sm">Forgot Password</button>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#2C52A0] text-white py-3 rounded-lg hover:bg-emerald-600 transition-colors"
                >
                  Log in
                </button>
              </form>

              <div className="mt-6 text-center ">
                <p className="text-gray-500 mb-4">OR</p>

                <div className="space-y-3">
                  <button className="w-full flex items-center justify-center gap-2 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors">
                    <span>Continue with Google</span>
                  </button>

                  <div className="flex gap-3">
                    <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                      f
                    </button>
                    <button className="flex-1 bg-gray-900 text-white py-3 rounded-lg hover:bg-black transition-colors">
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
      </div>
      <div className='mt-1 md:mt-12'>

        <Footer />
      </div>
    </div>
  );
};

export default LoginPage;