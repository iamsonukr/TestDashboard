const rolesConfig = {
  // configKey: "roles",
  title: "Roles",
  endpoint: "/api/roles", // Your API endpoint for submission
  backRoute: "/dashboard/system-access/role",
  fields: [
    {
      name: "name",
      label: "Role Name",
      type: "text",
      required: true,
      placeholder: "Enter role name",
    },
    {
      name: "toggle",
      label: "Active Status",
      type: "toggle",
      options: {
        enabled: "Active",
        disabled: "Inactive",
      },
    },
  ],
  sections: [
    {
      heading: "Permissions",
      cards: [
        {
          title: "Customers",
          options: [
            { name: "view", label: "View", type: "checkbox" },
            { name: "create", label: "Create", type: "checkbox" },
            { name: "update", label: "Update", type: "checkbox" },
            { name: "delete", label: "Delete", type: "checkbox" },
            { name: "block", label: "Block", type: "checkbox" },
          ],
        },
        {
          title: "Customers Wallet",
          options: [
            { name: "view", label: "View", type: "checkbox" },
            { name: "update", label: "Update", type: "checkbox" },
          ],
        },
        {
          title: "Hide Contact Details",
          options: [
            { name: "driver", label: "Driver", type: "checkbox" },
            { name: "vendor", label: "Vendor", type: "checkbox" },
            { name: "customer", label: "Customer", type: "checkbox" },
          ],
        },
        {
          title: "Dispute",
          options: [
            { name: "view", label: "View", type: "checkbox" },
            { name: "update", label: "Update", type: "checkbox" },
          ],
        },
        {
          title: "Geofencing",
          options: [
            { name: "view", label: "View", type: "checkbox" },
            { name: "create", label: "Create", type: "checkbox" },
            { name: "update", label: "Update", type: "checkbox" },
            { name: "delete", label: "Delete", type: "checkbox" },
          ],
        },
        // {
        //   title: "Vehicles Type",
        //   options: [
        //     { name: "view", label: "View", type: "checkbox" },
        //     { name: "create", label: "Create", type: "checkbox" },
        //     { name: "update", label: "Update", type: "checkbox" },
        //     { name: "delete", label: "Delete", type: "checkbox" },
        //     { name: "block", label: "Block", type: "checkbox" },
        //   ],
        // },
        // {
        //   title: "Drivers",
        //   options: [
        //     { name: "view", label: "View", type: "checkbox" },
        //     { name: "create", label: "Create", type: "checkbox" },
        //     { name: "update", label: "Update", type: "checkbox" },
        //     { name: "delete", label: "Delete", type: "checkbox" },
        //     { name: "block", label: "Block", type: "checkbox" },
        //   ],
        // },
        // {
        //   title: "Bird Eye View",
        //   options: [
        //     { name: "view", label: "View", type: "checkbox" },
        //     { name: "assign", label: "Assign", type: "checkbox" },
        //   ],
        // },
        {
          title: "FAQ",
          options: [
            { name: "view", label: "View", type: "checkbox" },
            { name: "create", label: "Create", type: "checkbox" },
            { name: "update", label: "Update", type: "checkbox" },
            { name: "delete", label: "Delete", type: "checkbox" },
          ],
        },
        // {
        //   title: "Promotion",
        //   options: [
        //     { name: "view", label: "View", type: "checkbox" },
        //     { name: "create", label: "Create", type: "checkbox" },
        //     { name: "update", label: "Update", type: "checkbox" },
        //     { name: "delete", label: "Delete", type: "checkbox" },
        //   ],
        // },
        // {
        //   title: "Promo Code",
        //   options: [
        //     { name: "view", label: "View", type: "checkbox" },
        //     { name: "create", label: "Create", type: "checkbox" },
        //     { name: "update", label: "Update", type: "checkbox" },
        //     { name: "delete", label: "Delete", type: "checkbox" },
        //   ],
        // },
        {
          title: "Gallery",
          options: [
            { name: "view", label: "View", type: "checkbox" },
            { name: "create", label: "Create", type: "checkbox" },
            { name: "delete", label: "Delete", type: "checkbox" },
          ],
        },
        {
          title: "Content Pages",
          options: [
            { name: "view", label: "View", type: "checkbox" },
            { name: "update", label: "Update", type: "checkbox" },
            { name: "create", label: "Create", type: "checkbox" },
          ],
        },
        {
          title: "E-Mail Contents",
          options: [
            { name: "view", label: "View", type: "checkbox" },
            { name: "update", label: "Update", type: "checkbox" },
          ],
        },
        // {
        //   title: "Marketing",
        //   options: [
        //     { name: "view", label: "View", type: "checkbox" },
        //     { name: "create", label: "Create", type: "checkbox" },
        //     { name: "update", label: "Update", type: "checkbox" },
        //     { name: "delete", label: "Delete", type: "checkbox" },
        //   ],
        // },
        {
          title: "Reports",
          options: [
            { name: "view", label: "View", type: "checkbox" },
          ],
        },
        {
          title: "Accounting",
          options: [
            { name: "view", label: "View", type: "checkbox" },
            { name: "pay", label: "Pay", type: "checkbox" },
          ],
        },
        {
          title: "Document Templates",
          options: [
            { name: "view", label: "View", type: "checkbox" },
            { name: "create", label: "Create", type: "checkbox" },
            { name: "update", label: "Update", type: "checkbox" },
            { name: "delete", label: "Delete", type: "checkbox" },
          ],
        },
        {
          title: "Store Setting",
          options: [
            { name: "view", label: "View", type: "checkbox" },
            { name: "update", label: "Update", type: "checkbox" },
          ],
        },
      ],
    },
    {
      heading: "Service Provider Permissions",
      cards: [
        {
          title: "Services",
          options: [
            { name: "view", label: "View", type: "checkbox" },
            { name: "create", label: "Create", type: "checkbox" },
            { name: "update", label: "Update", type: "checkbox" },
            { name: "delete", label: "Delete", type: "checkbox" },
            { name: "block", label: "Block", type: "checkbox" },
          ],
        },
        {
          title: "Categories",
          options: [
            { name: "view", label: "View", type: "checkbox" },
            { name: "create", label: "Create", type: "checkbox" },
            { name: "update", label: "Update", type: "checkbox" },
            { name: "delete", label: "Delete", type: "checkbox" },
            { name: "block", label: "Block", type: "checkbox" },
          ],
        },
        {
          title: "Bookings",
          options: [
            { name: "view", label: "View", type: "checkbox" },
            { name: "update", label: "Update", type: "checkbox" },
          ],
        },
        {
          title: "Add On",
          options: [
            { name: "view", label: "View", type: "checkbox" },
            { name: "create", label: "Create", type: "checkbox" },
            { name: "update", label: "Update", type: "checkbox" },
            { name: "delete", label: "Delete", type: "checkbox" },
            { name: "block", label: "Block", type: "checkbox" },
          ],
        },
        {
          title: "Setting",
          options: [
            { name: "view", label: "View", type: "checkbox" },
            { name: "update", label: "Update", type: "checkbox" },
          ],
        },
        {
          title: "Notification",
          options: [
            { name: "placeholder", label: "Placeholder", type: "checkbox" },
          ],
        },
      ],
    },
  ],
};

export default rolesConfig
