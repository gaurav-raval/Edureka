import React from "react";
import { Link } from "react-router-dom"; // Assuming React Router is used

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white fixed top-0 left-0">
      <h2 className="text-xl font-bold p-4 border-b border-gray-700">Actify</h2>
      <ul className="p-4 space-y-4">
        <li><Link to="/form" className="block px-4 py-2 hover:bg-gray-700">Add Profile</Link></li>
        <li><Link to="/" className="block px-4 py-2 hover:bg-gray-700">Table of emplyees</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
