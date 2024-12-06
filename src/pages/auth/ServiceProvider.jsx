import React from 'react';
import { toast } from 'react-toastify';
import DynamicForm from './component/FormCard';
import Modal from './component/Modal';

const ServiceProviderPage = ({ isOpen, onClose }) => {
    const handleServiceProviderSignup = (data) => {
      toast.success('Service Provider registration successful!');
      onClose();
    };
  
    return (
      <Modal isOpen={isOpen} onClose={onClose} title="Service Provider Registration">
        <DynamicForm role="serviceProvider" onSubmit={handleServiceProviderSignup} />
      </Modal>
    );
  };

export default ServiceProviderPage;
