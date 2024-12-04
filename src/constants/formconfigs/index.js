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

const formConfig = {
  customer: customerConfig,
  services: serviceProviderConfig,
  addServices: addServicesConfig,
  addCategories: addCategoriesConfig,
  addAddons: addAddonsConfig,
  addSubAdmin: addSubAdmin,
  addCampaign: addCampaign,
  addCampaignTemplate: addCampaignTemplate,
  FAQ:addFAQ,
  documentTemplate:documentTemplateConfig,
  gallery:galleryConfig,
};

export default formConfig;
