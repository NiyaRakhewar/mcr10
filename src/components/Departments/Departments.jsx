import React, { useContext } from "react";
import { ProductContext } from "../../Context/ProductContext";
import "./departments.css";

export const Departments = () => {
  const { state } = useContext(ProductContext);

  const departmentArray = state.products.map(({ department }) => department);
  const departments = [...new Set(departmentArray)];

  return (
    <div className="departments-container">
      <div className="departments-inner-container">
        {departments.map((department) => {
          return (
            <div key={department} className="departments-card">
              <h2> {department}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};
