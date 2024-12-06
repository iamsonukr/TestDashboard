import React, { useState } from 'react';

const PasswordInput = ({ label, name, register, errors }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="mb-4">
      <label className="block text-sm font-bold mb-2">{label}</label>
      <div className="relative">
        <input
          type={isVisible ? 'text' : 'password'}
          {...register(name, { required: `${label} is required` })}
          className={`w-full border rounded p-2 ${errors[name] ? 'border-red-500' : ''}`}
        />
        <button
          type="button"
          onClick={() => setIsVisible(!isVisible)}
          className="absolute inset-y-0 right-3 text-gray-600"
        >
          {isVisible ? '👁️‍🗨️' : '👁️'}
        </button>
      </div>
      {errors[name] && <p className="text-red-500 text-xs">{errors[name].message}</p>}
    </div>
  );
};

export default PasswordInput;
