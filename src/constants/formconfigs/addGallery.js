const galleryConfig = {
    endpoint: "/api/gallery", // Adjust the endpoint for your API
    backRoute: "/gallery",    // Adjust the back route for navigation
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
  