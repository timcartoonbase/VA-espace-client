// src/components/LandingBlock.jsx
import React from "react";
import "./LandingBlock.css";
import heroImage from "../../assets/Images/landing-image.svg";
import buttonImage from "../../assets/Images/landingBtn.svg";

const VIDEO_LINKS = {
  fr: "https://youtu.be/JplCumLp33Y",
  it: "https://youtu.be/1DaR-trHyCs",
  de: "https://youtu.be/KKQ60w0CRfQ",
};

const LandingBlock = ({ content, lang, setLang, onScroll }) => {
  const videoLink = VIDEO_LINKS[lang] || VIDEO_LINKS.fr;

  return (
    <section className="landing-block">
      <div className="section">
        {/* 🌍 Language Switch */}
        <div className="languages">
          {["fr", "it", "de"].map((l) => (
            <button
              key={l}
              className={`langBtn ${lang === l ? "active" : ""}`}
              onClick={() => setLang(l)}
              style={lang === l ? { fontWeight: "bold" } : {}}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="container is-fullheight">
          <div className="columns is-vcentered is-variable is-flex landing-container">
            {/* Left Side */}
            <div className="column is-7 has-text-left">
              <h1>{content?.title}</h1>

              <a
                href={videoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="button-container"
                style={{ position: "relative", display: "inline-block" }}
              >
                <img
                  src={buttonImage}
                  alt=""
                  style={{
                    position: "absolute",
                    bottom: "150%",
                    left: "0",
                    width: "90%",
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

            {/* Right Side */}
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
            <button
              className="landing-links mx-3"
              onClick={() => onScroll("2-cards")}
            >
              {content?.link_1}
            </button>

            <span> | </span>

            <button
              className="landing-links mx-3"
              onClick={() => onScroll("3-hero")}
            >
              {content?.link_2}
            </button>

            <span> | </span>

            <button
              className="landing-links mx-3"
              onClick={() => onScroll("4-hero")}
            >
              {content?.link_3}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingBlock;
