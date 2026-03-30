import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { clearActiveUserSession } from '../utils/authSession';

const ManagerHeader = () => {
  const navigate = useNavigate();

  const managerLogout = () => {
    toast.success('logged out!!!', {
      position: 'top-center',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    clearActiveUserSession('manager');
    navigate('/home');
  };

  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 taskie-role-nav">
      <li className="nav-item">
        <Link
          to="/user/manager/project/all"
          className="nav-link"
          aria-current="page"
        >
          My Projects
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/user/employee/register"
          className="nav-link"
          aria-current="page"
        >
          Register Employee
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/user/employee/all" className="nav-link" aria-current="page">
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
        <Link
          to="/home"
          className="nav-link"
          aria-current="page"
          onClick={managerLogout}
        >
          Logout
        </Link>
        <ToastContainer />
      </li>
    </ul>
  );
};

export default ManagerHeader;
