const addCategoriesConfig = {
   endpoint: "/api/campaign-template",
   backRoute:"/campaigntemplate",
      fields: [
        {
          name: "name",
          label: "Name",
          type: "text",
          required: true,
        },
        {
          name: "templateType",
          label: "Template Type",
          type: "dropdown",
          required: true,
          options: ["Email", "SMS", "Push Notification"],
        },
        {
          name: "subject",
          label: "Subject",
          type: "text",
          required: true,
        },
        {
          name: "body",
          label: "Body",
          type: "editor",
          required: true,
        },
        {
          name: "status",
          label: "Status",
          type: "toggle",
          required: true,
          options: {
            enabled: "Active",
            disabled: "Inactive",
          },
        },
      ],
  };
  
  export default addCategoriesConfig;
  