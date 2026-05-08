import { useEffect, useRef, useState } from 'react';
import '../styles/contact.css';

export default function Contact() {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll('.reveal');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    
    // Construct the email body
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    
    // Open the default email client
    window.location.href = `mailto:2cooltiwari@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Contact Form')}&body=${encodeURIComponent(body)}`;
    
    // Show confirmation and clear form
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="contact section" id="contact" ref={sectionRef}>
      <div className="container">
        <div className="reveal">
          <div className="section-label">Get in Touch</div>
          <h2 className="section-title">Let's Connect</h2>
        </div>

        <div className="contact-grid">
          <div className="contact-left">
            <p className="contact-text reveal reveal-delay-1">
              Whether you're looking for a strategic HR partner, exploring collaboration opportunities,
              or simply want to discuss workforce transformation — I'd love to hear from you.
            </p>

            <div className="contact-channels">
              <a
                href="tel:+919911606303"
                className="contact-channel reveal reveal-delay-2"
              >
                <div className="contact-channel-icon">📞</div>
                <div className="contact-channel-info">
                  <h4>Phone</h4>
                  <p>+91 9911 606 303</p>
                </div>
              </a>

              <a
                href="mailto:2cooltiwari@gmail.com"
                className="contact-channel reveal reveal-delay-3"
              >
                <div className="contact-channel-icon">✉️</div>
                <div className="contact-channel-info">
                  <h4>Email</h4>
                  <p>2cooltiwari@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/anurag-tiwari-91298518b"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel reveal reveal-delay-4"
              >
                <div className="contact-channel-icon">💼</div>
                <div className="contact-channel-info">
                  <h4>LinkedIn</h4>
                  <p>linkedin.com/in/anurag-tiwari</p>
                </div>
              </a>


            </div>
          </div>

          <form className="contact-form reveal reveal-delay-2" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  className="form-input"
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">
                  Email Address
                </label>
                <input
                  id="contact-email"
                  className="form-input"
                  type="email"
                  name="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="contact-subject">
                Subject
              </label>
              <input
                id="contact-subject"
                className="form-input"
                type="text"
                name="subject"
                placeholder="Collaboration Opportunity"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="contact-message">
                Message
              </label>
              <textarea
                id="contact-message"
                className="form-textarea"
                name="message"
                placeholder="Tell me about your project or opportunity..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="form-submit">
              {submitted ? '✓ Message Sent!' : 'Send Message →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
