import { useEffect } from "react";
import { createPortal } from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);
    document.body.classList.add("is-clipped");

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.classList.remove("is-clipped");
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className={`modal ${isOpen ? "is-active" : ""}`}>
      <div className="modal-background" onClick={onClose} />

      <div className="modal-content">
        <div className="box" style={{ maxWidth: "960px", margin: "0 auto" }}>
          {children}
        </div>
      </div>

      {/* <div className="modal-content">
        <section className="hero is-fullheight is-light">
          <div className="hero-body">{children}</div>
        </section>
      </div> */}

      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={onClose}
      />
    </div>,
    document.body
  );
};

export default Modal;
