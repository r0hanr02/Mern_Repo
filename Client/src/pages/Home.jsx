import React from "react";
import "./css/Home.css"; // Make sure this CSS file is linked
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          <div className="hero-content">
            <p className="hero-subheading">
              Your Digital Vision, Our Expert Code
            </p>
            <h1>
              Freelance Web Development for{" "}
              <span className="highlight">Modern Businesses</span>.
            </h1>
            <p className="hero-description">
              We are a collective of dedicated freelance web developers
              specializing in crafting high-performance, beautiful, and secure
              websites and applications. From dynamic React front-ends to robust
              backend systems, we turn your ideas into functional digital
              realities.
            </p>
            <div className="hero-btns">
              <Link to="/contact" className="btn btn-hero-primary">
                Get a Free Quote
              </Link>
              <Link to="/service" className="btn btn-hero-secondary">
                Explore Our Services
              </Link>
            </div>
          </div>

          <div className="hero-image">
            {/* Using an abstract, tech-related image for a clean look */}
            <img
              src="https://i.pinimg.com/736x/02/ef/33/02ef330da5a9a34397059e9c31bf1f3f.jpg"
              alt="Abstract representation of modern web development"
              width="600"
              height="400"
            />
          </div>
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="section-stats">
        <div className="container grid grid-four-cols">
          <div className="stat-box">
            <h2 className="stat-number">50+</h2>
            <p className="stat-label">Projects Delivered</p>
          </div>
          <div className="stat-box">
            <h2 className="stat-number">20+</h2>
            <p className="stat-label">Happy Clients</p>
          </div>
          <div className="stat-box">
            <h2 className="stat-number">50K+</h2>
            <p className="stat-label">Lines of Code</p>
          </div>
          <div className="stat-box">
            <h2 className="stat-number">7+</h2>
            <p className="stat-label">Years of Experience</p>
          </div>
        </div>
      </section>

      {/* 3. Services Overview Section */}
      <section className="section-services-overview">
        <h2 className="main-heading">What We Offer</h2>
        <div className="container grid grid-three-cols">
          <div className="service-card">
            <h3>Custom Web Development</h3>
            <p>
              From static sites to complex web applications, we build bespoke
              digital experiences tailored to your needs.
            </p>
            <Link to="/service" className="card-link">
              Learn More &rarr;
            </Link>
          </div>

          <div className="service-card">
            <h3>E-commerce Solutions</h3>
            <p>
              We create powerful and secure online stores that drive sales and
              provide seamless shopping experiences.
            </p>
            <Link to="/service" className="card-link">
              Learn More &rarr;
            </Link>
          </div>

          <div className="service-card">
            <h3>API & Backend Development</h3>
            <p>
              Building robust, scalable, and efficient backend systems and APIs
              to power your applications.
            </p>
            <Link to="/service" className="card-link">
              Learn More &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Call to Action (CTA) Section */}
      <section className="section-cta">
        <div className="container cta-content">
          <h2 className="cta-heading">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="cta-description">
            Don't just have a website, have a powerful online asset. Let's
            discuss your project and bring it to life.
          </p>
          <Link to="/contact" className="btn btn-cta-primary">
            Start Your Project Today
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
