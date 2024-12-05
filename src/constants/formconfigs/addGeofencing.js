const geofencingConfig = {
  title: "Geofencing",
  endpoint: "/api/geofencings",
  backRoute: "/dashboard/configuration/geofencing",
  showMap: true,
  fields: [
    {
      name: "label",
      label: "Label",
      type: "text",
      required: true,
    },
    {
      name: "module",
      label: "Select Module",
      type: "dropdown",
      options: ["Promocode", "Vendor"],
      required: true,
    },
    {
      name: "location",
      label: "Search Location",
      type: "text",
      required: true,
      placeholder: "Enter location",
    },
    {
      name: "radius",
      label: "Radius (in meters)",
      type: "number",
      required: true,
    },
    {
      name: "status",
      label: "Status",
      type: "toggle",
      options: {
        enabled: "Active",
        disabled: "Inactive",
      },
      required: true,
    },
  ],
};

export default geofencingConfig;
