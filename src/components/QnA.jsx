import { useState } from 'react';

function QnA() {
  const questions = [
    {
      title: "What types of cleaning services do you offer?",
      answer:
        "We provide residential, commercial, deep cleaning, move-in/move-out cleaning, and specialized services like carpet or upholstery cleaning.",
    },
    {
      title: "How do I book a cleaning service?",
      answer:
        "You can book a service online through our website or by our Application. Simply select your desired service, date, and time.",
    },
    {
      title: "Do I need to provide cleaning supplies?",
      answer:
        "No, our team brings all necessary cleaning supplies and equipment. However, if you have specific products you'd like us to use, let us know.",
    },
    {
      title: "Are your cleaners insured and background-checked?",
      answer:
        "Yes, all our cleaners are fully insured, trained, and background-checked for your peace of mind.",
    },
    {
      title: "How much does your cleaning service cost?",
      answer:
        "Our pricing depends on the service type, property size, and frequency. You can request a free quote online or contact us for more details.",
    },
  ];
  const [expandedIndices, setExpandedIndices] = useState([]);

  const toggleAccordion = (index) => {
    setExpandedIndices((prevIndices) => {
      if (prevIndices.includes(index)) {
        return prevIndices.filter((i) => i !== index);
      } else {
        return [...prevIndices, index];
      }
    });
  };

  return (
    <div>
      <div className="divider px-4 sm:px-[10vw] py-8">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-center justify-evenly">
          <div className="w-full sm:w-1/3 px-4 sm:px-[2vw] mb-6 sm:mb-0">
            <h2 className="text-xl sm:text-[2.5vw] lg:text-[3vw] font-bold mb-4 leading-tight sm:leading-[3.5vw]">
              Frequently Asked Questions
            </h2>
            <div className="w-full h-full py-[2vw] px-[0.2vw]">
              <button size="px-[2vw] py-[0.5vw]" name="Contact us" />
            </div>
          </div>
          <div className="space-y-4 w-full sm:w-2/3">
            {questions.map((question, index) => (
              <div
                key={index}
                className={`border rounded-lg p-4 cursor-pointer ${
                  expandedIndices.includes(index) ? 'bg-[#5d9be7] text-white' : ''
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <div className="w-full flex justify-between">
                  <h3
                    className={`text-base sm:text-lg font-semibold mb-2 flex items-center ${
                      expandedIndices.includes(index) ? 'text-white' : 'text-black'
                    }`}
                  >
                    {question.title}
                  </h3>
                  <span className="ml-2 justify-end font-normal text-lg sm:text-xl">
                    {expandedIndices.includes(index) ? '-' : '+'}
                  </span>
                </div>
                {expandedIndices.includes(index) && (
                  <p className="text-sm sm:text-base text-white">{question.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QnA;
