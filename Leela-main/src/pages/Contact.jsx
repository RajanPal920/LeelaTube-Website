import { Link } from "react-router-dom";
import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id.replace("contact-", "")]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailTo = "info@leelatubes.com";
    const emailSubject = formData.subject || "New Contact Form Submission";

    const emailBody = `
Name: ${formData.name}
Company: ${formData.company || "N/A"}
Email: ${formData.email}
Phone: ${formData.phone || "N/A"}

Message:
${formData.message}

---
Sent from Leela Tubes Website Contact Form
    `.trim();

    const mailtoLink = `mailto:${emailTo}?subject=${encodeURIComponent(
      emailSubject,
    )}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-page">
      {/* ================= HERO ================= */}
      <section className="page-hero">
        <div className="page-hero__image-wrap">
          <img
            src="/images/factoryImg/image.png"
            alt="Leela Tubes Facility - Contact Us"
            className="page-hero__image"
          />
        </div>
        <div className="page-hero__overlay"></div>
        <div className="container page-hero__content">
          <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Contact Us</span>
          </nav>
          <h1 className="display-lg">Contact Us</h1>
          <p>
            Get in touch with the Leela Tubes team for product enquiries,
            technical questions or quotation requests.
          </p>
        </div>
      </section>

      {/* ================= CONTACT INFO + FORM ================= */}
      <section className="section contact-main">
        <div className="container contact-main__grid">
          {/* Info column */}
          <div className="contact-info">
            <p className="section-label">Contact Details</p>
            <h2 className="display-md" style={{ margin: "12px 0 8px" }}>
              Leela Tubes
              <br />
              Private Limited
            </h2>
            <p
              className="body-sm"
              style={{
                color: "var(--green-brand)",
                fontWeight: 600,
                marginBottom: "28px",
              }}
            >
              An ISO 9001 : 2008 Certified Company
            </p>

            {/* Key Personnel Card */}
            <div className="contact-personnel-card card">
              <div className="contact-personnel__avatar">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="12"
                    cy="7"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <div className="contact-personnel__info">
                <span className="contact-personnel__role">
                  Director / Management
                </span>
                <h3 className="contact-personnel__name">Parag P. Dosshi</h3>
                <a
                  href="tel:+919820131217"
                  className="contact-personnel__phone"
                >
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.68l1.1 3.29a1 1 0 01-.23 1.02L7.5 9.5a11 11 0 005 5l1.51-1.6a1 1 0 011.02-.23l3.29 1.1A1 1 0 0119 14.72V17a2 2 0 01-2 2A16 16 0 013 5z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                  +91 98201 31217
                </a>
              </div>
            </div>

            {/* Corporate Office Mumbai */}
            <div className="contact-detail">
              <div className="contact-detail__icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 21h18M5 21V7l8-4v18M13 7l6 3v11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="contact-detail__content">
                <h4 className="contact-detail__label">
                  Corporate Office (Mumbai)
                </h4>
                <p className="contact-detail__value">
                  Balkrishna Niwas, 1st Floor,
                  <br />
                  2nd Panjarapole Lane, C. P. Tank Road,
                  <br />
                  Mumbai - 400 004. India.
                </p>
              </div>
            </div>

            {/* Manufacturing Works Daman */}
            <div className="contact-detail">
              <div className="contact-detail__icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="12"
                    cy="9"
                    r="2.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <div className="contact-detail__content">
                <h4 className="contact-detail__label">
                  Manufacturing Plant (Daman)
                </h4>
                <p className="contact-detail__value">
                  Village Dabhel, Daman – 396 210
                  <br />
                  Union Territory of Daman &amp; Diu, India.
                </p>
              </div>
            </div>

            {/* Telephone & Fax */}
            <div className="contact-detail">
              <div className="contact-detail__icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.68l1.1 3.29a1 1 0 01-.23 1.02L7.5 9.5a11 11 0 005 5l1.51-1.6a1 1 0 011.02-.23l3.29 1.1A1 1 0 0119 14.72V17a2 2 0 01-2 2A16 16 0 013 5z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <div className="contact-detail__content">
                <h4 className="contact-detail__label">Telephone &amp; Fax</h4>
                <p className="contact-detail__value">
                  <strong>Tel:</strong>{" "}
                  <a href="tel:+912266368197" className="contact-detail__link">
                    +91-22-66368197
                  </a>
                  ,{" "}
                  <a href="tel:+912266316748" className="contact-detail__link">
                    66316748
                  </a>
                  <br />
                  <strong>Fax:</strong> +91-22-66368196
                </p>
              </div>
            </div>

            {/* Email & Web */}
            <div className="contact-detail">
              <div className="contact-detail__icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M22 6l-10 7L2 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="contact-detail__content">
                <h4 className="contact-detail__label">Email &amp; Website</h4>
                <p className="contact-detail__value">
                  <a
                    href="mailto:info@leelatubes.com"
                    className="contact-detail__link"
                  >
                    info@leelatubes.com
                  </a>
                  <br />
                  <a
                    href="http://www.leelatubes.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-detail__link"
                  >
                    www.leelatubes.com
                  </a>
                </p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="contact-detail">
              <div className="contact-detail__icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M12 6v6l4 2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="contact-detail__content">
                <h4 className="contact-detail__label">Business Hours</h4>
                <p className="contact-detail__value">
                  Monday – Saturday: 9:30 AM – 6:30 PM IST
                </p>
              </div>
            </div>
          </div>

          {/* Quick enquiry form */}
          <div className="contact-form-wrap">
            <div className="contact-form-card card">
              <h3 className="heading-lg" style={{ marginBottom: "8px" }}>
                Send Us a Message
              </h3>
              <p className="body-sm" style={{ marginBottom: "28px" }}>
                For a detailed quotation, use the{" "}
                <Link
                  to="/quote"
                  style={{ color: "var(--green-brand)", fontWeight: 600 }}
                >
                  Request a Quote
                </Link>{" "}
                form.
              </p>
              <form
                className="contact-form"
                id="contact-form"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-name">
                      Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      className="form-control"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-company">
                      Company
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      className="form-control"
                      placeholder="Company name"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-email">
                      Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      className="form-control"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-phone">
                      Phone
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      className="form-control"
                      placeholder="+91 ..."
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-subject">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    className="form-control"
                    placeholder="How can we help?"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-message">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    className="form-control"
                    rows="5"
                    placeholder="Your message or requirement..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  id="contact-submit-btn"
                  className="btn btn--primary contact-form__submit"
                >
                  Send Message <span className="btn-icon">→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FULL WIDTH MAP SECTION (Grid ke Bahar) ================= */}
      <section className="section contact-map-section">
        <div className="container">
          {/* Address Header */}
          <div className="contact-map-header">
            <p className="section-label">Our Location</p>
            <h2 className="display-md">Corporate Office (Mumbai)</h2>
            <p className="contact-map-address">
              Balkrishna Niwas, 1st Floor, 2nd Panjarapole Lane, C. P. Tank
              Road, Mumbai - 400 004. India.
            </p>
          </div>

          {/* Map */}
          <div className="contact-map-embed-full">
            <iframe
              title="Leela Tubes Corporate Office - Mumbai"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.448946779821!2d72.81862031489844!3d18.95745698716746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce1e3b3b3b3b%3A0x3b3b3b3b3b3b3b3b!2sC.P.%20Tank%20Road%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
