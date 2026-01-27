import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ caseData, onClose }) => {
  if (!caseData) return null;

  const isBranchingCase = !!caseData.start && !!caseData.paths;

  const initialSlides = !isBranchingCase ? caseData.slides : [caseData.start];

  const [pathKey, setPathKey] = useState(null);
  const [index, setIndex] = useState(0);

  const slides = pathKey ? caseData.paths[pathKey] : initialSlides;

  const showDecision = isBranchingCase && !pathKey && caseData.start.choices;

  if (!slides || slides.length === 0) return null;

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={onClose}></div>

      <div className="modal-card cases-modal">
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={onClose}
        ></button>

        <section className="modal-card-body cases-modal-body">
          <div className="carousel-container">
            {/* LEFT ARROW */}
            {index > 0 && (
              <button
                className="carousel-arrow left"
                onClick={() => setIndex((i) => i - 1)}
                aria-label="Previous"
              >
                ←
              </button>
            )}

            {/* IMAGE FRAME */}
            <div className="carousel-frame">
              {/* Slide Title Overlay */}
              <div className="carousel-title is-align-items-center">
                {slides[index].title}
              </div>

              {/* Slide Image */}
              <img
                src={`${import.meta.env.BASE_URL}${slides[index].image}`}
                alt={slides[index].title}
              />

              {/* DECISION BUTTONS */}
              {showDecision && (
                <div className="decision-buttons">
                  {caseData.start.choices.map((choice) => (
                    <button
                      key={choice.next}
                      className="decision-btn"
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
            {index < slides.length - 1 && (
              <button
                className="carousel-arrow right"
                onClick={() => setIndex((i) => i + 1)}
                aria-label="Next"
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
