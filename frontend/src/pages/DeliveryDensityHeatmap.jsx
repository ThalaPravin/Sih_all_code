import React from "react";
import { GoogleMap, useJsApiLoader, HeatmapLayerF } from "@react-google-maps/api";

const DeliveryDensityHeatmap = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyD_8jnLrih5VTanXsxpTAM6KPD7kn9x_vM", // Replace with your actual API key
    libraries: ["visualization"], // Include the visualization library for heatmap
  });

  // Map Container Style
  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  // Center of the Map
  const center = {
    lat: 20.5937, // Approx. center of India
    lng: 78.9629,
  };

  if (!isLoaded) return <div>Loading...</div>;

  // Heatmap Data (Example Locations) - Initialize only when the API is loaded
  const heatmapData = [
    { location: new window.google.maps.LatLng(28.7041, 77.1025), weight: 10 }, // Delhi
    { location: new window.google.maps.LatLng(19.076, 72.8777), weight: 8 },  // Mumbai
    { location: new window.google.maps.LatLng(13.0827, 80.2707), weight: 6 }, // Chennai
    { location: new window.google.maps.LatLng(22.5726, 88.3639), weight: 5 }, // Kolkata
    { location: new window.google.maps.LatLng(12.9716, 77.5946), weight: 7 }, // Bangalore
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h3 className="text-xl font-bold mb-4">Delivery Density Heatmap</h3>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={5}>
        <HeatmapLayerF data={heatmapData} />
      </GoogleMap>
    </div>
  );
};

export default DeliveryDensityHeatmap;
