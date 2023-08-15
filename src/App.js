import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./components/Main/Home";
import { Products } from "./components/Products/Products";
import { Departments } from "./components/Departments/Departments";
import { Sidebar } from "./components/Main/Sidebar";
import { ProductPage } from "./components/Products/ProductPage";
import { ProductForm } from "./components/Products/ProductForm";
function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/products/newproduct" element={<ProductForm />} />
      </Routes>
      <Link to="/departments"></Link>
      <Link to="/products"></Link>
      <Link to="/"></Link>
    </div>
  );
}

export default App;
