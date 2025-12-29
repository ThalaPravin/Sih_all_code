import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

// Example QR Code Data for Pie Chart
const qrCodeData = [
  { name: "Successful", value: 100 },
  { name: "Failed", value: 20 },
];

// Example QR Issues Data for Table
const qrIssuesData = [
  { deliveryId: "D101", issue: "QR Not Scanned", resolution: "Customer Rescanned" },
  { deliveryId: "D102", issue: "Invalid QR Code", resolution: "Resent Correct Code" },
  { deliveryId: "D103", issue: "Scan Timeout", resolution: "Retry Scan" },
  { deliveryId: "D104", issue: "Scan Failed", resolution: "Manual Entry" },
  { deliveryId: "D105", issue: "System Error", resolution: "Reissued QR" },
  { deliveryId: "D106", issue: "QR Not Found", resolution: "Re-scanned" },
  { deliveryId: "D107", issue: "Scan Error", resolution: "Reissue Code" },
  { deliveryId: "D108", issue: "Invalid Format", resolution: "Format Resolved" },
  { deliveryId: "D109", issue: "Code Expired", resolution: "Re-generated Code" },
  { deliveryId: "D110", issue: "Connection Error", resolution: "Retry Scan" },
];

const QRcode = () => {
  const [showMore, setShowMore] = useState(false);
  const [increaseSize, setIncreaseSize] = useState(false);

  const handleSeeMoreClick = () => {
    setShowMore(!showMore);
    setIncreaseSize(!increaseSize);
  };

  const displayedIssues = showMore ? qrIssuesData : qrIssuesData.slice(0, 3);

  // Define background and pie chart colors
  const bgColor = "#f5f5f5"; // Lightest grey for background
  const pieColors = ["#82ca9d", "#ff8042"]; // Light green and light orange for success/fail
  const pieHoverColors = ["#66b29b", "#e67842"]; // Darker shades for hover effect

  return (
    <div className={`p-6 rounded-lg`} style={{ backgroundColor: bgColor }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* QR Code Issues and Resolutions Section */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-sm font-semibold text-gray-700 mb-4">QR Code Issues and Resolutions</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-xs">Delivery ID</TableHead>
                <TableHead className="text-xs">Issue</TableHead>
                <TableHead className="text-xs">Resolution</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {displayedIssues.map((delivery, index) => (
                <TableRow key={index}>
                  <TableCell className="text-sm">{delivery.deliveryId}</TableCell>
                  <TableCell className="text-sm">{delivery.issue}</TableCell>
                  <TableCell className="text-sm">{delivery.resolution}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <button
            onClick={handleSeeMoreClick}
            className="mt-4 text-blue-500 font-semibold"
          >
            {showMore ? "See Less" : "See More"}
          </button>
        </div>

        {/* QR Code Scans Section */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-sm font-semibold text-gray-700 mb-4">QR Code Scans</h3>
          <div className={`flex justify-center ${increaseSize ? "mt-4" : ""}`}>
            <ResponsiveContainer width="100%" height={increaseSize ? 250 : 180}>
              <PieChart>
                <Pie
                  data={qrCodeData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={increaseSize ? 90 : 60}
                  label
                >
                  {qrCodeData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={pieColors[index]}
                      onMouseEnter={(e) => e.target.setAttribute("fill", pieHoverColors[index])}
                      onMouseLeave={(e) => e.target.setAttribute("fill", pieColors[index])}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRcode;
