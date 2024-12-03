const serviceProviderConfig = {
  endpoint: "/api/services",
  backRoute: "/services",
  fields: [
    { name: "name", label: "Name", type: "text", required: true },
    { name: "mobileCode", label: "Mobile Code", type: "text", required: true },
    { name: "mobileNumber", label: "Mobile Number", type: "text", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "address", label: "Address", type: "text", required: true },
    { name: "serviceType", label: "Service Type", type: "dropdown", options: ["Type 1", "Type 2"] },
    { name: "accountNumber", label: "Account Number", type: "text", required: true },
    { name: "accountName", label: "Account Name", type: "text", required: true },
    { name: "bankName", label: "Bank Name", type: "text", required: true },
    { name: "routingNumber", label: "Routing Number", type: "text", required: true },
    { name: "password", label: "Password", type: "password", required: true },
    { 
      name: "status", 
      label: "Status", 
      type: "toggle", 
      options: { enabled: "Active", disabled: "Inactive" },
      required: true 
    },
    { 
      name: "commissionType", 
      label: "Commission Type", 
      type: "toggle", 
      options: { enabled: "Percentage", disabled: "Fixed" },
      required: true 
    },
    { name: "profileImage", label: "Profile Image", type: "file",variant: "circle", },
  ],
};

export default serviceProviderConfig;
