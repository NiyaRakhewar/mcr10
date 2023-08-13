import React, { useContext, useState } from "react";
import "./product.css";
import { ProductContext } from "../../Context/ProductContext";
export const Products = () => {
  const { state } = useContext(ProductContext);

  const [data, setData] = useState([...state.products]);

  const changeHandler = (value) => {
    console.log("clicked", value);
    const filteredData =
      value === "All Departments"
        ? [...state.products]
        : [...state.products].filter(({ department }) => department === value);
    setData(filteredData);
  };

  const clickCheckboxHandler = (e) => {
    const isChecked = e.target.checked;

    const filteredData = isChecked
      ? [...state.products].filter(({ stock }) => stock <= 10)
      : [...state.products];

    setData(filteredData);
  };

  const changeHandlerByOption = (value) => {
    // const type = value.toLowerCase();
    const filteredData =
      value === "Name"
        ? [...state.products].sort((a, b) => {
            let nameA = a.name;
            let nameB = b.name;
            return nameA - nameB;
          })
        : [...state.products].sort((a, b) => {
            let typeA = a.type;
            let typeB = b.type;
            return typeA - typeB;
          });
    setData(filteredData);
  };
  const departmentArray = state.products.map(({ department }) => department);
  const departments = [...new Set(departmentArray)];

  console.log("dept", state?.departments);
  return (
    <div>
      <div className="products-outer-container">
        <div className="product-inner-container">
          <div className="product-filters">
            <h3>Products</h3>

            <select
              onChange={(e) => changeHandler(e.target.value)}
              className="dept-dropdown-container"
            >
              <option>All Departments</option>
              {departments?.map((dept) => (
                <option>{dept}</option>
              ))}
            </select>
            <label className="checkbox">
              <input type="checkbox" onClick={(e) => clickCheckboxHandler(e)} />
              Low Stock Items
            </label>
            <select
              className="option-dropdown-container"
              onChange={(e) => changeHandlerByOption(e.target.value)}
            >
              <option>Name</option>
              <option>Price</option>
              <option>Stock</option>
            </select>
            <button className="new-btn">New</button>
          </div>
          <div className="products-container">
            <table>
              <tr>
                <th className="th-img">Image</th>
                <th className="th-name">Name</th>
                <th className="th-desc">Description</th>
                <th className="th-price">Price</th>
                <th className="th-stock">Stock</th>
                <th className="th-supplier">Supplier</th>
              </tr>
              {data?.map((product, key) => {
                return (
                  <tr key={key}>
                    <td className="td-img">
                      <img src={product.imageUrl} alt="" />
                    </td>
                    <td className="td-name">{product.name}</td>
                    <td className="td-desc">{product.description}</td>
                    <td className="td-price">{product.price}</td>
                    <td className="td-stock">{product.stock}</td>
                    <td className="td-supplier">{product.supplier}</td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
