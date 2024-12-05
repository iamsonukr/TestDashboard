const subAdminConfig = {
  title: "Sub Admins",
  endpoint: "/api/subadmins",
  backRoute: "/dashboard/system-access/subadmin",
  fields: [
    { name: "name", label: "Name", type: "text", required: true },
    { name: "phoneExtension", label: "Phone Extension", type: "text", required: true },
    { name: "mobileNumber", label: "Mobile Number", type: "text", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "address", label: "Address", type: "text", required: true },
    { name: "password", label: "Password", type: "password", required: true },
    {
      name: "role",
      label: "Role",
      type: "dropdown",
      options: ["Customer", "Marketing Team", "Company"],
      required: true
    },
    {
      name: "status",
      label: "Status",
      type: "toggle",
      options: { enabled: "Active", disabled: "Inactive" },
      required: true
    },
    {
      name: "profileImage",
      label: "Profile Image",
      type: "file",
      variant: "circle"
    },
  ],
};

export default subAdminConfig;
