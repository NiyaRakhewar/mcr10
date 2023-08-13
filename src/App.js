import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./components/Main/Home";
import { Products } from "./components/Products/Products";
import { Departments } from "./components/Departments/Departments";
import { Sidebar } from "./components/Main/Sidebar";
function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Link to="/departments"></Link>
      <Link to="/products"></Link>
      <Link to="/"></Link>
    </div>
  );
}

export default App;
