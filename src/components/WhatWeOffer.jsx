import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import LoginPage from '../pages/auth/Login';

function WhatWeOffer({isAuthenticated=true}) {
  const navigate = useNavigate();

  const [activeModal, setActiveModal] = useState(null);
  const openModal = (modal) => setActiveModal(modal);
  const closeModal = () => setActiveModal(null);


  const services = [
    { title: "Residential Cleaning", icon: "🏠", borderColor: "#22c55e" },
    { title: "Office Cleaning", icon: "🏢", borderColor: "#3b82f6" },
  ];

  function handleClick(){
    if(!isAuthenticated)
    {
      openModal('login')
    }
    else{
      navigate("/CleaningServices")
    }
  }


  return (
    <div>
      <section className="py-16 border-2 border-red-800 text-center px-8">
        <h2 className="text-3xl font-bold mb-10">
          Clean Your Space With <span className="text-[#FFAB00]">Best Cleaning Services</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mx-auto max-w-screen-lg">
          {services.map((service, index) => (
            <div onClick={() => navigate('/login2 ')}
              key={index}
              className="p-6 rounded-lg border-2  hover:cursor-pointer shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              style={{
                borderBottom: '4px solid transparent',
                transition: 'border-color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = service.borderColor)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'transparent')}
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold">{service.title}</h3>
              {service.highlighted && (
                <div className="mt-4 h-1 w-full transition-all duration-300" />
              )}
            </div>
          ))}
        </div>
      </section>
      <LoginPage onClick={() => navigate('/login2 ')} />
    </div>
  )
}

export default WhatWeOffer