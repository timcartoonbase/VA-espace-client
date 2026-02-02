import React from "react";
import FlipCard from "../flip-card/FlipCard";

import cardV1 from "../../assets/images/card-v-1.svg";
import cardV2 from "../../assets/images/card-v-2.svg";
import cardV3 from "../../assets/images/card-v-3.svg";

import cardH1fr from "../../assets/images/card-h-1-fr.png";
import cardH1de from "../../assets/images/card-h-1-de.png";
import cardH1it from "../../assets/images/card-h-1-it.png";
import cardH2 from "../../assets/images/card-h-2.svg";

import cardC1 from "../../assets/images/card-c-1.png";
import cardC2 from "../../assets/images/card-c-2.png";
import cardC3 from "../../assets/images/card-c-3.png";

import cardC1de from "../../assets/images/card-c-1-de.png";
import cardC2de from "../../assets/images/card-c-2-de.png";
import cardC3de from "../../assets/images/card-c-3-de.png";

import cardC1it from "../../assets/images/card-c-1-it.png";
import cardC2it from "../../assets/images/card-c-2-it.png";
import cardC3it from "../../assets/images/card-c-3-it.png";

import cardVBack from "../../assets/images/card-v-back.svg";
import cardHBack from "../../assets/images/card-h-back.svg";

import cardC1Back from "../../assets/images/card-c-1b.png";
import cardC2Back from "../../assets/images/card-c-2b.png";
import cardC3Back from "../../assets/images/card-c-3b.png";

import cardC1Backde from "../../assets/images/card-c-1b-de.png";
import cardC2Backde from "../../assets/images/card-c-2b-de.png";
import cardC3Backde from "../../assets/images/card-c-3b-de.png";

import cardC1Backit from "../../assets/images/card-c-1b-it.png";
import cardC2Backit from "../../assets/images/card-c-2b-it.png";
import cardC3Backit from "../../assets/images/card-c-3b-it.png";

import "./CardsBlock.css";

const CardsBlock = ({
  content,
  titleSize,
  titleColor,
  titleColSize,
  blockColor,
  isVertical,
  isCaseC,
  lang = "fr", // <-- NEW prop
}) => {
  const cardH1ByLang = {
    fr: cardH1fr,
    de: cardH1de,
    it: cardH1it,
  };

  // Determine card images based on case type AND language
  const verticalImages = isCaseC
    ? lang === "de"
      ? [cardC1de, cardC2de, cardC3de]
      : lang === "it"
        ? [cardC1it, cardC2it, cardC3it]
        : [cardC1, cardC2, cardC3]
    : [cardV1, cardV2, cardV3];

  const horizontalImages = isCaseC
    ? lang === "de"
      ? [cardC1de, cardC2de, cardC3de]
      : lang === "it"
        ? [cardC1it, cardC2it, cardC3it]
        : [cardC1, cardC2, cardC3]
    : [cardH1ByLang[lang] ?? cardH1fr, cardH2];

  const flippedImages = isCaseC
    ? lang === "de"
      ? [cardC1Backde, cardC2Backde, cardC3Backde]
      : lang === "it"
        ? [cardC1Backit, cardC2Backit, cardC3Backit]
        : [cardC1Back, cardC2Back, cardC3Back]
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
