import React from 'react'
import { useNavigate } from 'react-router-dom';

function whatWeOffer({isAuthenticated=true}) {
  const navigate = useNavigate();


  const services = [
    { title: "Residential Cleaning", icon: "🏠", borderColor: "#22c55e" },
    { title: "Commercial Cleaning", icon: "🏢", borderColor: "#3b82f6" },
    { title: "Specialized Cleaning", icon: "🧹", borderColor: "#f59e0b" },
    { title: "Industrial Cleaning", icon: "🏭", borderColor: "#ef4444" },
    { title: "Medical Cleaning", icon: "🏥", borderColor: "#10b981" },
    { title: "Event Cleaning", icon: "🎉", borderColor: "#6366f1" },
    { title: "Green Cleaning", icon: "🌿", borderColor: "#16a34a" },
    { title: "Vehicle Cleaning", icon: "🚗", borderColor: "#f97316" }
  ];

  function handleClick(){
    if(!isAuthenticated)
    {
      navigate("/login")
    }
    else{
      navigate("/CleaningServices")
    }
  }


  return (
    <div>
      <section className="py-16 text-center px-8">
        <h2 className="text-3xl font-bold mb-10">
          Clean Your Space With <span className="text-[#FFAB00]">Best Cleaning Services</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto max-w-screen-lg">
          {services.map((service, index) => (
            <div onClick={handleClick}
              key={index}
              className="p-6 rounded-lg hover:cursor-pointer shadow-xl transition-all duration-300 transform hover:-translate-y-2"
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
    </div>
  )
}

export default whatWeOffer