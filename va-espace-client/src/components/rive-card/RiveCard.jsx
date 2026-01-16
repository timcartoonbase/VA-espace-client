import React from "react";
import { RiveComponent, useRive } from "rive-react";

import "./RiveCard.css";

const RiveCard = ({ riveFile, title, subtitle, description, isVertical }) => {
  // Setup Rive instance
  const { rive, RiveComponent } = useRive({
    src: `${import.meta.env.BASE_URL}${riveFile}`,
    stateMachines: "State Machine 1",
    autoplay: true,
    fit: "cover", // options: 'contain' | 'cover' | 'fill'
    alignment: "center",
  });

  return (
    <>
      <div className={`rive-card${!isVertical ? " rive-card-h" : ""}`}>
        <RiveComponent />
      </div>
    </>
  );
};

export default RiveCard;
