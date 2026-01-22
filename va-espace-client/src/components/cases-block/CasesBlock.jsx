import React from "react";
import { useState } from "react";
import Case from "./case/Case";
import Modal from "../shared/modal/Modal";

import casesData from "../../content/cases.json";
import CaseImage1 from "../../assets/images/case-card-1.svg";
import CaseImage2 from "../../assets/images/case-card-2.svg";
import CaseImage3 from "../../assets/images/case-card-3.svg";
import CaseImage4 from "../../assets/images/case-card-4.svg";
import "./CasesBlock.css";

const CasesBlock = ({ content, casesImage }) => {
  const [activeCase, setActiveCase] = useState(null);

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
            <Case
              image={CaseImage1}
              caseText={content.case_1_title}
              onClick={() =>
                setActiveCase({
                  title: content.case_1_title, // still Supabase
                  slides: casesData.fr[0].slides, // now JSON
                })
              }
            />
            <Case
              image={CaseImage2}
              caseText={content.case_2_title}
              onClick={() =>
                setActiveCase({
                  title: content.case_2_title, // still Supabase
                  slides: casesData.fr[1].slides, // now JSON
                })
              }
            />
            <Case
              image={CaseImage3}
              caseText={content.case_3_title}
              onClick={() =>
                setActiveCase({
                  title: content.case_3_title, // still Supabase
                  slides: casesData.fr[2].slides, // now JSON
                })
              }
            />
            <Case
              image={CaseImage4}
              caseText={content.case_4_title}
              onClick={() =>
                setActiveCase({
                  title: content.case_4_title, // still Supabase
                  slides: casesData.fr[3].slides, // now JSON
                })
              }
            />
          </div>
          {activeCase && (
            <Modal caseData={activeCase} onClose={() => setActiveCase(null)} />
          )}
        </div>
      </div>
    </section>
  );
};

export default CasesBlock;
