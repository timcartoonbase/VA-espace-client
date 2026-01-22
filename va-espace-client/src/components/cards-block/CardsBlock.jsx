import React from "react";
import FlipCard from "../flip-card/FlipCard";

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
  const cardItems = Object.keys(cardsBlock)
    .filter((key) => key.startsWith("card_") && key.endsWith("_title"))
    .map((titleKey) => {
      const numMatch = titleKey.match(/card_(\d+)_title/);
      if (!numMatch) return null;
      const num = numMatch[1];

      return {
        title: cardsBlock[`card_${num}_title`] || "",
        subtitle: cardsBlock[`card_${num}_subtitle`] || "",
        paragraph: cardsBlock[`card_${num}_paragraph`] || "",
        cta: cardsBlock[`card_${num}_cta`] || "",
        backParagraph: cardsBlock[`card_${num}_back`] || "",
      };
    })
    .filter(Boolean); // remove nulls

  // Determine layout based on number of cards
  const cardColumnsClass = cardItems.length === 2 ? "is-half" : "is-one-third";
  console.log("Cards content keys:", Object.keys(cardsBlock));

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
                <FlipCard
                  bgImage={
                    isVertical
                      ? `src/assets/images/card-v-${index + 1}.svg`
                      : !isVertical && index + 1 === 1
                        ? `src/assets/images/card-h-${index + 1}.png`
                        : `src/assets/images/card-h-${index + 1}.svg`
                  }
                  flippedImage={
                    isVertical
                      ? `src/assets/images/card-v-back.svg`
                      : `src/assets/images/card-h-back.svg`
                  }
                  title={card.title}
                  subtitle={card.subtitle}
                  paragraph={card.paragraph}
                  cta={card.cta}
                  backParagraph={card.backParagraph}
                  isHorizontal={!isVertical}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardsBlock;
