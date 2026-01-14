import React from "react";
import RiveCard from "../rive-card/RiveCard";

import "./CardsBlock.css";

const CardsBlock = ({
  content,
  titleSize,
  titleColor,
  titleColSize,
  blockColor,
  isVertical,
}) => {
  // Inside your component
  const cardsBlock = content || {};

  // Helper to convert flattened keys into array
  const cardItems = Object.keys(cardsBlock)
    .filter((key) => key.startsWith("card_") && key.endsWith("_title"))
    .map((titleKey) => {
      const num = titleKey.match(/card_(\d+)_title/)[1];
      return {
        title: cardsBlock[titleKey],
        text: cardsBlock[`card_${num}_text`] || "",
      };
    });

  // Determine layout based on number of cards
  const cardColumnsClass = cardItems.length === 2 ? "is-half" : "is-one-third";
  console.log(cardItems);
  return (
    <section className={"cards-block"} style={{ backgroundColor: blockColor }}>
      <div className="section is-flex is-align-items-center">
        <div className="container ">
          <div className="columns is-flex is-align-items-center is-justify-content-center mb-4">
            <div className={`${titleColSize ? "column is-8" : ""} `}>
              {titleSize === "small" ? (
                <h3
                  className={`has-text-centered`}
                  style={{ color: titleColor }}
                >
                  {content.title}
                </h3>
              ) : (
                <h2
                  className={`has-text-centered`}
                  style={{ color: titleColor }}
                >
                  {content.title}
                </h2>
              )}
            </div>
          </div>
          <p className="is-10 has-text-centered">{content.subtitle}</p>
          <div className="columns is-variable  mt-6">
            {cardItems.map((card, index) => (
              <div
                className={`column ${
                  cardItems.length === 2 ? "is-half" : "is-one-third"
                }`}
                key={index}
              >
                <RiveCard
                  riveFile={`/rives/card-v-${index + 1}.riv`}
                  title={card.title}
                  subtitle={card.subtitle} // optional
                  //   description={card.text}
                />
              </div>
            ))}
            {/* <RiveCard
              riveFile={`/rives/card-v-1.riv`}
              title={"Card Title 1"}
              subtitle={"Card Subtitle 1"}
              description={"This is the description for card 1."}
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardsBlock;
