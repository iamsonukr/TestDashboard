const addCategoriesConfig = {
  endpoint: "/api/categories",
  backRoute: "/dashboard/catalogue/categories",
  fields: [
    {
      name: "parentCategory",
      label: "Parent",
      subLabel:
        "Service Providing Categories can be defined here like... Cleaning, Electrical, Mechanical",
      type: "dropdown",
      options: ["Mechanical", "Lawyer", "Electrical"],
      required: true,
    },
    { name: "name", label: "Name", type: "text", required: true },
    { name: "description", label: "Description", type: "textarea", required: true },
    {
      name: "status",
      label: "Status",
      type: "toggle",
      options: {
        enabled: "Active",  // Option when the toggle is ON
        disabled: "Inactive",  // Option when the toggle is OFF
      },
      required: true,
    },
    {
      name: "isFeatured",
      label: "Featured",
      type: "toggle",
      options: {
        enabled: "Yes",  // Option when the toggle is ON
        disabled: "No",  // Option when the toggle is OFF
      },
    },
    {
      name: "categoryImage",
      label: "Category Image",
      type: "file",
      variant: "square", // Options: "circle", "square", "banner"
    },
  ],
};

export default addCategoriesConfig;
