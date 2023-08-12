import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
export const Sidebar = () => {
  const clickHandlerDepartment = () => {
    <Link to="/productpage"></Link>;
  };
  return (
    <div className="sidebar-container">
      <div className="sidebar-inner-container">
        <h4 className="dashboard-white">Dashboard</h4>
        <h4 className="departments-black" onClick={clickHandlerDepartment}>
          Departments
        </h4>
        <h4 className="products-black">Products</h4>
      </div>
    </div>
  );
};
