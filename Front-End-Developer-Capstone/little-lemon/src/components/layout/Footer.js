function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>Little Lemon</h3>
          <p>Fresh flavors, warm hospitality, memorable moments.</p>
        </div>

        <div>
          <h4>Navigation</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul>
            <li>Chicago, IL</li>
            <li>+1 555 123 4567</li>
            <li>
              <a href="mailto:hello@littlelemon.com">hello@littlelemon.com</a>
            </li>
          </ul>
        </div>

        <div>
          <h4>Follow Us</h4>
          <ul>
            <li>
              <a
                href="https://www.instagram.com/littlelemon"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/littlelemon"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/littlelemon"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-copyright">
        <span>Developed by Michelangelo Bonvini.</span>
        <p>© 2026 Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
