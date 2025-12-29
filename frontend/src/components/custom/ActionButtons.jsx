import React from "react";

const ActionButtons = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h3 className="text-xl font-bold mb-4">Actions</h3>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        {/* Assign Deliveries */}
        <button
          className="w-full sm:w-auto px-6 py-3 bg-red-800 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition flex items-center gap-2"
        >
          <span className="text-2xl">
            <i className="fa-solid fa-truck"></i>
          </span>
          Assign Deliveries
        </button>

        {/* Generate QR Codes */}
        <button
          className="w-full sm:w-auto px-6 py-3 bg-red-800 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition flex items-center gap-2"
        >
          <span className="text-2xl">
            <i className="fa-solid fa-qrcode"></i>
          </span>
          Generate QR Codes
        </button>

        {/* Manage Postmen */}
        <button
          className="w-full sm:w-auto px-6 py-3 bg-red-800 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition flex items-center gap-2"
        >
          <span className="text-2xl">
            <i className="fa-solid fa-user-tie"></i>
          </span>
          Manage Postmen
        </button>
      </div>
    </div>
  );
};

export default ActionButtons;
