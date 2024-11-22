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
import ErrorPage from "../pages/ErrorPage";
import Booking from "../pages/Booking";
import Login from "../pages/auth/Login"
import SignUp from "../pages/auth/SignUp"
import Profile from "../pages/Profile";
import Password from "../pages/EditPassword";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/password" element={<Password />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/serviceprovider" element={<ServiceProvider />} />
      <Route path="/dispute" element={<Dispute />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/Bookings" element={<Booking />} />
      {/* Subroutes */}
      <Route path="/catalogue/services" element={<Services />} />
      <Route path="/catalogue/addon" element={<AddOn />} />
      <Route path="/catalogue/categories" element={<Categories />} />
      <Route path="/reports/orders" element={<Orders />} />
      <Route path="/reports/customerreports" element={<CustomerReports />} />
      <Route path="/system-access/subadmin" element={<SubAdmin />} />
      <Route path="/system-access/role" element={<Role />} />
      <Route path="/configuration/faq" element={<Faq />} />
      <Route path="/configuration/emailtemplates" element={<EMailTemplates />} />
      <Route path="/configuration/documenttemplates" element={<DocumentTemplates />} />
      <Route path="/configuration/contentpages" element={<ContentPages />} />
      {/* Error Route */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRoutes;
