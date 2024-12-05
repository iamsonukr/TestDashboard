const galleryConfig = {
  title: "Gallery",
  endpoint: "/api/gallery", // Adjust the endpoint for your API
  backRoute: "/dashboard/configuration/gallery",
  fields: [
    {
      name: "image",
      label: "Image",
      type: "file",
      variant: "banner",
      required: true
    },
  ],
};

export default galleryConfig;
