const documentTemplateConfig = {
    endpoint: "/api/document-templates", // Adjust the endpoint for your API
    backRoute: "/document-templates",    // Adjust the back route for navigation
    fields: [
      { 
        name: "name", 
        label: "Name", 
        type: "text", 
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
  
  export default documentTemplateConfig;
  