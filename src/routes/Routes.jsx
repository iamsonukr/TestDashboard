import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Customers from "../pages/Customers";
import ServiceProvider from "../pages/ServiceProvider";
import Dispute from "../pages/Dispute";
import Transactions from "../pages/Transactions";
import Services from "../pages/subpages/catalogue/Services";
import Categories from "../pages/subpages/catalogue/Categories";
import AddOn from "../pages/subpages/catalogue/AddOn";
import Orders from "../pages/subpages/reports/Orders";
import CustomerReports from "../pages/subpages/reports/Customers";
import SubAdmin from "../pages/subpages/systemaccess/SubAdmin";
import Role from "../pages/subpages/systemaccess/Role";
import Faq from "../pages/subpages/configuration/Faq";
import EMailTemplates from "../pages/subpages/configuration/EMailTemplates";
import DocumentTemplates from "../pages/subpages/configuration/DocumentTemplates";
import ContentPages from "../pages/subpages/configuration/ContentPages";
import Geofencing from "../pages/subpages/configuration/Geofencing";
import Terminology from "../pages/subpages/configuration/Terminology";
import ThemeSetting from "../pages/subpages/configuration/ThemeSetting";
import WebsiteMenu from "../pages/subpages/configuration/WebsiteMenu";
import Gallery from "../pages/subpages/configuration/Gallery";
import BasicSettings from "../pages/subpages/configuration/BasicSettings";
import ServiceProviderSettings from "../pages/subpages/configuration/ServiceProviderSetting";
import AddPage from "../pages/AddPage";
import Booking from "../pages/Booking";
import Profile from "../pages/Profile";
import Password from "../pages/EditPassword";
import Landing from "../pages/landing";
import CartDetails from "../components/CartDetails"
import CleaningServices from "../pages/CleaningServices"
import Login from "../pages/auth/Login"
import SignUp from "../pages/auth/SignUp"
import ErrorPage from "../pages/ErrorPage";
<<<<<<< HEAD
import Cview from "../components/Viewandedit";
=======
import MainPage from "../pages/auth/MainApp";

>>>>>>> 06832b40f263a19bbafca81139767757d4bd9d45

const AppRoutes = () => {
  return (
    <Routes>

      {/* Unprotected Routes */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/main" element={<MainPage />} />


      {/* There all below routes should be protectes */}

      <Route path='/Cart' element={<CartDetails />} />
      <Route path='/cleaningServices' element={<CleaningServices />} />


      {/* Dashboard Routes */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/profile" element={<Profile />} />
      <Route path="/dashboard/password" element={<Password />} />
      <Route path="/dashboard/customers" element={<Customers />} />
      <Route path="/dashboard/serviceprovider" element={<ServiceProvider />} />
      <Route path="/dashboard/dispute" element={<Dispute />} />
      <Route path="/dashboard/transactions" element={<Transactions />} />
      <Route path="/dashboard/Bookings" element={<Booking />} />
      <Route path="/add/:configKey" element={<AddPage />} />
      {/* Subroutes */}
      <Route path="/dashboard/catalogue/services" element={<Services />} />
      <Route path="/dashboard/catalogue/addon" element={<AddOn />} />
      <Route path="/dashboard/catalogue/categories" element={<Categories />} />
      <Route path="/dashboard/reports/orders" element={<Orders />} />
      <Route path="/dashboard/reports/customerreports" element={<CustomerReports />} />
      <Route path="/dashboard/system-access/subadmin" element={<SubAdmin />} />
      <Route path="/dashboard/system-access/role" element={<Role />} />
      <Route path="/dashboard/configuration/faq" element={<Faq />} />
      <Route path="/dashboard/configuration/emailtemplates" element={<EMailTemplates />} />
      <Route path="/dashboard/configuration/documenttemplates" element={<DocumentTemplates />} />
      <Route path="/dashboard/configuration/contentpages" element={<ContentPages />} />
      <Route path="/dashboard/configuration/geofencing" element={<Geofencing />} />
      <Route path="/dashboard/configuration/terminology" element={<Terminology />} />
      <Route path="/dashboard/configuration/themesetting" element={<ThemeSetting />} />
      <Route path="/dashboard/configuration/websitemenu" element={<WebsiteMenu />} />
      <Route path="/dashboard/configuration/gallery" element={<Gallery />} />
      <Route path="/dashboard/configuration/basicsettings" element={<BasicSettings />} />
      <Route path="/dashboard/configuration/serviceprovidersettings" element={<ServiceProviderSettings />} />
{/* View and Edit */}
      <Route path="/dashboard/viewandedit" element={<Cview/>} />
      {/* Error Route */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRoutes;
