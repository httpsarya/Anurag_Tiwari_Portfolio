import '../styles/footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <div className="footer-logo">
            Anurag<span>.</span>Tiwari
          </div>
          <p className="footer-copy">
            © {year} Anurag Tiwari. All rights reserved.
          </p>
        </div>

        <div className="footer-links">
          <a href="#about" className="footer-link">About</a>
          <a href="#expertise" className="footer-link">Expertise</a>
          <a href="#experience" className="footer-link">Experience</a>
          <a href="#contact" className="footer-link">Contact</a>
        </div>

        <div className="footer-social">
          <a
            href="https://www.linkedin.com/in/anurag-tiwari-91298518b"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="LinkedIn"
          >
            in
          </a>
          <a
            href="mailto:2cooltiwari@gmail.com"
            className="footer-social-link"
            aria-label="Email"
          >
            ✉
          </a>
          <a
            href="tel:+919911606303"
            className="footer-social-link"
            aria-label="Phone"
          >
            📞
          </a>
        </div>
      </div>
    </footer>
  );
}
