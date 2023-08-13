import React, { useState } from "react";
import "./sidebar.css";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const [colorChange, setColorChange] = useState("dashboard-white");
  const navigate = useNavigate();

  const clickHandlerDepartment = () => {
    navigate("/departments");
    setColorChange("departments-white");
  };

  const clickHandlerProducts = () => {
    navigate("/products");
    setColorChange("products-white");
  };

  const clickHandlerDashbord = () => {
    navigate("/");
    setColorChange("dashboard-white");
  };
  return (
    <div className="sidebar-container">
      <div className="sidebar-inner-container">
        <h4
          className={
            colorChange === "dashboard-white"
              ? "dashboard-white"
              : "dashboard-black"
          }
          onClick={clickHandlerDashbord}
        >
          Dashboard
        </h4>
        <h4
          className={
            colorChange === "departments-white"
              ? "departments-white"
              : "departments-black"
          }
          onClick={clickHandlerDepartment}
        >
          Departments
        </h4>
        <h4
          className={
            colorChange === "products-white"
              ? "products-white"
              : "products-black"
          }
          onClick={clickHandlerProducts}
        >
          Products
        </h4>
      </div>
    </div>
  );
};
