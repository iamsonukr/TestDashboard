const viewcustomerConfig = {
    title: "Edit",
    endpoint: "/api/customers",
    backRoute: "/dashboard/customers", 
    fields: [
      { name: "name", label: "Name", type: "text", required: true },
      { name: "mobileCode", label: "Mobile Code", type: "text", required: true },
      { name: "mobileNumber", label: "Mobile Number", type: "text", required: true },
      { name: "email", label: "Email", type: "email", required: true },
      { 
        name: "status", 
        label: "Status", 
        type: "toggle", 
        options: { enabled: "Active", disabled: "Inactive" },
        required: true 
      },
      { name: "profileImage", label: "Profile Image", type: "file",variant: "circle", },
    ],
  };
  
  export default viewcustomerConfig;
  