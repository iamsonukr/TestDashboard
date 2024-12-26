const addServicesConfig = {
  title: "Services",
  endpoint: "",
  backRoute: "/dashboard/catalogue/services",
  fields: [
    { 
      name: "serviceName", 
      label: "Display Name", 
      subLabel: "Configure your Service Showcase... and Type your service name, customer can find this service using this name, this will also printed in Invoice.", 
      type: "text", 
      required: true 
    },
    { 
      name: "shortDescription", 
      label: "Short Description", 
      subLabel: "2-3 Line Description text about your Service, We suggest you to put in bullet points", 
      type: "textarea", 
      required: true 
    },
    { 
      name: "featuredImage", 
      label: "Featured Image", 
      type: "file", 
      variant: "banner",
      required: true 
    },
    { 
      name: "pricingType", 
      label: "Pricing Type", 
      type: "dropdown", 
      options: ["Unit", "Hour"], 
      required: true 
    },
    { name: "price", label: "Price", type: "number", required: true },
    { 
      name: "comparePrice", 
      label: "Compare Price", 
      subLabel: "To show a discounted price, move the service original price here & Enter your discounted price above into Price.", 
      type: "number" 
    },
    { name: "sku", label: "SKU", type: "text", required: true },
    { 
      name: "stockStatus", 
      label: "Stock Status", 
      type: "toggle", 
      options: { enabled: "In Stock", disabled: "Out of Stock" }, 
      required: true 
    },
    { name: "seoTitle", label: "SEO Title", type: "text" },
    { name: "metaKeyword", label: "Meta Keyword", type: "text" },
    { name: "metaDescription", label: "Meta Description", type: "textarea" },
    { name: "facebookTitle", label: "Facebook Title", type: "text" },
    { name: "facebookDescription", label: "Facebook Description", type: "textarea" },
    { name: "facebookImageUrl", label: "Facebook Image URL", type: "text" },
    { name: "twitterTitle", label: "Twitter Title", type: "text" },
    { name: "twitterDescription", label: "Twitter Description", type: "textarea" },
    { name: "twitterImageUrl", label: "Twitter Image URL", type: "text" },
    { 
      name: "category", 
      label: "Categories", 
      type: "dropdown", 
      options: ["Mechanical", "Lawyer", "Electrical"], 
      required: true 
    },
    { 
      name: "addon", 
      label: "Addon", 
      type: "dropdown", 
      options: ["Addon 1", "Addon 2"], 
      required: true 
    },
    { name: "isBestSeller", label: "Best Seller", type: "toggle", options: { enabled: "Yes", disabled: "No" } },
    { 
      name: "status", 
      label: "Status", 
      type: "toggle", 
      options: { enabled: "Active", disabled: "Inactive" }, 
      required: true 
    },
  ]
};

export default addServicesConfig;
