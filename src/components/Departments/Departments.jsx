import React, { useContext } from "react";
import { ProductContext } from "../../Context/ProductContext";
import "./departments.css";
import { useNavigate } from "react-router-dom";

export const Departments = () => {
  const navigate = useNavigate();

  const { state, dispatch } = useContext(ProductContext);

  const departmentArray = state.products.map(({ department }) => department);
  const departments = [...new Set(departmentArray)];

  const clickHandler = (dept) => {
    navigate("/products");
    dispatch({ type: "CURRENT_DEPT", payload: dept });
  };

  return (
    <div className="departments-container">
      <div className="departments-inner-container">
        {departments.map((department) => {
          return (
            <div key={department} className="departments-card">
              <h2 onClick={() => clickHandler(department)}>{department}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};
