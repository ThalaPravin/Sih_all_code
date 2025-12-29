import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Delivery from "./pages/Delivery";
import Layout from "./layout/layout";
import DeliveryDensityHeatmap from "./pages/DeliveryDensityHeatmap";
import DeliveryDetails from "./components/custom/DeliveryDetails";
import ReportAndAnalytics from "./pages/ReportAndAnalytics";
import ManageComplaints from "./pages/ManageComplaints";

function App() {
  return (
    <Routes>
      <Route path="/auth/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="delivery" element={<Delivery />} />
        <Route
          path="delivery-details/:deliveryId"
          element={<DeliveryDetails />}
        />

        <Route path="deliverydensity" element={<DeliveryDensityHeatmap />} />
        <Route path="report-and-analytics" element={<ReportAndAnalytics />} />
        <Route path="/manage-complaints" element={<ManageComplaints />} />
      </Route>
    </Routes>
  );
}

export default App;
