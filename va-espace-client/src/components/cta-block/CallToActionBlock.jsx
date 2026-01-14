import React from "react";
import RiveCard from "../rive-card/RiveCard";

import VideoThumbnail from "../../assets/images/video-thumbnail.svg";
import "./CallToActionBlock.css";

const CallToActionBlock = ({ content }) => {
  // Inside your component
  const cardsBlock = content || {};

  // Determine layout based on number of cards
  return (
    <section className={"cta-block"}>
      <div className="section">
        <div className="container ">
          <div className="columns is-flex is-align-items-center is-justify-content-center mb-4">
            <div className="">
              <h2 className="has-text-centered">{content.title}</h2>
            </div>
          </div>
          <div className="columns is-variable is-6 mt-6 mb-6">
            <div className={`column is-4`}>
              <figure className="image">
                <img src={VideoThumbnail} />
              </figure>
            </div>
            <div className={`column is-4`}>
              <figure className="image">
                <img src={VideoThumbnail} />
              </figure>
            </div>
            <div className={`column is-4`}>
              <figure className="image">
                <img src={VideoThumbnail} />
              </figure>
            </div>
          </div>
          <div className="columns is-flex is-align-items-center is-justify-content-center">
            <div className="">
              <h2 className="has-text-centered mt-4 mb-6">{content.title_2}</h2>
            </div>
          </div>
          <div className="columns is-flex is-align-items-center is-justify-content-center is-6 mt-2">
            <div
              className={`column is-4 is-flex is-align-items-center is-justify-content-center`}
            >
              <div className="languageBtn">fr</div>
            </div>
            <div
              className={`column is-4 is-flex is-align-items-center is-justify-content-center`}
            >
              <div className="languageBtn">it</div>
            </div>
            <div
              className={`column is-4 is-flex is-align-items-center is-justify-content-center`}
            >
              <div className="languageBtn">de</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionBlock;
