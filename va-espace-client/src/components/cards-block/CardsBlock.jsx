import React from "react";
import "./CardsBlock.css";

const CardsBlock = ({
  content,
  titleSize,
  titleColSize,
  cards,
  blockColor,
}) => {
  return (
    <section
      className={"cards-block"}
      style={blockColor ? { backgroundColor: blockColor } : {}}
    >
      <div className="section is-flex is-align-items-center">
        <div className="container ">
          <div className="columns is-flex is-align-items-center is-justify-content-center mb-4">
            <div className={`${titleColSize ? "column is-8" : ""} `}>
              {titleSize === "small" ? (
                <h3 className="has-text-centered">{content.title}</h3>
              ) : (
                <h2 className="has-text-centered">{content.title}</h2>
              )}
            </div>
          </div>
          <p className="is-10 has-text-centered">{content.subtitle}</p>
          <div className="columns is-variable is-6 mt-6">
            {content.cards.map((card, index) => (
              <div
                className={`column ${cards === 2 ? "is-half" : "is-one-third"}`}
                key={index}
              >
                <div className="card block-2-card">
                  <div className="card-content">
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardsBlock;
