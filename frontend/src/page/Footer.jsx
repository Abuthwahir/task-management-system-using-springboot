import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="taskie-footer">
      <div className="taskie-footer-shell">
        <div className="taskie-footer-grid">
          <div className="taskie-footer-brand">
            <h3>TASKIE</h3>
            <p>
              TASKIE is a cleaner task management system for admins, managers,
              and employees to plan work, assign ownership, and keep delivery
              visible from start to finish.
            </p>
            <div className="taskie-footer-actions">
              <Link
                to="/user/admin/register"
                className="taskie-button taskie-button-primary"
              >
                Register
              </Link>
              <Link
                to="/user/login"
                className="taskie-button taskie-button-secondary"
              >
                Sign In
              </Link>
            </div>
          </div>

          <div className="taskie-footer-column">
            <h4>Navigate</h4>
            <Link to="/" className="taskie-footer-link">
              Home
            </Link>
            <Link to="/about" className="taskie-footer-link">
              About Us
            </Link>
            <Link to="/contact" className="taskie-footer-link">
              Contact Us
            </Link>
          </div>

          <div className="taskie-footer-column">
            <h4>Platform Flow</h4>
            <span>1. Register your admin workspace</span>
            <span>2. Create projects and assign managers</span>
            <span>3. Add employees and track status updates</span>
          </div>

          <div className="taskie-footer-column">
            <h4>Reach Us</h4>
            <span>support@taskie.app</span>
            <span>+91 98765 43210</span>
            <span>Mon - Sat, 9:00 AM - 6:00 PM</span>
          </div>
        </div>

        <hr className="taskie-footer-divider" />

        <div className="taskie-footer-bottom">
          <span>&copy; {year} TASKIE Task Management System</span>
          <span>Built to replace clutter with clear project ownership.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
