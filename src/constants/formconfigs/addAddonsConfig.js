const addAddonsConfig = {
  endpoint: "/api/addons",
  backRoute: "/dashboard/catalogue/addon",
  fields: [
    { name: "addonName", label: "Addon Name", type: "text", required: true },
    { name: "optionName", label: "Option Name", type: "text", required: true },
    { name: "optionPrice", label: "Option Price", type: "number", required: true },
    { name: "isDefault", label: "Default", type: "checkbox" },
    {
      name: "status",
      label: "Status",
      type: "toggle",
      options: {
        enabled: "Active",  // Label when toggle is ON
        disabled: "Inactive",  // Label when toggle is OFF
      },
      required: true,
    },
    {
      name: "isRequired",
      label: "Required",
      type: "toggle",
      options: {
        enabled: "Yes",  // Label when toggle is ON
        disabled: "No",  // Label when toggle is OFF
      },
    },
    {
      name: "isLimit",
      label: "Limit",
      type: "toggle",
      options: {
        enabled: "On",  // Label when toggle is ON
        disabled: "Off",  // Label when toggle is OFF
      },
    },
    { name: "maxUnit", label: "Max Unit", type: "number" },
    {
      name: "limitType",
      label: "Limit Type",
      type: "dropdown",
      options: ["Max", "Range"],
    },
    { name: "minLimit", label: "Min Limit", type: "number" },
    { name: "maxLimit", label: "Max Limit", type: "number" },
  ],
};

export default addAddonsConfig;
