import React, { Children } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Slidbar/sidebar";

const AdminLayout = ({ Children }) => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
      </div>
      <div className="flex-1 p-6 h-screen overflow-auto">{Children}</div>
    </>
  );
};

export default AdminLayout;
