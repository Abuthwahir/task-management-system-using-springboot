import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { clearActiveUserSession } from "../utils/authSession";

const AdminHeader = () => {
  const navigate = useNavigate();

  const adminLogout = () => {
    toast.success("logged out!!!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    clearActiveUserSession("admin");

    navigate("/home");
  };

  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 taskie-role-nav">
      <li className="nav-item">
        <Link
          to="/user/manager/register"
          className="nav-link"
          aria-current="page"
        >
          Register Manager
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/user/admin/project/add"
          className="nav-link"
          aria-current="page"
        >
          Add Project
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/user/admin/project/all"
          className="nav-link"
          aria-current="page"
        >
          All Projects
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/user/admin/manager/all"
          className="nav-link"
          aria-current="page"
        >
          View Managers
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/user/employee/all"
          className="nav-link"
          aria-current="page"
        >
          View Employees
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/user/change/password"
          className="nav-link"
          aria-current="page"
        >
          Change Password
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/home" className="nav-link" aria-current="page" onClick={adminLogout}>
          Logout
        </Link>
        <ToastContainer />
      </li>
    </ul>
  );
};

export default AdminHeader;
