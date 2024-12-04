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

const formConfig = {
  customer: customerConfig,
  services: serviceProviderConfig,
  addServices: addServicesConfig,
  addCategories: addCategoriesConfig,
  addAddons: addAddonsConfig,
  addSubAdmin: addSubAdmin,
  addCampaign: addCampaign,
  // addCampaignTemplate: addCampaignTemplate,
  // documentTemplate:documentTemplateConfig,
  FAQ:addFAQ,
  gallery:galleryConfig,
  role:roleConfig,
  geofencing:geofencingConfig,
};

export default formConfig;
