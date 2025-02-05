import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <div className="md:ml-64 p-4 w-full">{children}</div>
    </div>
  );
};

export default Layout;
