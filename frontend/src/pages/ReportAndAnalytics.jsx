import React from "react";
import DeliveryMetrics from "../components/custom/DeliveryMetrics";
import PostmanMetrics from "../components/custom/PostmanMetrics"; 
import QRcode from "../components/custom/QRcode";  // Adjusted the import path for consistency
import FinancialInsights from "../components/custom/FinancialInsights"; 
import CustomReports from "../components/custom/CustomReports";

const ReportAndAnalytics = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Reports and Analytics</h1>
      
      {/* Delivery Metrics Section */}
      <DeliveryMetrics />
      
      {/* Postman Performance Section */}
      <PostmanMetrics />
      {/* Postman Performance Section */}
      <QRcode />
        {/* Financial Insights Section */}
      <FinancialInsights />  {/* Add Financial Insights component */}
      {/* Custom Reports Section */}
      <CustomReports />  {/* Add Custom Reports component */}
    </div>
  );
};

export default ReportAndAnalytics;
