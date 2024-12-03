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
import Landing from "../pages/Landing";
import CartDetails from "../components/CartDetails"
import CleaningServices from "../pages/CleaningServices"


const AppRoutes = () => {
  return (
    <Routes>

      {/* Unprotected Routes */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />


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

      {/* Error Route */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRoutes;
