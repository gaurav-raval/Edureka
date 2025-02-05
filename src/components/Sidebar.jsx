import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-4 bg-gray-800 text-white w-full flex items-center"
      >
        <FaBars className="mr-2" /> Menu
      </button>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 p-4 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 transition-transform`}>
        <h2 className="text-xl font-bold p-4 border-b border-gray-700">Actify</h2>
        <ul className="p-4 space-y-4">
          <li><Link to="/" className="block px-4 py-2 hover:bg-gray-700">Table</Link></li>
          <li><Link to="/Form" className="block px-4 py-2 hover:bg-gray-700">Add Profile</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
