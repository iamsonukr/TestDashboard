const faq = {
    endpoint: "/api/faqs", // Adjust the endpoint for your API
    backRoute: "/faqs",
    fields: [
      { 
        name: "question", 
        label: "Question", 
        type: "text", 
        required: true 
      },
      { 
        name: "language", 
        label: "Language", 
        type: "dropdown", 
        options: ["English", "French", "Haitian Creole", "Chinese"], 
        required: true 
      },
      { 
        name: "answer", 
        label: "Answer", 
        type: "editor", 
        required: true 
      },
      { 
        name: "status", 
        label: "Status", 
        type: "toggle", 
        options: { enabled: "Active", disabled: "Inactive" }, 
        required: true 
      },
    ],
  };
  
  export default faq;
  