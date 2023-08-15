import { useContext, useState } from "react";
import "./productForm.css";
import { ProductContext } from "../../Context/ProductContext";
import { v4 as uuid } from "uuid";

import { useNavigate } from "react-router-dom";

export const ProductForm = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(ProductContext);
  const [newProduct, setNewProduct] = useState({
    id: uuid,
    department: "",
    name: "",
    description: "",
    price: "",
    stock: "",
    sku: "",
    supplier: "",
    delivered: 0,
    imageUrl: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({ type: "NEW_PRODUCT", payload: newProduct });
    // Handle submitting the new product data to your inventory here
    console.log("New product:", newProduct);
    // Reset the form after submission
    setNewProduct({
      id: uuid,
      department: "",
      name: "",
      description: "",
      price: "",
      stock: "",
      sku: "",
      supplier: "",
      delivered: 0,
      imageUrl: "",
    });

    navigate("/products");
  };

  return (
    <form onSubmit={handleSubmit} className="add-product-form">
      <h2>Add New Product</h2>
      <label>
        Department:
        <input
          type="text"
          name="department"
          value={newProduct.department}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Product Name:
        <input
          type="text"
          name="name"
          value={newProduct.name}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Description:
        <textarea
          name="description"
          value={newProduct.description}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          name="price"
          value={newProduct.price}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Stock (Quantity):
        <input
          type="number"
          name="stock"
          value={newProduct.stock}
          onChange={handleInputChange}
        />
      </label>
      <label>
        SKU (Stocking Unit):
        <input
          type="text"
          name="sku"
          value={newProduct.sku}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Supplier Name:
        <input
          type="text"
          name="supplier"
          value={newProduct.supplier}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Item Image URL:
        <input
          type="text"
          name="imageUrl"
          value={newProduct.imageUrl}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Add Product</button>
    </form>
  );
};
