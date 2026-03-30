import { Link } from 'react-router-dom';
import Footer from './Footer';

const AboutUs = () => {
  return (
    <div className="taskie-page">
      <section className="taskie-page-section">
        <div className="taskie-page-hero">
          <div className="taskie-page-copy">
            <span className="taskie-kicker">About TASKIE</span>
            <h1 className="taskie-page-title">
              Built to make project ownership obvious and teamwork calmer.
            </h1>
            <p>
              TASKIE is a role-based task management system for teams that need
              a simple operational flow. Instead of juggling separate tools for
              planning, staffing, and status tracking, the platform keeps
              admins, managers, and employees on the same page.
            </p>
            <div className="taskie-cta-group">
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

          <div className="taskie-page-panel">
            <h3>How the platform works</h3>
            <ul>
              <li>Admins create projects and assign them to managers.</li>
              <li>Managers register employees and distribute project work.</li>
              <li>Employees update project status as tasks move forward.</li>
              <li>Everyone works from one shared source of truth.</li>
            </ul>
          </div>
        </div>

        <div className="taskie-page-grid">
          <article className="taskie-value-card">
            <h3>Clarity first</h3>
            <p>
              Every role sees the right actions without extra clutter, so the
              workflow is easier to follow.
            </p>
          </article>

          <article className="taskie-value-card">
            <h3>Ownership that scales</h3>
            <p>
              Assign projects, people, and updates with a clean hierarchy from
              admin to employee.
            </p>
          </article>

          <article className="taskie-value-card">
            <h3>Faster delivery</h3>
            <p>
              Shared visibility reduces follow-up noise and helps teams focus on
              moving work to completion.
            </p>
          </article>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
