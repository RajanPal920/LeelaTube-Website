import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Quote.css';

const INITIAL_STATE = {
  name: '', company: '', email: '', phone: '',
  product: '', grade: '', od: '', wallThickness: '',
  length: '', quantity: '', application: '', standard: '',
  message: '', file: null,
};

export default function Quote() {
  const [form, setForm]       = useState(INITIAL_STATE);
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName]   = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm((prev) => ({ ...prev, file }));
      setFileName(file.name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production: connect to backend / email service
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <div className="quote-page">
        <section className="page-hero">
          <div className="container page-hero__content">
            <h1 className="display-lg">Thank You</h1>
          </div>
        </section>
        <section className="section">
          <div className="container" style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto' }}>
            <div className="quote-success-icon">✓</div>
            <h2 className="display-md" style={{ margin: '24px 0 16px' }}>Enquiry Submitted</h2>
            <p className="body-lg">
              Thank you for your enquiry. Our team will review your requirement and respond to you shortly.
            </p>
            <Link to="/" className="btn btn--primary" style={{ marginTop: '32px' }}>
              Return to Home
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="quote-page">

      <section className="page-hero">
        <div className="container page-hero__content">
          <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span>/</span><span>Request a Quote</span>
          </nav>
          <h1 className="display-lg">Request a Quote</h1>
          <p>Send us your requirement and our team will respond with product information and pricing.</p>
        </div>
      </section>

      <section className="section quote-main">
        <div className="container quote-main__grid">

          {/* Sidebar */}
          <aside className="quote-sidebar">
            <div className="quote-sidebar__card card">
              <h3 className="heading-sm" style={{ marginBottom: '16px' }}>Why Enquire With Us?</h3>
              {[
                'ISO 9001 : 2008 Certified Company',
                'Products engineered to your specifications',
                'ERW stainless-steel manufacturing',
                'High-tech Daman facility with testing lab',
                'Experienced engineers & technical team',
              ].map((item) => (
                <div className="quote-sidebar__item" key={item}>
                  <div className="quote-sidebar__dot" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <div className="quote-sidebar__card card quote-sidebar__contact">
              <h4 className="heading-sm" style={{ marginBottom: '12px' }}>Prefer Direct Contact?</h4>
              <p className="body-sm" style={{ fontWeight: 600, color: 'var(--dark-gray)', marginBottom: '6px' }}>
                Parag P. Dosshi (Director)
              </p>
              <a href="tel:+919820131217" className="quote-sidebar__email" style={{ marginBottom: '8px' }}>
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.68l1.1 3.29a1 1 0 01-.23 1.02L7.5 9.5a11 11 0 005 5l1.51-1.6a1 1 0 011.02-.23l3.29 1.1A1 1 0 0119 14.72V17a2 2 0 01-2 2A16 16 0 013 5z" stroke="currentColor" strokeWidth="1.5"/></svg>
                +91 98201 31217
              </a>
              <a href="tel:+912266368197" className="quote-sidebar__email" style={{ marginBottom: '8px' }}>
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.68l1.1 3.29a1 1 0 01-.23 1.02L7.5 9.5a11 11 0 005 5l1.51-1.6a1 1 0 011.02-.23l3.29 1.1A1 1 0 0119 14.72V17a2 2 0 01-2 2A16 16 0 013 5z" stroke="currentColor" strokeWidth="1.5"/></svg>
                +91-22-66368197 / 66316748
              </a>
              <a href="mailto:info@leelatubes.com" className="quote-sidebar__email">
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M2 5l8 5 8-5M2 5v10a1 1 0 001 1h14a1 1 0 001-1V5M2 5a1 1 0 011-1h14a1 1 0 011 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                info@leelatubes.com
              </a>
              <Link to="/contact" className="btn btn--outline-green" style={{ marginTop: '14px', width: '100%', justifyContent: 'center', fontSize: '0.78rem' }}>
                View All Contact Details
              </Link>
            </div>
          </aside>

          {/* Form */}
          <div className="quote-form-wrap">
            <form
              className="quote-form card"
              id="quote-form"
              onSubmit={handleSubmit}
              noValidate
              aria-label="Request a Quote form"
            >
              <h2 className="heading-lg" style={{ marginBottom: '4px' }}>Get a Quote</h2>
              <p className="body-sm" style={{ marginBottom: '32px' }}>
                Send us your requirement and our experts will get back to you.
              </p>

              {/* ── Contact details ── */}
              <fieldset className="quote-fieldset">
                <legend className="quote-legend">Contact Information</legend>
                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="quote-name">Name *</label>
                    <input id="quote-name" name="name" type="text" className="form-control" value={form.name} onChange={handleChange} placeholder="Your full name" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="quote-company">Company Name *</label>
                    <input id="quote-company" name="company" type="text" className="form-control" value={form.company} onChange={handleChange} placeholder="Your company" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="quote-email">Email *</label>
                    <input id="quote-email" name="email" type="email" className="form-control" value={form.email} onChange={handleChange} placeholder="your@company.com" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="quote-phone">Phone</label>
                    <input id="quote-phone" name="phone" type="tel" className="form-control" value={form.phone} onChange={handleChange} placeholder="+91 ..." />
                  </div>
                </div>
              </fieldset>

              {/* ── Product requirement ── */}
              <fieldset className="quote-fieldset">
                <legend className="quote-legend">Product Requirement</legend>
                <div className="form-group" style={{ marginBottom: '16px' }}>
                  <label className="form-label" htmlFor="quote-product">Product *</label>
                  <select id="quote-product" name="product" className="form-control" value={form.product} onChange={handleChange} required>
                    <option value="">— Select Product —</option>
                    <option value="round-tube">Round Tube</option>
                    <option value="square-tube">Square Tube</option>
                    <option value="rectangular-tube">Rectangular Tube</option>
                    <option value="oval-tube">Oval Tube</option>
                    <option value="other">Other / Multiple Products</option>
                  </select>
                </div>
                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="quote-grade">Material / Grade</label>
                    <input id="quote-grade" name="grade" type="text" className="form-control" value={form.grade} onChange={handleChange} placeholder="e.g. SS 304, 316L, or as required" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="quote-od">Size / OD</label>
                    <input id="quote-od" name="od" type="text" className="form-control" value={form.od} onChange={handleChange} placeholder="e.g. 25 mm OD or as required" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="quote-wall">Wall Thickness</label>
                    <input id="quote-wall" name="wallThickness" type="text" className="form-control" value={form.wallThickness} onChange={handleChange} placeholder="e.g. 2 mm or as required" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="quote-length">Length</label>
                    <input id="quote-length" name="length" type="text" className="form-control" value={form.length} onChange={handleChange} placeholder="e.g. 6 m or as specified" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="quote-quantity">Quantity</label>
                    <input id="quote-quantity" name="quantity" type="text" className="form-control" value={form.quantity} onChange={handleChange} placeholder="e.g. 500 kg, 100 pieces" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="quote-standard">Specification / Standard</label>
                    <input id="quote-standard" name="standard" type="text" className="form-control" value={form.standard} onChange={handleChange} placeholder="e.g. as per drawing or standard" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="quote-application">Application</label>
                  <input id="quote-application" name="application" type="text" className="form-control" value={form.application} onChange={handleChange} placeholder="Intended use or industry" />
                </div>
              </fieldset>

              {/* ── Message and attachment ── */}
              <fieldset className="quote-fieldset">
                <legend className="quote-legend">Additional Information</legend>
                <div className="form-group" style={{ marginBottom: '16px' }}>
                  <label className="form-label" htmlFor="quote-message">Message / Requirement Details</label>
                  <textarea id="quote-message" name="message" className="form-control" rows="5" value={form.message} onChange={handleChange} placeholder="Describe your requirement, any special conditions, or other details..." />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="quote-file">Upload Drawing / Specification / PO / Requirement</label>
                  <div className="file-upload-wrap">
                    <label className="file-upload-btn" htmlFor="quote-file">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      Choose File
                    </label>
                    <span className="file-upload-name">{fileName || 'No file chosen'}</span>
                    <input id="quote-file" name="file" type="file" style={{ display: 'none' }} onChange={handleFile} accept=".pdf,.dwg,.dxf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png" />
                  </div>
                  <p className="body-sm" style={{ marginTop: '6px' }}>Accepted: PDF, DWG, DXF, DOC, XLS, JPG, PNG</p>
                </div>
              </fieldset>

              <button type="submit" id="quote-submit-btn" className="btn btn--primary quote-form__submit">
                Send Enquiry <span className="btn-icon">→</span>
              </button>

              <p className="body-sm quote-form__note">
                Your information is used only to respond to your enquiry and will not be shared with third parties.
              </p>
            </form>
          </div>

        </div>
      </section>

    </div>
  );
}
