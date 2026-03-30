import { Link } from "react-router-dom";

const NormalHeader = () => {
  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 taskie-auth-nav">
      <li className="nav-item">
        <Link
          to="/user/admin/register"
          className="taskie-nav-button taskie-nav-button-secondary"
          aria-current="page"
        >
          Register
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/user/login"
          className="taskie-nav-button taskie-nav-button-primary"
          aria-current="page"
        >
          Sign In
        </Link>
      </li>
    </ul>
  );
};

export default NormalHeader;
