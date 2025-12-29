import React from "react";
// Adjusted the import path for clarity
import DashboardOverview from "../components/custom/DashboardOverview";

const ManageComplaints = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-700 mb-6">Manage Complaints</h1>
      <DashboardOverview />
    </div>
  );
};

export default ManageComplaints;
