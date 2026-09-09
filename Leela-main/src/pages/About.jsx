import { Link } from "react-router-dom";
import { useState } from "react";
import "./About.css";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function PremiumGalleryGrid() {
  const galleryRef = useRef(null);

  const galleryItems = [
    {
      image: "/images/factoryImg/img1.png",
      title: "Manufacturing Plant",
      alt: "Inside Manufacturing Plant",
      description:
        "Spacious and well-organized plant floor with advanced machinery for high-volume production.",
    },
    {
      image: "/images/factoryImg/img2.png",
      title: "Warehouse & Storage",
      alt: "Warehouse with Stainless Steel Coils",
      description:
        "Spacious warehouse storing stainless steel coils and raw materials, ensuring efficient production flow.",
    },
    {
      image: "/images/factoryImg/img3.png",
      title: "Coil Uncoiler Machine",
      alt: "Coil Uncoiler Machine",
      description:
        "Advanced uncoiler machine feeding stainless steel coils smoothly into the production line.",
    },
    {
      image: "/images/factoryImg/img4.png",
      title: "Tube Mill Machine",
      alt: "Tube Mill Machine",
      description:
        "High-precision tube mill machine for ERW welding and forming of stainless steel pipes.",
    },
  ];

  useLayoutEffect(() => {
    const section = galleryRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".premium-gallery-card");
      const images = gsap.utils.toArray(".premium-gallery-card__image");
      const captions = gsap.utils.toArray(".premium-gallery-card__caption");

      /* 1. INITIAL CARD STATE */
      gsap.set(cards, {
        opacity: 0,
        y: 70,
        scale: 0.94,
      });

      gsap.set(images, {
        scale: 1.08,
      });

      gsap.set(captions, {
        y: 15,
        opacity: 0,
      });

      /* 2. SCROLL REVEAL ANIMATION */
      gsap.to(cards, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.05,
        ease: "power3.out",
        stagger: {
          each: 0.14,
          from: "start",
        },
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          once: true,
        },
      });

      /* 3. IMAGE REVEAL */
      gsap.to(images, {
        scale: 1,
        duration: 1.4,
        ease: "power3.out",
        stagger: 0.14,
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          once: true,
        },
      });

      /* 4. CAPTION REVEAL */
      gsap.to(captions, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.45,
        ease: "power2.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          once: true,
        },
      });

      /* 5. DESKTOP MOUSE INTERACTION */
      const mediaQuery = window.matchMedia(
        "(min-width: 769px) and (pointer: fine)",
      );

      const setupMouseEffects = () => {
        if (!mediaQuery.matches) return;

        cards.forEach((card) => {
          const image = card.querySelector(".premium-gallery-card__image");
          const caption = card.querySelector(".premium-gallery-card__caption");
          const shine = card.querySelector(".premium-gallery-card__shine");

          let rotateX = gsap.quickTo(card, "rotationX", {
            duration: 0.35,
            ease: "power3.out",
          });
          let rotateY = gsap.quickTo(card, "rotationY", {
            duration: 0.35,
            ease: "power3.out",
          });
          let imageX = gsap.quickTo(image, "x", {
            duration: 0.45,
            ease: "power3.out",
          });
          let imageY = gsap.quickTo(image, "y", {
            duration: 0.45,
            ease: "power3.out",
          });

          const handleEnter = () => {
            card.classList.add("is-hovered");
            gsap.to(card, {
              y: -10,
              scale: 1.015,
              duration: 0.45,
              ease: "power3.out",
              overwrite: true,
            });
            gsap.to(image, {
              scale: 1.075,
              duration: 0.7,
              ease: "power3.out",
              overwrite: true,
            });
            gsap.to(caption, {
              y: -5,
              duration: 0.45,
              ease: "power3.out",
              overwrite: true,
            });
            gsap.to(shine, {
              opacity: 1,
              duration: 0.3,
              ease: "power2.out",
            });
          };

          const handleMove = (event) => {
            const rect = card.getBoundingClientRect();
            const mouseX = event.clientX - rect.left;
            const mouseY = event.clientY - rect.top;
            const percentX = mouseX / rect.width;
            const percentY = mouseY / rect.height;

            const maxRotation = 4;
            const rotationY = (percentX - 0.5) * maxRotation * 2;
            const rotationX = (0.5 - percentY) * maxRotation * 2;

            rotateX(rotationX);
            rotateY(rotationY);

            const moveX = (percentX - 0.5) * 12;
            const moveY = (percentY - 0.5) * 8;

            imageX(moveX);
            imageY(moveY);

            card.style.setProperty("--mouse-x", `${mouseX}px`);
            card.style.setProperty("--mouse-y", `${mouseY}px`);
          };

          const handleLeave = () => {
            card.classList.remove("is-hovered");
            gsap.to(card, {
              y: 0,
              scale: 1,
              rotationX: 0,
              rotationY: 0,
              duration: 0.65,
              ease: "elastic.out(1, 0.55)",
              overwrite: true,
            });
            gsap.to(image, {
              scale: 1,
              x: 0,
              y: 0,
              duration: 0.65,
              ease: "power3.out",
              overwrite: true,
            });
            gsap.to(caption, {
              y: 0,
              duration: 0.5,
              ease: "power3.out",
              overwrite: true,
            });
            gsap.to(shine, {
              opacity: 0,
              duration: 0.25,
              ease: "power2.out",
            });
          };

          card.addEventListener("mouseenter", handleEnter);
          card.addEventListener("mousemove", handleMove);
          card.addEventListener("mouseleave", handleLeave);

          card._galleryCleanup = () => {
            card.removeEventListener("mouseenter", handleEnter);
            card.removeEventListener("mousemove", handleMove);
            card.removeEventListener("mouseleave", handleLeave);
          };
        });
      };

      setupMouseEffects();

      /* 6. CLEANUP */
      return () => {
        cards.forEach((card) => {
          if (card._galleryCleanup) {
            card._galleryCleanup();
          }
        });
      };
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={galleryRef} className="premium-gallery__grid">
      {galleryItems.map((item, index) => (
        <article
          className="premium-gallery-card"
          key={item.title}
          style={{ "--card-index": index }}
        >
          <div className="premium-gallery-card__image-wrap">
            <img
              src={item.image}
              alt={item.alt}
              className="premium-gallery-card__image"
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
              onError={(e) => {
                e.target.src = "/images/factoryImg/comp1.png";
              }}
            />
            <div className="premium-gallery-card__shine"></div>
            <div className="premium-gallery-card__number">
              {String(index + 1).padStart(2, "0")}
            </div>
            <div className="premium-gallery-card__corner">
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="premium-gallery-card__caption">
            <div className="premium-gallery-card__title-row">
              <h4>{item.title}</h4>
              <span className="premium-gallery-card__arrow">→</span>
            </div>
            <div className="premium-gallery-card__line"></div>
            <p>{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="about-page">
      {/* Page hero */}
      <section className="page-hero">
        {/* Background Image */}
        <div className="page-hero__image-wrap">
          <img
            src="/images/factoryImg/comp2.png"
            alt="Leela Tubes Manufacturing Facility"
            className="page-hero__image"
          />
        </div>

        {/* Dark Overlay (Text ko readable banane ke liye) */}
        <div className="page-hero__overlay"></div>

        {/* Content */}
        <div className="container page-hero__content">
          <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>About Us</span>
          </nav>
          <h1 className="display-lg">About Leela Tubes</h1>
          <p>
            An established ERW stainless‑steel pipe and tube manufacturer based
            in Daman, India.
          </p>
        </div>
      </section>

      {/* ================= Our Story ================= */}
      <section className="section about-story">
        <div className="container about-story__grid">
          <div className="about-story__img-wrap">
            <img
              src="/images/factoryImg/comp1.png"
              alt="Leela Tubes Factory Building"
              className="about-story__img"
            />
          </div>
          <div className="about-story__content">
            <p className="section-label">Our Story</p>
            <h2 className="display-md">Built on Manufacturing Expertise</h2>

            <p className="body-lg">
              <strong>Leela Tubes Pvt. Ltd</strong> was established in 2000 as a
              professional manufacturer of ERW Stainless Steel pipes and tubes,
              developing core competence in manufacturing to meet client needs.
            </p>

            <p className="body-lg">
              Our product range includes round, square, rectangular, and oval
              tubes, engineered precisely to customer specifications and
              requirements.
            </p>

            <p className="body-lg">
              Our ultra-modern Daman facility is equipped with advanced
              machinery, complete testing methods, and experienced technocrats
              serving industries like Petrochemicals, Pharmaceuticals, Dairy,
              and Automobile.
            </p>

            <p className="body-lg">
              Quality is our prime concern. We ensure finest materials and
              top-notch standards to deliver reliability, precision, and
              professionalism globally.
            </p>
          </div>
        </div>
      </section>

      {/* ================= Infrastructure (Click to Reveal) ================= */}
      <section
        className="section about-infra"
        style={{ background: "var(--off-white)" }}
      >
        <div className="container">
          <div className="about-infra__header">
            <p className="section-label">Our Infrastructure</p>
            <h2 className="display-md">The Daman Facility</h2>
            <p
              className="body-lg"
              style={{ maxWidth: "600px", margin: "16px auto 0" }}
            >
              The manufacturing plant is located in Village Dabhel, Daman and is
              designed to satisfy demanding user requirements across multiple
              industries and applications.
            </p>
          </div>
          <div className="about-infra__grid">
            {[
              {
                icon: "🏭",
                title: "High-Tech Manufacturing Plant",
                image: "/images/factoryImg/High-Tech Manufacturing Plant.png",
                desc: "The facility in Daman is described as a high-tech manufacturing plant equipped with advanced manufacturing equipment.",
              },
              {
                icon: "🏗️",
                title: "Spacious Warehouse",
                image: "/images/factoryImg/Spacious Warehouse.png",
                desc: "A spacious warehouse capable of storing large quantities of finished products, supporting reliable delivery to customers.",
              },
              {
                icon: "⚙️",
                title: "Advanced Equipment",
                image: "/images/factoryImg/Advanced Equipment.png",
                desc: "The plant is equipped with advanced manufacturing equipment to ensure consistent product quality and dimensional accuracy.",
              },
              {
                icon: "🔬",
                title: "Complete Testing Methods",
                image: "/images/process-flow-chart.png",
                desc: "Complete testing methods are in place at the Daman facility to verify that products meet customer-specified requirements.",
              },
              {
                icon: "👷",
                title: "Qualified Engineers",
                image: "/images/factoryImg/Qualified-Engineers.png",
                desc: "A team of qualified engineers with deep technical knowledge of stainless‑steel manufacturing and application requirements.",
              },
              {
                icon: "🛠️",
                title: "Experienced Technical Staff",
                image: "/images/factoryImg/Experienced-Technical.png",
                desc: "Highly experienced and trained technical personnel support every stage of the manufacturing and quality process.",
              },
            ].map((item, index) => (
              <div className="infra-card" key={item.title}>
                {/* Background Image */}
                <div className="infra-card__bg">
                  <img src={item.image} alt={item.title} />
                </div>

                {/* Overlay (Initially Hidden) */}
                <div className="infra-card__overlay">
                  <div className="infra-card__icon">{item.icon}</div>
                  <h3 className="heading-sm infra-card__title">{item.title}</h3>
                  <p className="body-sm infra-card__desc">{item.desc}</p>
                </div>

                {/* Mobile "View Details" Button */}
                <button className="infra-card__mobile-btn" type="button">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Company Profile ================= */}
      <section className="section company-profile-hover">
        <div className="company-profile-hover__card">
          <img
            src="/images/factoryImg/comp2.png"
            alt="Leela Tubes high-tech stainless steel manufacturing facility"
            className="company-profile-hover__img"
          />

          {/* Desktop Hover Overlay */}
          <div
            className={`company-profile-hover__overlay ${isExpanded ? "is-expanded" : ""}`}
          >
            <div className="company-profile-hover__content">
              <p className="section-label">Our Profile</p>
              <h2 className="display-md">Leela Tubes Pvt. Ltd</h2>

              <p className="company-profile-hover__intro">
                A premium stainless steel ERW pipes & tubes manufacturer,
                delivering engineering excellence and international quality
                standards.
              </p>

              <ul className="profile-key-points">
                <li>
                  <strong>Established:</strong> Year 2000 as a professional ERW
                  Stainless Steel pipes & tubes manufacturer.
                </li>
                <li>
                  <strong>Product Range:</strong> Round, square, rectangular &
                  oval tubes engineered to customer specifications.
                </li>
                <li>
                  <strong>Infrastructure:</strong> Ultra-modern high-tech plant
                  in Daman with advanced ERW machinery, spacious warehouse &
                  overhead cranes.
                </li>
                <li>
                  <strong>Testing & Quality:</strong> Complete testing methods,
                  qualified engineers & experienced technocrats ensuring
                  precision.
                </li>
                <li>
                  <strong>Industries Served:</strong> Petrochemicals, Chemical,
                  Pharmaceutical, Fertilizer, Oil Processing, Sugar, Dairy,
                  Hospital Furniture & Automobile.
                </li>
                <li>
                  <strong>Quality Commitment:</strong> Finest quality materials
                  meeting national & international standards for global export
                  capability.
                </li>
                <li>
                  <strong>Our Promise:</strong> Top-notch quality,
                  effectiveness, high quality & prompt delivery to add value.
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile Only - Text Below Image */}
          <div className="company-profile-hover__mobile-content">
            <div className="company-profile-hover__mobile-text-wrap">
              <p className="section-label">Our Profile</p>
              <h2 className="display-md">Leela Tubes Pvt. Ltd</h2>

              <p className="company-profile-hover__intro">
                A premium stainless steel ERW pipes & tubes manufacturer,
                delivering engineering excellence and international quality
                standards.
              </p>

              <ul className="profile-key-points">
                <li>
                  <strong>Established:</strong> Year 2000 as a professional ERW
                  Stainless Steel pipes & tubes manufacturer.
                </li>
                <li>
                  <strong>Product Range:</strong> Round, square, rectangular &
                  oval tubes engineered to customer specifications.
                </li>
                <li>
                  <strong>Infrastructure:</strong> Ultra-modern high-tech plant
                  in Daman with advanced ERW machinery, spacious warehouse &
                  overhead cranes.
                </li>
                <li>
                  <strong>Testing & Quality:</strong> Complete testing methods,
                  qualified engineers & experienced technocrats ensuring
                  precision.
                </li>
                <li>
                  <strong>Industries Served:</strong> Petrochemicals, Chemical,
                  Pharmaceutical, Fertilizer, Oil Processing, Sugar, Dairy,
                  Hospital Furniture & Automobile.
                </li>
                <li>
                  <strong>Quality Commitment:</strong> Finest quality materials
                  meeting national & international standards for global export
                  capability.
                </li>
                <li>
                  <strong>Our Promise:</strong> Top-notch quality,
                  effectiveness, high quality & prompt delivery to add value.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PREMIUM COMPANY GALLERY ================= */}
      <section className="premium-gallery">
        <div className="premium-gallery__container">
          <div className="premium-gallery__header">
            <div className="premium-gallery__label-wrap">
              <span className="premium-gallery__label-line"></span>
              <p className="premium-gallery__label">COMPANY GALLERY</p>
            </div>

            <h2 className="premium-gallery__title">
              A Glimpse Inside Our Facilities
            </h2>

            <p className="premium-gallery__description">
              Take a look at our manufacturing plant, warehouse, corporate
              office, and the products we deliver.
            </p>
          </div>

          <PremiumGalleryGrid />
        </div>
      </section>

      {/* ================= Values ================= */}
      <section className="section about-values">
        <div className="container">
          <div className="about-values__grid">
            <div>
              <p className="section-label">Our Approach</p>
              <h2 className="display-md">Why Choose Leela Tubes</h2>
            </div>
            <div className="about-values__list">
              {[
                {
                  title: "Customer-Specific Manufacturing",
                  desc: "Every product is engineered to the requirements and specifications submitted by the customer for the intended application.",
                },
                {
                  title: "Core Manufacturing Competence",
                  desc: "Manufacturing is the core of what we do. Our focus is on developing and sustaining manufacturing excellence.",
                },
                {
                  title: "Technology and Experience",
                  desc: "We combine latest manufacturing technology with decades of accumulated experience in ERW stainless‑steel production.",
                },
                {
                  title: "Enduring Values",
                  desc: "Consistent quality achieved through enduring moral values has helped us retain and grow our customer relationships over the years.",
                },
              ].map((v) => (
                <div className="values-item" key={v.title}>
                  <div className="values-item__check">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3 8l4 4 6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
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

      {/* ================= CTA ================= */}
      <section className="section--sm about-cta">
        <div className="container about-cta__inner">
          <h2 className="display-md about-cta__heading">
            Ready to discuss your requirement?
          </h2>
          <div className="about-cta__btns">
            <Link to="/quote" className="btn btn--primary">
              Request a Quote <span className="btn-icon">→</span>
            </Link>
            <Link to="/contact" className="btn btn--outline-green">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
