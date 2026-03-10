import { Routes, Route } from "react-router-dom";
import AxiosTest from "./components/AxiosTest";
import axios from "axios";


// user
import UserDashboard from "./components/UserDashboard";
import ReportCase from "./components/ReportCase";
import MyCases from "./components/MyCases";
import Campaigns from "./components/Campaigns";
import UserDonation from "./components/UserDonation";

import Helpline from "./components/Helpline";

// admin
import AdminDashboard from "./components/AdminDashboard";
import AdminCases from "./components/AdminCases";
import AdminLogin from "./components/AdminLogin";
import AdminCampaigns from "./components/AdminCampaigns";

import AdminDonations from "./components/AdminDonations";
import Help from "./components/Help";




// footer pages
import AboutPortal from "./components/AboutPortal";
import AboutNCB from "./components/AboutNCB";
import Disclaimer from "./components/Disclaimer";
import ContactUs from "./components/ContactUs";



function App() {
  return (
    <Routes>
      {/* User side */}
      <Route path="/" element={<UserDashboard />} />
      <Route path="/report" element={<ReportCase />} />
      <Route path="/my-cases" element={<MyCases />} />
      <Route path="/campaigns" element={<Campaigns />} />
       <Route path="/donate" element={<UserDonation />} />
      <Route path="/helpline" element={<Helpline />} />

      {/* Admin side */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/cases" element={<AdminCases />} />
      <Route path="/admin/campaigns" element={<AdminCampaigns />} />

      <Route path="/admin/donations" element={<AdminDonations />} />
      <Route path="/admin/help" element={<Help />} />
    




      {/* Footer pages */}
      <Route path="/about-portal" element={<AboutPortal />} />
      <Route path="/about-ncb" element={<AboutNCB />} />
      <Route path="/disclaimer" element={<Disclaimer />} />
      <Route path="/contact-us" element={<ContactUs />} />

      <Route path="/axios-test" element={<AxiosTest />} />

    </Routes>
  );
}
export default App;
