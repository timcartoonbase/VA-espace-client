// src/components/LandingBlock.jsx
import React from "react";
import "./LandingBlock.css";
import heroImage from "../../assets/Images/landing-image.svg";
import buttonImage from "../../assets/Images/landingBtn.svg";

const LandingBlock = ({ content, lang, setLang }) => {
  const handleScroll = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="landing-block">
      <div className="section">
        {/* Language Switch */}
        <div className="languages">
          {["fr", "it", "de"].map((l) => (
            <button key={l} className="langBtn" onClick={() => setLanguage(l)}>
              {l.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="container is-fullheight">
          <div className="columns is-vcentered is-variable is-flex pl-5">
            {/* Left Side: Title + CTA */}
            <div className="column is-7 has-text-left">
              <h1>{content?.title}</h1>
              <a
                href="#linkA"
                className="button-container"
                style={{ position: "relative", display: "inline-block" }}
                onClick={handleScroll}
              >
                <img
                  src={buttonImage}
                  alt="Button background"
                  style={{
                    position: "absolute",
                    bottom: "150%",
                    left: "0",
                    width: "90%",
                    height: "auto",
                    zIndex: "0",
                    transform: "translateY(50%)",
                  }}
                />
                <button
                  className="mt-4"
                  style={{ position: "relative", zIndex: "1" }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {content?.cta}
                </button>
              </a>
            </div>

            {/* Right Side: Image */}
            <div className="column is-5 pr-5">
              <figure className="image">
                <img
                  className="landing-image has-ratio"
                  src={heroImage}
                  alt="Hero"
                  width="407"
                  height="284"
                />
              </figure>
            </div>
          </div>

          {/* Bottom Links */}
          <div className="column bottom-links has-text-centered mt-6">
            <a
              href="#linkA"
              className="landing-links mx-3"
              onClick={handleScroll}
            >
              {content?.link_1}
            </a>
            <span> | </span>
            <a
              href="#linkB"
              className="landing-links mx-3"
              onClick={handleScroll}
            >
              {content?.link_2}
            </a>
            <span> | </span>
            <a
              href="#linkC"
              className="landing-links mx-3"
              onClick={handleScroll}
            >
              {content?.link_3}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingBlock;
