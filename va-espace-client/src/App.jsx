import { useState } from "react";
import LandingBlock from "./components/landing-block/LandingBlock";
import CardsBlock from "./components/cards-block/CardsBlock";
import HeroBlock from "./components/hero-block/HeroBlock";
import content from "./content/content.json";

import heroImage1 from "./assets/Images/hero-image-1.svg";
import heroImage2 from "./assets/Images/hero-image-2.svg";

function App() {
  const [lang, setLang] = useState("fr");

  return (
    <>
      <LandingBlock
        content={content[lang]["landing-block"]}
        setLang={setLang}
      />
      <CardsBlock content={content[lang]["cards-block"]} />
      <HeroBlock
        content={content[lang]["hero-block-1"]}
        heroImage={heroImage1}
        blockColor="#b2d1d2"
      />
      <HeroBlock
        content={content[lang]["hero-block-2"]}
        titleColor="#de99b5"
        heroImage={heroImage2}
        blockColor="#f5f5f5"
      />
    </>
  );
}

export default App;
