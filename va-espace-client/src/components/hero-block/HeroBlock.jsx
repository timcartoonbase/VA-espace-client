import React from "react";
import "./HeroBlock.css";

const HeroBlock = ({
  content,
  titleColor,
  heroImage,
  imageColSize,
  blockColor,
  noNum,
  noPad,
}) => {
  const heroBlock = content || {};
  return (
    <section
      className="hero-block"
      style={{
        backgroundColor: blockColor,
        paddingBottom: noPad ? "0" : "8rem",
      }}
    >
      <div className="section">
        <div className="container is-flex is-flex-direction-column is-align-items-center">
          {/* Top: Title + Description */}
          <div className="column is-9 hero-block-header mb-6">
            <h2
              className="has-text-centered mb-2"
              style={{ color: titleColor }}
            >
              {content.title}
            </h2>
            {content.subtitle && (
              <p className="is-10 has-text-centered">{content.subtitle}</p>
            )}
          </div>

          {/* Bottom: Image + Text */}
          <div className="columns is-vcentered is-variable is-8">
            <div className={`column ${imageColSize || "is-half"}`}>
              <figure className="image">
                <img src={heroImage} />
              </figure>
            </div>

            <div className="column ">
              <div className="is-flex has-text-left">
                {!noNum && <span className="li-number">1</span>}
                <p className="pb-2 li-description">{content.description_1}</p>
              </div>
              {content.description_2 && (
                <div className="is-flex has-text-left">
                  {!noNum && <span className="li-number">2</span>}
                  <p className="pb-2 li-description">{content.description_2}</p>
                </div>
              )}
              {content.description_3 && (
                <div className="is-flex has-text-left">
                  {!noNum && <span className="li-number">3</span>}
                  <p className="pb-2 li-description">{content.description_3}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBlock;
