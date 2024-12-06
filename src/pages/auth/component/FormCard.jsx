import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import PasswordInput from './PasswordInput';
import { AiOutlineCloudUpload } from 'react-icons/ai';

const DynamicForm = ({ role, onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [previewImage, setPreviewImage] = useState(null);

  const rolesConfig = {
    login: ['email', 'password'],
    signup: ['firstName', 'lastName', 'email', 'mobile', 'address', 'username', 'password', 'confirmPassword'],
    serviceProvider: ['ownerName', 'email', 'mobile', 'address', 'username', 'password', 'confirmPassword', 'licenseNumber', 'licenseImage'],
  };

  const labels = {
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    mobile: 'Mobile',
    address: 'Address',
    username: 'Username',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    ownerName: 'Owner Name',
    licenseNumber: 'License Number',
    licenseImage: 'License Image',
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setPreviewImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleFormSubmit = (data) => {
    if (role === 'signup' && data.password !== data.confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }
    onSubmit(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className={`grid ${role === 'login' ? 'grid-cols-1' : 'grid-cols-2'} gap-4`}
    >
      {rolesConfig[role].map((field, index) => (
        field === 'password' || field === 'confirmPassword' ? (
          <div key={index} className="col-span-2">
            <PasswordInput
              label={labels[field]}
              name={field}
              register={register}
              errors={errors}
            />
          </div>
        ) : field === 'licenseImage' ? (
          <div key={index} className="col-span-2 flex items-center justify-start gap-8">
            <div>
              <label className="block text-sm font-bold mb-2">{labels[field]}</label>
              <input
                type="file"
                accept="image/*"
                {...register(field, { required: `${labels[field]} is required` })}
                className="hidden"
                id="licenseImage"
                onChange={handleImageChange}
              />
              <label
                htmlFor="licenseImage"
                className="flex items-center gap-2 cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                <AiOutlineCloudUpload size={24} />
                Upload Image
              </label>
              {errors[field] && (
                <p className="text-red-500 text-xs mt-2">{errors[field].message}</p>
              )}
            </div>
            {previewImage && (
              <div className="w-32 h-32 border rounded-lg overflow-hidden ml-4">
                <img src={previewImage} alt="Preview" className="w-full h-full object-cover" />
              </div>
            )}
          </div>
        ) : (
          <div key={index}>
            <label className="block text-sm font-bold mb-2">{labels[field]}</label>
            <input
              type="text"
              {...register(field, { required: `${labels[field]} is required` })}
              className={`w-full border rounded p-2 ${errors[field] ? 'border-red-500' : ''}`}
            />
            {errors[field] && (
              <p className="text-red-500 text-xs">{errors[field].message}</p>
            )}
          </div>
        )
      ))}
      <div className="col-span-2">
        <button
          type="submit"
          className="w-full py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-[#2C52A0] to-[#4189C4] transform transition-all hover:scale-105 hover:shadow-lg hover:from-[#1f3d6d] hover:to-[#357aa9] focus:outline-none focus:ring-2 focus:ring-[#2C52A0] focus:ring-opacity-50"
        >
          Submit
        </button>
      </div>

    </form>
  );
};

export default DynamicForm;