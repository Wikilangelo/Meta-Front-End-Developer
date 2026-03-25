function ContactPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <h1>Contact Us</h1>
          <p>
            Get in touch with the Little Lemon team. We'd love to hear from you!
          </p>
        </div>

        <div className="contact-info">
          <div className="contact-section">
            <h3>📍 Address</h3>
            <p>
              Little Lemon Restaurant
              <br />
              123 Mediterranean Ave
              <br />
              Chicago, IL 60601
            </p>
          </div>

          <div className="contact-section">
            <h3>📞 Phone & Email</h3>
            <p>
              Phone: <a href="tel:+15551234567">+1 (555) 123-4567</a>
              <br />
              Email:{" "}
              <a href="mailto:hello@littlelemon.com">hello@littlelemon.com</a>
            </p>
          </div>

          <div className="contact-section">
            <h3>🕐 Hours</h3>
            <p>
              Monday - Thursday: 11:00 AM - 10:00 PM
              <br />
              Friday - Saturday: 11:00 AM - 11:00 PM
              <br />
              Sunday: 12:00 PM - 9:00 PM
            </p>
          </div>

          <div className="contact-section">
            <h3>📱 Follow Us</h3>
            <div className="social-links">
              <a
                href="https://www.facebook.com/littlelemon"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/littlelemon"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                Instagram
              </a>
              <a
                href="https://twitter.com/littlelemon"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
