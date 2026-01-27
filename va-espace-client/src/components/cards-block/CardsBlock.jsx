import React from "react";
import FlipCard from "../flip-card/FlipCard";

import cardV1 from "../../assets/images/card-v-1.svg";
import cardV2 from "../../assets/images/card-v-2.svg";
import cardV3 from "../../assets/images/card-v-3.svg";

import cardH1 from "../../assets/images/card-h-1.png";
import cardH2 from "../../assets/images/card-h-2.svg";

import cardC1 from "../../assets/images/card-c-1.png";
import cardC2 from "../../assets/images/card-c-2.png";
import cardC3 from "../../assets/images/card-c-3.png";

import cardVBack from "../../assets/images/card-v-back.svg";
import cardHBack from "../../assets/images/card-h-back.svg";
import cardC1Back from "../../assets/images/card-c-1b.png";
import cardC2Back from "../../assets/images/card-c-2b.png";
import cardC3Back from "../../assets/images/card-c-3b.png";

import "./CardsBlock.css";

const CardsBlock = ({
  content,
  titleSize,
  titleColor,
  titleColSize,
  blockColor,
  isVertical,
  isCaseC, // <-- NEW PROP to use C cards
}) => {
  // Determine card images
  const verticalImages = isCaseC
    ? [cardC1, cardC2, cardC3]
    : [cardV1, cardV2, cardV3];
  const horizontalImages = isCaseC
    ? [cardC1, cardC2, cardC3]
    : [cardH1, cardH2];
  const flippedImages = isCaseC
    ? [cardC1Back, cardC2Back, cardC3Back]
    : isVertical
      ? [cardVBack, cardVBack, cardVBack]
      : [cardHBack, cardHBack];

  // Prepare cards from content
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
    .filter(Boolean);

  if (cardItems.length === 0) return null;

  console.log("DEBUG: CardsBlock content:", content);

  return (
    <section className={"cards-block"} style={{ backgroundColor: blockColor }}>
      <div className="section is-flex is-align-items-center">
        <div className="container">
          <div className="columns is-flex is-align-items-center is-justify-content-center mb-4">
            <div className={`${titleColSize ? "column is-8" : ""}`}>
              {titleSize === "small" ? (
                <h3 className="has-text-centered" style={{ color: titleColor }}>
                  {content.title}
                </h3>
              ) : (
                <h2 className="has-text-centered" style={{ color: titleColor }}>
                  {content.title}
                </h2>
              )}
            </div>
          </div>
          {content.subtitle && (
            <p className="is-10 has-text-centered">{content.subtitle}</p>
          )}
          <div className="columns is-variable mt-6">
            {cardItems.map((card, index) => (
              <div
                className={`column ${cardItems.length === 2 ? "is-half" : "is-one-third"}`}
                key={index}
              >
                <FlipCard
                  bgImage={
                    isVertical ? verticalImages[index] : horizontalImages[index]
                  }
                  flippedImage={flippedImages[index]}
                  title={card.title}
                  subtitle={card.subtitle}
                  paragraph={card.paragraph}
                  cta={card.cta}
                  backParagraph={card.backParagraph}
                  isHorizontal={!isVertical}
                  isCaseC={isCaseC}
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
