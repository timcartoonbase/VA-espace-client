import React from "react";
import { RiveComponent, useRive } from "rive-react";

import "./RiveCard.css";

const RiveCard = ({ riveFile, title, subtitle, description }) => {
  // Setup Rive instance
  const { rive, RiveComponent } = useRive({
    src: riveFile,
    stateMachines: "State Machine 1",
    autoplay: true,
    fit: "cover", // options: 'contain' | 'cover' | 'fill'
    alignment: "center",
  });

  return (
    <>
      <div className="rive-card">
        <RiveComponent />
      </div>
    </>
  );
};

export default RiveCard;
