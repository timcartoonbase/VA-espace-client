import React from "react";
import "./Case.css";

const Case = ({ image, caseText, onClick }) => {
  return (
    <div className="column is-half">
      <div
        className="card case-card"
        role="button"
        tabIndex={0}
        onClick={onClick}
        onKeyDown={(e) => e.key === "Enter" && onClick?.()}
      >
        <div
          className="card-content case-card-content"
          style={{
            backgroundImage: `url(${image})`,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <h3 className="caseText">{caseText}</h3>
        </div>
      </div>
    </div>
  );
};

export default Case;
