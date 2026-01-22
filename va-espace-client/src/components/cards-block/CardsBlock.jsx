import React from "react";
import FlipCard from "../flip-card/FlipCard";
// import FlipCard from "../../assets/images/";
import cardV1 from "../../assets/images/card-v-1.svg";
import cardV2 from "../../assets/images/card-v-2.svg";
import cardV3 from "../../assets/images/card-v-3.svg";

import cardH1 from "../../assets/images/card-h-1.png";
import cardH2 from "../../assets/images/card-h-2.svg";

import cardVBack from "../../assets/images/card-v-back.svg";
import cardHBack from "../../assets/images/card-h-back.svg";

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
  const verticalImages = [cardV1, cardV2, cardV3];
  const horizontalImages = [cardH1, cardH2];

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
                    isVertical ? verticalImages[index] : horizontalImages[index]
                  }
                  flippedImage={isVertical ? cardVBack : cardHBack}
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
