import { Link } from 'react-router-dom';
import './About.css';

export default function About() {
  return (
    <div className="about-page">

      {/* Page hero */}
      <section className="page-hero">
        <div className="container page-hero__content">
          <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span>/</span><span>About Us</span>
          </nav>
          <h1 className="display-lg">About Leela Tubes</h1>
          <p>An established ERW stainless‑steel pipe and tube manufacturer based in Daman, India.</p>
        </div>
      </section>

      {/* Company story */}
      <section className="section about-story">
        <div className="container about-story__grid">
          <div className="about-story__img-wrap">
            <img
              src="/images/about-facility.webp"
              alt="Stainless steel tubes in a manufacturing facility"
              className="about-story__img"
            />
          </div>
          <div className="about-story__content">
            <p className="section-label">Our Story</p>
            <h2 className="display-md">Built on Manufacturing Expertise</h2>
            <p className="body-lg">
              <strong>Leela Tubes Private Limited</strong> was incorporated on 7 April 2000 and is an
              <strong> ISO 9001 : 2008 Certified Company</strong>, recognized as a dedicated manufacturer
              of ERW stainless‑steel pipes and tubes. Over more than two decades, the company has developed
              its core competence in manufacturing and works closely to understand and fulfill the exact
              requirements of its clients.
            </p>
            <p className="body-lg">
              Headquartered with its Corporate Office in <strong>Mumbai</strong> and a high-tech manufacturing
              facility in <strong>Village Dabhel, Daman</strong>, Leela Tubes is guided by executive leadership
              under Director <strong>Parag P. Dosshi</strong>.
            </p>
            <p className="body-lg">
              Quality is achieved through the implementation of latest technology, decades of
              experience and enduring moral values — an approach that has helped the company
              retain and multiply its customers. Products are engineered strictly according to
              customer requirements and specifications.
            </p>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="section about-infra" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="about-infra__header">
            <p className="section-label">Our Infrastructure</p>
            <h2 className="display-md">The Daman Facility</h2>
            <p className="body-lg" style={{ maxWidth: '600px', margin: '16px auto 0' }}>
              The manufacturing plant is located in Village Dabhel, Daman and is designed to
              satisfy demanding user requirements across multiple industries and applications.
            </p>
          </div>
          <div className="about-infra__grid">
            {[
              { icon: '🏭', title: 'High-Tech Manufacturing Plant', desc: 'The facility in Daman is described as a high-tech manufacturing plant equipped with advanced manufacturing equipment.' },
              { icon: '🏗️', title: 'Spacious Warehouse', desc: 'A spacious warehouse capable of storing large quantities of finished products, supporting reliable delivery to customers.' },
              { icon: '⚙️', title: 'Advanced Equipment', desc: 'The plant is equipped with advanced manufacturing equipment to ensure consistent product quality and dimensional accuracy.' },
              { icon: '🔬', title: 'Complete Testing Methods', desc: 'Complete testing methods are in place at the Daman facility to verify that products meet customer-specified requirements.' },
              { icon: '👷', title: 'Qualified Engineers', desc: 'A team of qualified engineers with deep technical knowledge of stainless‑steel manufacturing and application requirements.' },
              { icon: '🛠️', title: 'Experienced Technical Staff', desc: 'Highly experienced and trained technical personnel support every stage of the manufacturing and quality process.' },
            ].map((item) => (
              <div className="infra-card" key={item.title}>
                <div className="infra-card__icon">{item.icon}</div>
                <h3 className="heading-sm infra-card__title">{item.title}</h3>
                <p className="body-sm infra-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section about-values">
        <div className="container">
          <div className="about-values__grid">
            <div>
              <p className="section-label">Our Approach</p>
              <h2 className="display-md">Why Choose Leela Tubes</h2>
            </div>
            <div className="about-values__list">
              {[
                { title: 'Customer-Specific Manufacturing', desc: 'Every product is engineered to the requirements and specifications submitted by the customer for the intended application.' },
                { title: 'Core Manufacturing Competence', desc: 'Manufacturing is the core of what we do. Our focus is on developing and sustaining manufacturing excellence.' },
                { title: 'Technology and Experience', desc: 'We combine latest manufacturing technology with decades of accumulated experience in ERW stainless‑steel production.' },
                { title: 'Enduring Values', desc: 'Consistent quality achieved through enduring moral values has helped us retain and grow our customer relationships over the years.' },
              ].map((v) => (
                <div className="values-item" key={v.title}>
                  <div className="values-item__check">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="values-item__title">{v.title}</h4>
                    <p className="values-item__desc">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section--sm about-cta">
        <div className="container about-cta__inner">
          <h2 className="display-md about-cta__heading">Ready to discuss your requirement?</h2>
          <div className="about-cta__btns">
            <Link to="/quote" className="btn btn--primary">Request a Quote <span className="btn-icon">→</span></Link>
            <Link to="/contact" className="btn btn--outline-green">Contact Us</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
