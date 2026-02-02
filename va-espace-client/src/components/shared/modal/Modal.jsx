import React, { useState } from "react";
import CardsBlock from "../../cards-block/CardsBlock";
import "./Modal.css";

const OPEN_LABEL = {
  fr: "Ouvrir",
  de: "Öffnen",
  it: "Aprire",
};

const CLOSE_LABEL = {
  fr: "Fermer",
  de: "Schliessen",
  it: "Chiudere",
};

// Add `openCase3` as a prop
const Modal = ({ caseData, onClose, lang, openCase3 }) => {
  if (!caseData) return null;

  const isBranching = !!caseData.paths;

  const initialSlides = !isBranching
    ? caseData.slides || [caseData.start]
    : [caseData.start];

  const [pathKey, setPathKey] = useState(null);
  const [index, setIndex] = useState(0);
  const [history, setHistory] = useState([]);

  // ✅ NOW index exists
  const isCase2 = caseData.caseIndex === 1;
  const showCase3Button = isCase2 && index === 3;

  const slides = pathKey ? caseData.paths[pathKey] : initialSlides;
  const currentSlide = slides?.[index];
  if (!currentSlide) return null;

  const showDecision =
    isBranching && !pathKey && currentSlide.choices?.length > 0;
  const showArrows = slides.length > 1 || history.length > 0;

  const isLastSlide = index === slides.length - 1;

  const goNext = () => {
    if (index < slides.length - 1) setIndex((i) => i + 1);
  };

  const goPrev = () => {
    if (index > 0) setIndex((i) => i - 1);
    else if (history.length > 0) {
      const last = history[history.length - 1];
      setHistory((h) => h.slice(0, -1));
      setPathKey(last.pathKey);
      setIndex(last.index);
    }
  };

  const chooseDecision = (choice) => {
    setHistory((h) => [...h, { pathKey, index }]);
    setPathKey(choice.next);
    setIndex(0);
  };

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
            {showArrows && (index > 0 || history.length > 0) && (
              <button className="carousel-arrow left" onClick={goPrev}>
                ←
              </button>
            )}

            {/* IMAGE + TITLE + CARDS */}
            <div className="carousel-frame" style={{ position: "relative" }}>
              {currentSlide.title && (
                <div className="carousel-title">
                  <div>{currentSlide.title}</div>

                  {isLastSlide && (
                    <a
                      href="https://support-apps.vaudoise.ch/s/probleme"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="open-last-slide-btn">
                        {OPEN_LABEL[lang] || OPEN_LABEL.fr}
                      </button>
                    </a>
                  )}
                </div>
              )}

              <div className="case-image-wrapper">
                <img
                  src={`${import.meta.env.BASE_URL}${currentSlide.image}`}
                  alt={currentSlide.title || ""}
                />
              </div>

              {/* Cards overlay */}
              {currentSlide.cardsContent && (
                <div
                  style={{
                    position: "absolute",
                    bottom: "15%",
                    left: "50%",
                    transform: "translateX(-50%) translateY(0%)",
                    width: "90%",
                    zIndex: 10,
                  }}
                >
                  <CardsBlock
                    content={currentSlide.cardsContent}
                    isVertical
                    titleSize="small"
                    isCaseC
                    lang={lang}
                  />
                </div>
              )}

              {/* DECISION BUTTONS */}
              {showDecision && (
                <div className="decision-buttons">
                  {currentSlide.choices.map((choice) => (
                    <button
                      className="decision-btn"
                      key={choice.next}
                      onClick={() => chooseDecision(choice)}
                    >
                      {choice.label}
                    </button>
                  ))}
                </div>
              )}

              {/* NEW: Case 3 button on slide 2-4 */}
              {/* {showCase3Button && openCase3 && (
                <button
                  className="case3-open-btn"
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    right: "10px",
                    zIndex: 20,
                  }}
                  onClick={openCase3}
                >
                  Case 3
                </button>
              )} */}
              {/* CLOSE BUTTON – bottom center over image */}
              <button className="close-overlay-btn" onClick={onClose}>
                {CLOSE_LABEL[lang] || CLOSE_LABEL.fr}
              </button>
            </div>

            {/* RIGHT ARROW */}
            {showArrows && index < slides.length - 1 && (
              <button className="carousel-arrow right" onClick={goNext}>
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
