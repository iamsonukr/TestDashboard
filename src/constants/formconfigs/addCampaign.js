const campaignConfig = {
    endpoint: "/api/campaigns",
    backRoute: "/campaigns",
    fields: [
      { name: "name", label: "Name", type: "text", required: true },
      { 
        name: "templateType", 
        label: "Template Type", 
        type: "dropdown", 
        options: ["SMS", "Email", "Push Notification"], 
        required: true 
      },
      { 
        name: "template", 
        label: "Template", 
        type: "dropdown", 
        options: ["Test"], 
        required: true 
      },
      { 
        name: "audienceType", 
        label: "Audience Type", 
        type: "dropdown", 
        options: ["Customer"], 
        required: true 
      },
      { 
        name: "audience", 
        label: "Audience", 
        type: "dropdown", 
        options: ["Register Before", "Register After", "Order Before", "Order After", "All"], 
        required: true 
      },
      { 
        name: "date", 
        label: "Date", 
        type: "datetime", 
        required: true 
      },
      { 
        name: "scheduledDate", 
        label: "Scheduled Date", 
        type: "datetime", 
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
  
  export default campaignConfig;
  