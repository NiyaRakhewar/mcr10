import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../Context/ProductContext";
import "./productPage.css";
export const ProductPage = () => {
  const { id } = useParams();
  const { state } = useContext(ProductContext);

  const product = state.products?.find((el) => Number(el.id) === Number(id));

  return (
    <div className="product-page-outer-container">
      <div className="product-page-inner-container">
        <h1>{product.name}</h1>
        <img src={product.imageUrl} alt="" />
        <p>Price: {product.price}</p>
        <p>Stock: {product.stock}</p>
        <p>Supplier: {product.supplier}</p>
        <p>Department: {product.department}</p>
        <p>SKU: {product.sku}</p>
        <p>Delivered: {product.delivered}</p>
        <p>Description: {product.description}</p>
      </div>
    </div>
  );
};
