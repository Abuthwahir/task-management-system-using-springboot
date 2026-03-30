import { Link } from 'react-router-dom';
import Footer from './Footer';
const ContactUs = () => {
  return (
    <div className="taskie-page">
      <section className="taskie-page-section">
        <div className="taskie-page-hero">
          <div className="taskie-page-copy">
            <span className="taskie-kicker">Contact TASKIE</span>
            <h1 className="taskie-page-title">
              Need help with setup, onboarding, or access? We are easy to reach.
            </h1>
            <p>
              Use the contact details below if you want support with the admin
              setup, project flow, or general platform questions. You can also
              jump straight to sign in or registration from here.
            </p>
            <div className="taskie-cta-group">
              <Link
                to="/user/login"
                className="taskie-button taskie-button-primary"
              >
                Sign In
              </Link>
              <Link
                to="/user/admin/register"
                className="taskie-button taskie-button-secondary"
              >
                Register
              </Link>
            </div>
          </div>

          <div className="taskie-contact-panel">
            <h3>Support details</h3>
            <ul className="taskie-contact-list">
              <li>Email: support@taskie.app</li>
              <li>Phone: +91 98765 43210</li>
              <li>Office Hours: Mon - Sat, 9:00 AM - 6:00 PM</li>
              <li>Response Time: Usually within one business day</li>
            </ul>
          </div>
        </div>

        <div className="taskie-contact-grid">
          <article className="taskie-info-card">
            <h3>Product help</h3>
            <p>
              Reach out if you need help understanding the admin, manager, or
              employee workflow inside TASKIE.
            </p>
          </article>

          <article className="taskie-info-card">
            <h3>Account assistance</h3>
            <p>
              We can help with registration, login questions, and basic
              onboarding guidance for first-time setup.
            </p>
          </article>

          <article className="taskie-info-card">
            <h3>General questions</h3>
            <p>
              Want to know how the platform fits your team? The About Us page
              and support contact are always available from the header and
              footer.
            </p>
          </article>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
