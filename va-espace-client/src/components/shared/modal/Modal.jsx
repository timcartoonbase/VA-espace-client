import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ caseData, onClose }) => {
  const [index, setIndex] = useState(0);
  const slides = caseData.slides;

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={onClose}></div>

      <div className="modal-card cases-modal">
        {/* Header */}
        <header className="modal-card-head cases-modal-head">
          <p className="modal-card-title">{slides[index].title}</p>
          <button
            className="modal-close is-large"
            aria-label="close"
            onClick={onClose}
          ></button>
        </header>

        {/* Body */}
        <section className="modal-card-body cases-modal-body">
          <div className="carousel-container">
            {/* Left arrow */}
            {index > 0 && (
              <button
                className="carousel-arrow left"
                onClick={() => setIndex(index - 1)}
                aria-label="Previous"
              >
                ←
              </button>
            )}

            {/* Image frame */}
            <div className="carousel-frame">
              <img
                src={`${import.meta.env.BASE_URL}${slides[index].image}`}
                alt={slides[index].title}
              />
            </div>

            {/* Right arrow */}
            {index < slides.length - 1 && (
              <button
                className="carousel-arrow right"
                onClick={() => setIndex(index + 1)}
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
