import React from 'react';
import { useNavigate } from 'react-router-dom';
import DynamicForm from './component/FormCard';
import Modal from './component/Modal';
import { toast } from 'react-toastify';

const LoginPage = ({ isOpen, setIsModalOpen }) => {
  const navigate = useNavigate();

  const handleLogin = (data) => {
    if (data.email === 'admin@example.com' && data.password === 'admin123') {
      toast.success('Welcome Admin!');
      navigate('/dashboard');
    } else if (data.email === 'user@example.com' && data.password === 'user123') {
      toast.success('Welcome User!');
      navigate('/');  
    } else {
      toast.error('Invalid credentials!');
    }
  };

  return (
    <Modal isOpen={isOpen} setIsModalOpen={setIsModalOpen} title="Login" size="small">
      <DynamicForm role="login" onSubmit={handleLogin} />
    </Modal>
  );
};

export default LoginPage;
