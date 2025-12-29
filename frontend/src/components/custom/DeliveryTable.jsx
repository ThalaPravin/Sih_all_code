import React, { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Card } from "@/components/ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";

const DeliveryTableWithFilters = () => {
  const [filters, setFilters] = useState({
    status: "All",
    dateRange: "",
    region: "",
    hub: "",
  });

  const [visibleRows, setVisibleRows] = useState(5); // Number of rows visible initially

  const deliveries = [
    { id: "D001", sender: "Rajesh Kumar", receiver: "Priya Sharma", pickupAddress: "Delhi", deliveryAddress: "Mumbai", assignedPostman: "Vijay Patil", status: "Pending", qrCodeGenerated: "Yes" },
    { id: "D002", sender: "Anjali Mehta", receiver: "Suresh Gupta", pickupAddress: "Bangalore", deliveryAddress: "Chennai", assignedPostman: "Pankaj Singh", status: "In-Progress", qrCodeGenerated: "No" },
    { id: "D003", sender: "Kavita Joshi", receiver: "Amit Malhotra", pickupAddress: "Kolkata", deliveryAddress: "Hyderabad", assignedPostman: "Rohan Das", status: "Completed", qrCodeGenerated: "Yes" },
    { id: "D004", sender: "Manish Verma", receiver: "Rohit Sharma", pickupAddress: "Pune", deliveryAddress: "Ahmedabad", assignedPostman: "Aakash Jain", status: "Pending", qrCodeGenerated: "Yes" },
    { id: "D005", sender: "Sneha Roy", receiver: "Pooja Patel", pickupAddress: "Indore", deliveryAddress: "Bhopal", assignedPostman: "Rahul Sharma", status: "Completed", qrCodeGenerated: "No" },
    { id: "D006", sender: "Arjun Das", receiver: "Deepak Kumar", pickupAddress: "Surat", deliveryAddress: "Ranchi", assignedPostman: "Nitin Pandey", status: "Returned", qrCodeGenerated: "Yes" },
    { id: "D007", sender: "Meera Sethi", receiver: "Kunal Roy", pickupAddress: "Nagpur", deliveryAddress: "Cochin", assignedPostman: "Ravi Mehta", status: "Pending", qrCodeGenerated: "Yes" },
    { id: "D008", sender: "Amitabh Bachchan", receiver: "Shahrukh Khan", pickupAddress: "Varanasi", deliveryAddress: "Patna", assignedPostman: "Siddharth Verma", status: "In-Progress", qrCodeGenerated: "No" },
  ];

  const filteredDeliveries = deliveries.filter((delivery) => {
    const { status, region, hub } = filters;
    return (
      (status === "All" || delivery.status === status) &&
      (region ? delivery.pickupAddress.includes(region) : true) &&
      (hub ? delivery.deliveryAddress.includes(hub) : true)
    );
  });

  const handleFilterChange = (filterKey, value) => {
    setFilters({ ...filters, [filterKey]: value });
  };

  const handleLoadMore = () => {
    setVisibleRows((prev) => Math.min(prev + 5, filteredDeliveries.length));
  };

  return (
    <Card className="p-6 bg-white rounded-lg shadow-lg mb-5">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Delivery Management</h1>

      {/* Filters Section */}
      <div className="flex flex-wrap gap-4 mb-6">
        <Select
          className="w-48"
          onValueChange={(value) => handleFilterChange("status", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Filter by Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="Pending">Pending</SelectItem>
            <SelectItem value="In-Progress">In-Progress</SelectItem>
            <SelectItem value="Completed">Completed</SelectItem>
            <SelectItem value="Returned">Returned</SelectItem>
          </SelectContent>
        </Select>

        <Input
          className="w-48"
          type="text"
          placeholder="Filter by Region"
          onChange={(e) => handleFilterChange("region", e.target.value)}
        />

        <Input
          className="w-48"
          type="text"
          placeholder="Filter by Hub"
          onChange={(e) => handleFilterChange("hub", e.target.value)}
        />

        <Input
          className="w-48"
          type="date"
          placeholder="Filter by Date Range"
          onChange={(e) => handleFilterChange("dateRange", e.target.value)}
        />

        <Button className="bg-red-800 text-white hover:bg-red-900 flex items-center space-x-2">
          <span>Apply Filters</span>
        </Button>
      </div>

      {/* Table Section */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Delivery ID</TableHead>
            <TableHead>Sender</TableHead>
            <TableHead>Receiver</TableHead>
            <TableHead>Pickup Address</TableHead>
            <TableHead>Delivery Address</TableHead>
            <TableHead>Assigned Postman</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>QR Code</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredDeliveries.slice(0, visibleRows).map((delivery) => (
            <TableRow key={delivery.id}>
              <TableCell>{delivery.id}</TableCell>
              <TableCell>{delivery.sender}</TableCell>
              <TableCell>{delivery.receiver}</TableCell>
              <TableCell>{delivery.pickupAddress}</TableCell>
              <TableCell>{delivery.deliveryAddress}</TableCell>
              <TableCell>{delivery.assignedPostman}</TableCell>
              <TableCell>{delivery.status}</TableCell>
              <TableCell>{delivery.qrCodeGenerated}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* See More Button */}
      {visibleRows < filteredDeliveries.length && (
        <div className="flex justify-center mt-4">
          <Button
            className="bg-red-800 text-white hover:bg-red-900"
            onClick={handleLoadMore}
          >
            See More
          </Button>
        </div>
      )}
    </Card>
  );
};

export default DeliveryTableWithFilters;
