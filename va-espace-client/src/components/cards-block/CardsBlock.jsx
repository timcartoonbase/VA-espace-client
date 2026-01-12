import React from "react";
import "./CardsBlock.css";

const CardsBlock = ({ content }) => {
  return (
    <section className="cards-block">
      <div className="section is-flex is-align-items-center">
        <div className="container">
          <div className="title is-2">
            <h2 className="has-text-centered mb-6">{content.title}</h2>
          </div>
          <div className="columns is-variable is-6">
            {content.cards.map((card, index) => (
              <div className="column is-one-third" key={index}>
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
