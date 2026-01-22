import React, { useState } from "react";
import "./FlipCard.css";

const FlipCard = ({
  bgImage,
  flippedImage,
  title,
  subtitle,
  paragraph,
  cta,
  backParagraph,
  isHorizontal = false,
}) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`flip-card ${isHorizontal ? "flip-card-h" : ""} ${
        flipped ? "flipped" : ""
      }`}
      onClick={() => setFlipped((f) => !f)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && setFlipped((f) => !f)}
    >
      <div className="flip-card-inner">
        {/* FRONT */}
        <div className="flip-card-face flip-card-front">
          <img src={bgImage} alt="" className="flip-card-image" />

          <div className="flip-card-overlay">
            <h2 className={`card-title ${isHorizontal ? "card-title-h" : ""}`}>
              {title}
            </h2>

            {subtitle && (
              <h4
                className={`card-subtitle ${isHorizontal ? "card-subtitle-h" : ""}`}
              >
                {subtitle}
              </h4>
            )}
            {paragraph && <p className="card-paragraph">{paragraph}</p>}

            {cta && (
              <button className="card-cta" onClick={(e) => e.stopPropagation()}>
                {cta}
              </button>
            )}
          </div>
        </div>

        {/* BACK */}
        <div className="flip-card-face flip-card-back">
          <img src={flippedImage} alt="" className="flip-card-image" />

          <div className="flip-card-back-overlay">
            <h2 className="card-title">{title}</h2>
            {backParagraph && <p className="back-p">{backParagraph}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
