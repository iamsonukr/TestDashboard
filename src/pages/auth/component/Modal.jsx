import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Modal = ({ isOpen, setIsModalOpen, title, children, size = 'large' }) => {
  if (!isOpen) return null;
  const navigate=useNavigate()

  // Dynamic width and height based on the modal size
  const modalSizes = {
    small: 'max-w-sm h-[50vh]',
    medium: 'max-w-lg h-[60vh]',
    large: 'max-w-2xl h-[80vh]',
  };
  
  const handleClose=()=>{
    console.log(isOpen,"before")
    setIsModalOpen(false)
    console.log(isOpen,"After")
    alert("Closing the Popup")
    navigate('/')
  }

  useEffect(()=>{
    console.log("Inside signup")
    console.log(isOpen)
  },[])

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        className={`bg-white rounded-lg w-full ${modalSizes[size]} p-6 overflow-y-auto scrollbar-hide cursor-pointer`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <button
            onClick={handleClose}
            className="text-gray-600 hover:text-red-900 text-2xl p-10"
          >
            &times;
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
