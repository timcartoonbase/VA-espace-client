import React from "react";

import "./Case.css";

const Case = ({ image, caseText }) => {
  return (
    <div className="column is-half">
      <div className="card case-card">
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
