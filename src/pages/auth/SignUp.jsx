import React from 'react';
import { useNavigate } from 'react-router-dom';
import DynamicForm from './component/FormCard';
import Modal from './component/Modal';
import { toast } from 'react-toastify';

const SignupPage = ({ isOpen, setIsOpen }) => {
  const handleSignup = (data) => {
    toast.success('Signup successful!');
    onClose();
  };

  return (
    <Modal isOpen={isOpen =true} setIsOpen={setIsOpen} title="Signup">
      <DynamicForm role="signup" onSubmit={handleSignup} />
    </Modal>
  );
};

export default SignupPage;

  
