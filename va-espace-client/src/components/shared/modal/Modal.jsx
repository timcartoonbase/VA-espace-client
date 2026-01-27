import React, { useState } from "react";
import CardsBlock from "../../cards-block/CardsBlock";
import "./Modal.css";

const Modal = ({ caseData, onClose }) => {
  if (!caseData) return null;

  const isBranching = !!caseData.paths; // case 3
  const initialSlides = !isBranching
    ? caseData.slides || [caseData.start]
    : [caseData.start];

  const [pathKey, setPathKey] = useState(null);
  const [index, setIndex] = useState(0);

  // Determine active slides
  const slides = pathKey ? caseData.paths[pathKey] : initialSlides;

  // Guard: slide might be undefined
  const currentSlide = slides?.[index];
  if (!currentSlide) return null;

  const showDecision =
    isBranching && !pathKey && currentSlide.choices?.length > 0;
  const showArrows = slides.length > 1;

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={onClose}></div>

      <div className="modal-card cases-modal">
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={onClose}
        />

        <section className="modal-card-body cases-modal-body">
          <div className="carousel-container">
            {/* LEFT ARROW */}
            {showArrows && index > 0 && (
              <button
                className="carousel-arrow left"
                onClick={() => setIndex((i) => i - 1)}
              >
                ←
              </button>
            )}

            {/* IMAGE + TITLE + CARDS */}
            <div className="carousel-frame" style={{ position: "relative" }}>
              {currentSlide.title && (
                <div className="carousel-title">{currentSlide.title}</div>
              )}

              <img
                src={`${import.meta.env.BASE_URL}${currentSlide.image}`}
                alt={currentSlide.title || ""}
                style={{ display: "block", width: "100%" }}
              />

              {/* Cards overlay */}
              {currentSlide.cardsContent && (
                <div
                  style={{
                    position: "absolute",
                    bottom: "20px", // adjust distance from bottom
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "90%", // adjust width
                    zIndex: 10,
                  }}
                >
                  <CardsBlock
                    content={currentSlide.cardsContent}
                    isVertical
                    titleSize="small"
                    isCaseC={true}
                  />
                </div>
              )}

              {/* DECISION BUTTONS */}
              {showDecision && (
                <div className="decision-buttons">
                  {currentSlide.choices.map((choice, idx) => (
                    <button
                      key={choice.next}
                      className="decision-btn"
                      style={idx === 1 ? { transform: "translateY(40%)" } : {}}
                      onClick={() => {
                        setPathKey(choice.next);
                        setIndex(0);
                      }}
                    >
                      {choice.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* RIGHT ARROW */}
            {showArrows && index < slides.length - 1 && (
              <button
                className="carousel-arrow right"
                onClick={() => setIndex((i) => i + 1)}
              >
                →
              </button>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Modal;
