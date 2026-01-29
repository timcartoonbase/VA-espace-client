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

  // NEW: safe accessor to avoid undefined images and ensure layout stability
  const getImage = (arr, idx) => {
    if (!arr || arr.length === 0) return null;
    return arr[idx] ?? arr[arr.length - 1];
  };

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
    <section
      className={`cards-block ${isCaseC ? "cards-block-c" : ""}`}
      style={{ backgroundColor: blockColor }}
    >
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
            {cardItems.map((card, index) => {
              // compute equal column widths reliably
              const isTwo = cardItems.length === 2;
              const widthStyle = isTwo
                ? { flex: "0 0 50%", maxWidth: "50%" }
                : { flex: "0 0 33.3333%", maxWidth: "33.3333%" };

              return (
                <div
                  className={`column ${isTwo ? "is-half" : "is-one-third"}`}
                  key={index}
                  // allow overflow for case C so transformed/positioned children aren't clipped
                  style={
                    isCaseC
                      ? {
                          ...widthStyle,
                          overflow: "visible",
                          position: "relative",
                          // make the rightmost card render above neighbours to avoid sibling clipping
                          zIndex: index === cardItems.length - 1 ? 2 : 1,
                        }
                      : undefined
                  }
                >
                  {/* wrapper ensures the FlipCard fills its column */}
                  <div
                    className="card-wrapper"
                    style={{ width: "100%", height: "100%" }}
                  >
                    <FlipCard
                      // use safe accessor so we always pass a valid image
                      bgImage={getImage(
                        isVertical ? verticalImages : horizontalImages,
                        index,
                      )}
                      flippedImage={getImage(flippedImages, index)}
                      title={card.title}
                      subtitle={card.subtitle}
                      paragraph={card.paragraph}
                      cta={card.cta}
                      backParagraph={card.backParagraph}
                      isHorizontal={!isVertical}
                      isCaseC={isCaseC}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardsBlock;
