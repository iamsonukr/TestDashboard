import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ForgotPage = () => {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Phone number validation
  const isValidPhoneNumber = (phone) => {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    return phoneRegex.test(phone);
  };

  // Password validation
  const isValidPassword = (password) => {
    return password.length >= 6
    //  && 
    //        /[A-Z]/.test(password) && 
    //        /[a-z]/.test(password) && 
    //        /[0-9]/.test(password) &&
    //        /[^A-Za-z0-9]/.test(password);
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!isValidPhoneNumber(phoneNumber)) {
      setError('Please enter a valid phone number');
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post('https://yarpacom.onrender.com/api/v1/otp/sendOtp', {
        phoneNumber: phoneNumber.trim(),
      });

      if (response.status === 200) {
        setStep(2);
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to send OTP. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setError('');

    if (otp.length !== 4) {
      setError('Please enter a valid 4-digit OTP');
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post('https://yarpacom.onrender.com/api/v1/otp/otpVerification', {
        phoneNumber: phoneNumber.trim(),
        otp: otp.trim(),
      });

      if (response.status === 200) {
        setStep(3);
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Invalid OTP. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setError('');

    if (!isValidPassword(newPassword)) {
      setError('Password must be at least 8 characters long and contain uppercase, lowercase, number, and special character');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post('https://yarpacom.onrender.com/api/v1/users/forgot/password', {
        newPassword,
        phoneNumber: phoneNumber.trim(),
      });

      if (response.status === 200) {
        navigate('/login2');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to change password. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const renderForm = () => {
    const commonInputClasses = "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500";
    const buttonClasses = `w-full py-3 rounded-lg transition-colors ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#2C52A0] hover:bg-blue-700'} text-white`;

    switch (step) {
      case 1:
        return (
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
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className={commonInputClasses}
                  placeholder="+1234567890"
                  disabled={isLoading}
                  required
                />
              </div>
              <button type="submit" className={buttonClasses} disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Send OTP'}
              </button>
            </form>
          </>
        );
      case 2:
        return (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Verify OTP</h2>
            <p className="text-gray-600 mb-8">Enter the OTP sent to {phoneNumber}</p>
            <form onSubmit={handleVerifyOtp} className="space-y-6">
              <div>
                <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-2">
                  OTP
                </label>
                <input
                  id="otp"
                  type="text"
                  maxLength="4"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                  className={commonInputClasses}
                  placeholder="Enter 4-digit OTP"
                  disabled={isLoading}
                  required
                />
              </div>
              <button type="submit" className={buttonClasses} disabled={isLoading}>
                {isLoading ? 'Verifying...' : 'Verify OTP'}
              </button>
            </form>
          </>
        );
      case 3:
        return (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Set New Password</h2>
            <p className="text-gray-600 mb-8">Create a strong password for your account.</p>
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
                  className={commonInputClasses}
                  placeholder="Enter new password"
                  disabled={isLoading}
                  required
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
                  className={commonInputClasses}
                  placeholder="Confirm new password"
                  disabled={isLoading}
                  required
                />
              </div>
              <button type="submit" className={buttonClasses} disabled={isLoading}>
                {isLoading ? 'Changing Password...' : 'Change Password'}
              </button>
            </form>
          </>
        );
      default:
        return null;
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

          <div className="w-full md:w-1/2 p-8 md:p-12 flex justify-start items-center">
            <div className="max-w-md w-full">
              {error && (
                <div className="mb-4 p-3 rounded bg-red-100 text-red-700 text-sm">
                  {error}
                </div>
              )}
              {renderForm()}
              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  Return to{' '}
                  <button 
                    onClick={() => navigate('/login2')} 
                    className="text-blue-500 hover:text-blue-600"
                  >
                    Log in
                  </button>
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