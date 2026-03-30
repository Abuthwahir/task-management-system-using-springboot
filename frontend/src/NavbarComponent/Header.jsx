import { Link } from 'react-router-dom';
import logo from '../images/task_logo.png';
import RoleNav from './RoleNav';

const Header = () => {
  return (
    <div className="taskie-site-header">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid taskie-header-shell">
          <Link to="/" className="navbar-brand taskie-brand">
            <img src={logo} className="taskie-brand-mark" alt="TASKIE logo" />
            <span className="taskie-brand-copy">
              <span className="taskie-brand-name">TASKIE</span>
              <span className="taskie-brand-subtitle">
                Task Management System
              </span>
            </span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 taskie-primary-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link" aria-current="page">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/about" className="nav-link" aria-current="page">
                  About Us
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/contact" className="nav-link" aria-current="page">
                  Contact Us
                </Link>
              </li>
            </ul>

            <RoleNav />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
