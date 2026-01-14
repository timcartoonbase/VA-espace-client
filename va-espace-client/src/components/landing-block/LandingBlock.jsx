// src/components/LandingBlock.jsx
import React from "react";
import "./LandingBlock.css";
import heroImage from "../../assets/Images/landing-image.svg";

const LandingBlock = ({ content, lang, setLang }) => {
  return (
    <section className="landing-block">
      <div className="section">
        {/* Top Right Language Buttons */}
        {/* <div className="languages">
          <button className="langBtn" onClick={() => setLang("fr")}>
            FR
          </button>
          <span className="langBtn"> | </span>
          <button className="langBtn" onClick={() => setLang("it")}>
            IT
          </button>
          <span className="langBtn"> | </span>
          <button className="langBtn" onClick={() => setLang("de")}>
            DE
          </button>
        </div> */}
        {/* Language Switch */}
        <div className="languages">
          {["fr", "it", "de"].map((l) => (
            <button key={l} className="langBtn" onClick={() => setLanguage(l)}>
              {l.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="container is-fullheight">
          <div className="columns is-vcentered is-variable is-8">
            {/* Left Side: Title + CTA */}
            <div className="column is-half">
              <h1>{content?.title}</h1>
              <button className="mt-4">{content?.cta}</button>
            </div>

            {/* Right Side: Image */}
            <div className="column is-half">
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
          <div className="bottom-links has-text-centered mt-5">
            <a href="#linkA" className="mx-3">
              {content?.link_1}
            </a>
            <span> | </span>
            <a href="#linkB" className="mx-3">
              {content?.link_2}
            </a>
            <span> | </span>
            <a href="#linkC" className="mx-3">
              {content?.link_3}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingBlock;
