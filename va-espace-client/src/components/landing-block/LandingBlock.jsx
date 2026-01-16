// src/components/LandingBlock.jsx
import React from "react";
import "./LandingBlock.css";
import heroImage from "../../assets/Images/landing-image.svg";

const LandingBlock = ({ content, lang, setLang }) => {
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
          <div className="columns is-vcentered is-variable is-8 is-flex pl-5">
            {/* Left Side: Title + CTA */}
            <div className="column is-7 has-text-left">
              <h1>{content?.title}</h1>
              <button className="mt-4">{content?.cta}</button>
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
          <div className="bottom-links has-text-centered mt-6">
            <a href="#linkA" className="landing-links mx-3">
              {content?.link_1}
            </a>
            <span> | </span>
            <a href="#linkB" className="landing-links mx-3">
              {content?.link_2}
            </a>
            <span> | </span>
            <a href="#linkC" className="landing-links mx-3">
              {content?.link_3}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingBlock;
