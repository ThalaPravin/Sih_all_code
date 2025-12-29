import React, { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Button } from "../ui/button";

const DeliveryDetails = () => {
  const deliveries = [
    { id: "D001", sender: "Rajesh Kumar", receiver: "Priya Sharma", source: "Delhi", destination: "Mumbai", weight: "5kg" },
    { id: "D002", sender: "Anjali Mehta", receiver: "Suresh Gupta", source: "Bangalore", destination: "Chennai", weight: "2.5kg" },
    { id: "D003", sender: "Kavita Joshi", receiver: "Amit Malhotra", source: "Kolkata", destination: "Hyderabad", weight: "3kg" },
    { id: "D004", sender: "Manish Verma", receiver: "Rohit Sharma", source: "Pune", destination: "Ahmedabad", weight: "4kg" },
    { id: "D005", sender: "Neha Agarwal", receiver: "Sonal Kapoor", source: "Lucknow", destination: "Jaipur", weight: "1.5kg" },
    { id: "D006", sender: "Arjun Das", receiver: "Deepak Kumar", source: "Surat", destination: "Ranchi", weight: "7kg" },
    { id: "D007", sender: "Sneha Roy", receiver: "Pooja Patel", source: "Indore", destination: "Bhopal", weight: "2kg" },
    { id: "D008", sender: "Amitabh Bachchan", receiver: "Shahrukh Khan", source: "Varanasi", destination: "Patna", weight: "6kg" },
    { id: "D009", sender: "Meera Sethi", receiver: "Kunal Roy", source: "Nagpur", destination: "Cochin", weight: "3.5kg" },
    { id: "D010", sender: "Vikas Singh", receiver: "Kriti Sen", source: "Agra", destination: "Dehradun", weight: "5.2kg" },
  ];

  // State to manage how many rows to display
  const [visibleRows, setVisibleRows] = useState(5);

  // Function to load more rows
  const handleLoadMore = () => {
    setVisibleRows((prev) => Math.min(prev + 5, deliveries.length));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Delivery Management</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Sender's Name</TableHead>
            <TableHead>Receiver's Name</TableHead>
            <TableHead>Source Location</TableHead>
            <TableHead>Destination</TableHead>
            <TableHead>Weight</TableHead>
            <TableHead>Delivery ID</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {deliveries.slice(0, visibleRows).map((delivery) => (
            <TableRow key={delivery.id}>
              <TableCell>{delivery.sender}</TableCell>
              <TableCell>{delivery.receiver}</TableCell>
              <TableCell>{delivery.source}</TableCell>
              <TableCell>{delivery.destination}</TableCell>
              <TableCell>{delivery.weight}</TableCell>
              <TableCell>{delivery.id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* See More Button */}
      {visibleRows < deliveries.length && (
        <div className="flex justify-center mt-4">
          <Button
            className="bg-red-800 text-white hover:bg-red-900"
            onClick={handleLoadMore}
          >
            See More
          </Button>
        </div>
      )}
    </div>
  );
};

export default DeliveryDetails;
