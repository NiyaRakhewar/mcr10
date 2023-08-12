import React, { useContext } from "react";
import "./dashboard.css";
import { ProductContext } from "../../Context/ProductContext";
export const Dashboard = () => {
  const { state } = useContext(ProductContext);

  const totalStock = state.products.reduce(
    (acc, product) => acc + product.stock,
    0
  );

  const totalDelivered = state.products.reduce(
    (acc, product) => acc + product.delivered,
    0
  );

  const lowStock = state.products.filter((product) => product.stock <= 10);

  console.log(totalStock);
  return (
    <div className="dashboard-container">
      <div className="dashboard-inner-container">
        <div>
          <h1 className="total-stock">{totalStock}</h1>
          <h3>Total Stock</h3>
        </div>
        <div>
          <h1 className="total-delivered">{totalDelivered}</h1>
          <h3>Total Delivered</h3>
        </div>
        <div>
          <h1 className="low-stock">{lowStock.length}</h1>
          <h3>Low Stock Items</h3>
        </div>
      </div>
    </div>
  );
};
