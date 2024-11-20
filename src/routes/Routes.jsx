import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Customers from "../pages/Customers";
import ServiceProvider from "../pages/ServiceProvider";
import Dispute from "../pages/Dispute";
import Transactions from "../pages/Transactions";
import Bookings from "../pages/Bookings";
import Catalogue from "../pages/Catalogue";
import Reports from "../pages/Reports";
import SystemAccess from "../pages/SystemAccess";
import Configuration from "../pages/Configuration";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/serviceprovider" element={<ServiceProvider />} />
      <Route path="/dispute" element={<Dispute />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/bookings" element={<Bookings />} />
      {/* Subroutes for Catalogues, Reports, etc. */}
      {/* <Route path="/catalogue/item1" element={<Catalogue />} />
      <Route path="/catalogue/item2" element={<Catalogue />} />
      <Route path="/reports/report1" element={<Reports />} />
      <Route path="/reports/report2" element={<Reports />} />
      <Route path="/system-access/sub1" element={<SystemAccess />} />
      <Route path="/system-access/sub2" element={<SystemAccess />} />
      <Route path="/configuration/setting1" element={<Configuration />} />
      <Route path="/configuration/setting2" element={<Configuration />} /> */}
    </Routes>
  );
};

export default AppRoutes;
