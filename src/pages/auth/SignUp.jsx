import React from 'react';
import { useNavigate } from 'react-router-dom';
import DynamicForm from './component/FormCard';
import Modal from './component/Modal';
import { toast } from 'react-toastify';

const SignupPage = ({ isOpen, setIsModalOpen }) => {
  const handleSignup = (data) => {
    console.log(data);
    toast.success('Signup successful!');
    setIsModalOpen(false); // Properly update the state to close the modal
  };

  return (
    <Modal isOpen={isOpen} setIsModalOpen={setIsModalOpen} title="Signup">
      <DynamicForm role="signup" onSubmit={handleSignup} />
    </Modal>
  );
};

export default SignupPage;
