import React, { useContext, useState } from "react";
import "./product.css";
import { ProductContext } from "../../Context/ProductContext";
import { useNavigate } from "react-router-dom";
export const Products = () => {
  const navigate = useNavigate();
  const { state } = useContext(ProductContext);

  const [dept, setDept] = useState(state.currentDept);

  const [check, setCheck] = useState(false);

  const [sort, setSort] = useState("Name");

  console.log("currdept", state.currentDept);

  const changeHandler = (value) => {
    console.log("clicked", value);

    setDept(value);
  };

  const filteredData =
    dept === "All Departments"
      ? state.products
      : state.products.filter(({ department }) => department === dept);

  const clickCheckboxHandler = (e) => {
    const isChecked = e.target.checked;

    setCheck(isChecked);
  };

  const filteredCheckedData = check
    ? filteredData.filter(({ stock }) => stock <= 10)
    : filteredData;

  const changeHandlerByOption = (value) => {
    // const type = value.toLowerCase();

    setSort(value);
  };

  const filteredSortBy =
    sort === "Name"
      ? [...filteredCheckedData].sort((a, b) => a.name.localeCompare(b.name))
      : sort === "Price"
      ? [...filteredCheckedData].sort((a, b) => a.price - b.price)
      : sort === "Stock" &&
        [...filteredCheckedData].sort((a, b) => a.stock - b.stock);

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
              {state.currentDept ? (
                <option>{state.currentDept}</option>
              ) : (
                <option>All Departments</option>
              )}
              {!state.currentDept ? (
                <option>{state.currentDept}</option>
              ) : (
                <option>All Departments</option>
              )}

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
            <button
              className="new-btn"
              onClick={() => navigate("/products/newproduct")}
            >
              New
            </button>
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
              {filteredSortBy?.map((product, key) => {
                return (
                  <tr key={key}>
                    <td className="td-img">
                      <img src={product.imageUrl} alt="" />
                    </td>
                    <td
                      className="td-name"
                      onClick={() => navigate(`/products/${product.id}`)}
                    >
                      {product.name}
                    </td>
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
