import React from "react";

import "./Case.css";

const Case = ({ caseImage, caseText }) => {
  return (
    <div className={"column is-half"}>
      <div className="card block-2-card">
        <div className="card-content">
          <h3>{caseText}</h3>
          <figure className="image">
            <img src={caseImage} />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Case;
