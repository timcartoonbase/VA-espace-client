import React from "react";

import VideoThumbnail1 from "../../assets/images/thumbnails/fr-1.jpg";
import VideoThumbnail2 from "../../assets/images/thumbnails/fr-2.jpg";
import VideoThumbnail3 from "../../assets/images/thumbnails/fr-3.jpg";

import VideoThumbnail1de from "../../assets/images/thumbnails/de-1.jpg";
import VideoThumbnail2de from "../../assets/images/thumbnails/de-2.jpg";
import VideoThumbnail3de from "../../assets/images/thumbnails/de-3.jpg";

import VideoThumbnail1it from "../../assets/images/thumbnails/it-1.jpg";
import VideoThumbnail2it from "../../assets/images/thumbnails/it-2.jpg";
import VideoThumbnail3it from "../../assets/images/thumbnails/it-3.jpg";

import "./CallToActionBlock.css";

const thumbnailsByLang = {
  fr: [VideoThumbnail1, VideoThumbnail2, VideoThumbnail3],
  de: [VideoThumbnail1de, VideoThumbnail2de, VideoThumbnail3de],
  it: [VideoThumbnail1it, VideoThumbnail2it, VideoThumbnail3it],
};

const CallToActionBlock = ({ content, lang }) => {
  const thumbnails = thumbnailsByLang[lang] || thumbnailsByLang.fr;

  return (
    <section className="cta-block">
      <div className="section cta-section">
        <div className="container">
          {/* Title */}
          <div className="columns is-flex is-align-items-center is-justify-content-center mb-4">
            <h2 className="has-text-centered">{content.title}</h2>
          </div>

          {/* Thumbnails */}
          <div className="columns is-variable is-6 mt-6 mb-6">
            {thumbnails.map((src, index) => (
              <div className="column is-4 " key={index}>
                <figure className="image thumbnail">
                  <img src={src} alt={`video-thumbnail-${lang}-${index + 1}`} />
                </figure>
              </div>
            ))}
          </div>

          {/* Link */}
          <div className="columns is-flex is-align-items-center is-justify-content-center">
            <a
              href={
                lang === "fr"
                  ? "https://www.vaudoise.ch/fr/particulier/votre-espace-client#faq"
                  : lang === "de"
                    ? "https://www.vaudoise.ch/de/privatperson/kundenbereich#faq"
                    : "https://www.vaudoise.ch/it/privati/la-vostra-area-clienti#faq"
              }
            >
              <h2 className="has-text-centered mt-4 mb-6">{content.title_2}</h2>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionBlock;
