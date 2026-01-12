// src/components/LandingBlock.jsx
import React from "react";
import "./LandingBlock.css";
import heroImage from "../../assets/Images/landing-image.svg";

const LandingBlock = ({ content, setLang }) => {
  return (
    <section className="landing-block">
      <div className="section">
        {/* Top Right Language Buttons */}
        <div className="languages">
          <button onClick={() => setLang("fr")}>FR</button>
          <button onClick={() => setLang("it")}>IT</button>
          <button onClick={() => setLang("de")}>DE</button>
        </div>

        <div className="container is-fullheight">
          <div className="columns is-vcentered is-variable is-8">
            {/* Left Side: Title + CTA */}
            <div className="column is-half">
              <h1>{content.title}</h1>
              <button className="button is-primary is-medium">
                {content.cta}
              </button>
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
              {content.links[0]}
            </a>
            <a href="#linkB" className="mx-3">
              {content.links[1]}
            </a>
            <a href="#linkC" className="mx-3">
              {content.links[2]}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingBlock;
