import React, { useState } from 'react';
import LoginPage from './Login';
import SignupPage from './SignUp';
import ServiceProviderPage from './ServiceProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modal) => setActiveModal(modal);
  const closeModal = () => setActiveModal(null);

  return (
    <div>
      <ToastContainer />
      <button onClick={() => openModal('login')} className="m-4 p-2 bg-blue-600 text-white rounded">
        Open Login
      </button>
      <button onClick={() => openModal('signup')} className="m-4 p-2 bg-green-600 text-white rounded">
        Open Signup
      </button>
      <button onClick={() => openModal('serviceProvider')} className="m-4 p-2 bg-purple-600 text-white rounded">
        Open Service Provider
      </button>

      <LoginPage isOpen={activeModal === 'login'} onClose={closeModal} />
      <SignupPage isOpen={activeModal === 'signup'} onClose={closeModal} />
      <ServiceProviderPage isOpen={activeModal === 'serviceProvider'} onClose={closeModal} />
    </div>
  );
};

export default App;
