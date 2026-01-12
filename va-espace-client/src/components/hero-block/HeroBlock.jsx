import React from "react";
import "./HeroBlock.css";

const HeroBlock = ({ content, titleColor, heroImage, blockColor }) => {
  return (
    <section className="hero-block" style={{ backgroundColor: blockColor }}>
      <div className="section">
        <div className="container is-flex is-flex-direction-column is-align-items-center">
          {/* Top: Title + Description */}
          <div className="column is-9 hero-block-header mb-6">
            <h2 className="has-text-centered mb-2">{content.title}</h2>
            <p className="is-10 has-text-centered">{content.subtitle}</p>
          </div>

          {/* Bottom: Image + Text */}
          <div className="columns is-vcentered is-variable is-8">
            <div className="column is-half">
              <figure className="image">
                <img src={heroImage} alt={content.imageAlt} />
              </figure>
            </div>

            <div className="column is-half">
              <p>{content.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBlock;
