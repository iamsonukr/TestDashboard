import React from 'react';

const Modal = ({ isOpen, onClose, title, children, size = 'large' }) => {
  if (!isOpen) return null;

  // Dynamic width and height based on the modal size
  const modalSizes = {
    small: 'max-w-sm h-[50vh]',
    medium: 'max-w-lg h-[60vh]',
    large: 'max-w-2xl h-[80vh]',
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        className={`bg-white rounded-lg w-full ${modalSizes[size]} p-6 overflow-y-auto scrollbar-hide cursor-pointer`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900 text-2xl"
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