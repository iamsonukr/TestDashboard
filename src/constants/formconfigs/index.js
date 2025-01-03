import customerConfig from "./customerConfig";
import serviceProviderConfig from "./serviceProviderConfig";
import addServicesConfig from './addServicesConfig';
import addCategoriesConfig from './addCategoriesConfig';
import addAddonsConfig from './addAddonsConfig';
import addSubAdmin from "./addSubAdmin";
import addCampaign from "./addCampaign";
import addCampaignTemplate from "./addCampaignTemplate";
import addFAQ from "./addFAQ"
import documentTemplateConfig from "./addDocumentTemplate";
import galleryConfig from "./addGallery";
import roleConfig from "./addRole";
import geofencingConfig from "./addGeofencing";
import viewcustomerConfig from "./ViewCustomerConfig";

const formConfig = {
  customer: customerConfig,
  Services: serviceProviderConfig,
  addServices: addServicesConfig,
  addCategories: addCategoriesConfig,
  addAddons: addAddonsConfig,
  addSubAdmin: addSubAdmin,
  viewcustomer:viewcustomerConfig,
  // addCampaign: addCampaign,
  // addCampaignTemplate: addCampaignTemplate,
  documentTemplate:documentTemplateConfig,
  FAQ:addFAQ,
  gallery:galleryConfig,
  role:roleConfig,
  Geofencing:geofencingConfig,
};

export default formConfig;
