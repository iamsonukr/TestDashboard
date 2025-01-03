import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import { toast } from 'react-toastify';

const ForgotPage = () => {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSendOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://yarpacom.onrender.com/api/v1/otp/sendOtp', {
        phoneNumber,
      });

      if (response.status === 200) {
        setStep(2);
        toast.success('OTP sent successfully.');
      } else {
        toast.error('Failed to send OTP. Please try again.');
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://yarpacom.onrender.com/api/v1/otp/otpVerification', {
        phoneNumber,
        otp,
      });

      if (response.status === 200) {
        setStep(3);
        toast.success('OTP verified successfully.');
      } else {
        toast.error('Invalid OTP. Please try again.');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      toast.error('Passwords do not match.');
      return;
    }

    try {
      const response = await axios.post('https://yarpacom.onrender.com/api/v1/users/forgot/password', {
        newPassword,
        phoneNumber,
      });

      if (response.status === 200) {
        toast.success('Password changed successfully.');
        navigate('/login2');
      } else {
        toast.error('Failed to change password. Please try again.');
      }
    } catch (error) {
      console.error('Error changing password:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center pt-4 pb-10">
        <div className="w-full h-full flex flex-col md:flex-row">
          <div className="md:flex md:w-1/2 relative">
            <div className="md:m-10 m-6 bg-gray-800 p-12 flex flex-col items-start justify-between rounded-[2rem]">
              <div className="z-10">
                <h1 className="text-white text-4xl font-bold mb-4">Welcome to Yarpacom Cleaning Business.</h1>
                <p className="text-gray-200 mb-8">
                  We're your trusted Cleaning Service partner. <br />
                  We're thrilled to see you again! Easily access your <span className="font-semibold">Bookings, Services,</span> and <span className="font-semibold">Personalized Recommendations</span>
                  <br />
                  Let's keep your spaces sparkling clean together!
                </p>
              </div>
              <div className="z-10">
                <p className="text-gray-200">Don't have an account?</p>
                <button 
                  onClick={() => navigate('/register')} 
                  className="text-white hover:underline mt-2"
                >
                  Register
                </button>
              </div>
            </div>
            <div 
              className="absolute inset-0 opacity-60 rounded-[2rem]"
              style={{
                backgroundImage: 'url("./cleaner.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }} 
            />
          </div>

          <div className="w-full md:w-1/2 p-8 md:p-12 md:min-h-[100vh] flex justify-start items-center ">
            <div className="max-w-md mx">
              {step === 1 && (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Reset Password</h2>
                  <p className="text-gray-600 mb-8">Enter your mobile number to receive an OTP.</p>

                  <form onSubmit={handleSendOtp} className="space-y-6">
                    <div>
                      <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                        Mobile Number
                      </label>
                      <input
                        id="phoneNumber"
                        type="text"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Enter your mobile number"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#2C52A0] text-white py-3 rounded-lg hover:bg-emerald-600 transition-colors"
                    >
                      Send OTP
                    </button>
                  </form>
                </>
              )}

              {step === 2 && (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Verify OTP</h2>
                  <p className="text-gray-600 mb-8">Enter the OTP sent to your mobile number.</p>

                  <form onSubmit={handleVerifyOtp} className="space-y-6">
                    <div>
                      <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-2">
                        OTP
                      </label>
                      <input
                        id="otp"
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Enter OTP"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#2C52A0] text-white py-3 rounded-lg hover:bg-emerald-600 transition-colors"
                    >
                      Verify OTP
                    </button>
                  </form>
                </>
              )}

              {step === 3 && (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Set New Password</h2>
                  <p className="text-gray-600 mb-8">Enter your new password.</p>

                  <form onSubmit={handleChangePassword} className="space-y-6">
                    <div>
                      <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-2">
                        New Password
                      </label>
                      <input
                        id="newPassword"
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Enter new password"
                      />
                    </div>
                    <div>
                      <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                        Confirm New Password
                      </label>
                      <input
                        id="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Confirm new password"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#2C52A0] text-white py-3 rounded-lg hover:bg-emerald-600 transition-colors"
                    >
                      Change Password
                    </button>
                  </form>
                </>
              )}

              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  Return to?{' '}
                  <button onClick={() => navigate('/login2')} className="text-emerald-500 hover:text-emerald-600">Log in</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ForgotPage;
