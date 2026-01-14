import React from "react";
import Case from "./case/Case";

import CaseImage1 from "../../assets/images/case-card-1.svg";
import CaseImage2 from "../../assets/images/case-card-2.svg";
import CaseImage3 from "../../assets/images/case-card-3.svg";
import CaseImage4 from "../../assets/images/case-card-4.svg";
import "./CasesBlock.css";

const CasesBlock = ({ content, casesImage }) => {
  return (
    <section className="cases-block mb-6">
      <div className="section cases-section">
        <div className="container is-flex is-flex-direction-column is-align-items-center">
          {/* Bottom: Text + Image */}
          <div className="columns is-vcentered is-variable is-8">
            <div className="column is-half">
              <h2 className="mb-2 cases-title">{content.title}</h2>
              <p>{content.description}</p>
            </div>

            <div className={"column is-half"}>
              <figure className="image">
                <img src={casesImage} alt={content.imageAlt} />
              </figure>
            </div>
          </div>

          <div className="columns is-multiline is-variable is-6 mt-6">
            <Case image={CaseImage1} caseText="Case 1" />
            <Case image={CaseImage2} caseText="Case 2" />
            <Case image={CaseImage3} caseText="Case 3" />
            <Case image={CaseImage4} caseText="Case 4" />
            {/* {content.cards.map((card, index) => (
              <div className={"column is-half"} key={index}>
                <div className="card block-2-card">
                  <div className="card-content">
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </div>
                </div>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasesBlock;
