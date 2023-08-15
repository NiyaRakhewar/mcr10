import "./sidebar.css";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const navigate = useNavigate();

  const clickHandlerDepartment = () => {
    navigate("/departments");
  };

  const clickHandlerProducts = () => {
    navigate("/products");
  };

  const clickHandlerDashbord = () => {
    navigate("/");
  };
  return (
    <div className="sidebar-container">
      <div className="sidebar-inner-container">
        <h4 className="dashboard-black" onClick={clickHandlerDashbord}>
          Dashboard
        </h4>
        <h4 className="departments-black" onClick={clickHandlerDepartment}>
          Departments
        </h4>
        <h4 className="products-black" onClick={clickHandlerProducts}>
          Products
        </h4>
      </div>
    </div>
  );
};
