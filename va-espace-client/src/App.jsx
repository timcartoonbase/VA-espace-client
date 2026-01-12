import { useState } from "react";
import LandingBlock from "./components/landing-block/LandingBlock";
import CardsBlock from "./components/cards-block/CardsBlock";
import HeroBlock from "./components/hero-block/HeroBlock";
import CasesBlock from "./components/cases-block/CasesBlock";
import Footer from "./components/footer/Footer";
import content from "./content/content.json";

import heroImage1 from "./assets/Images/hero-image-1.svg";
import heroImage2 from "./assets/Images/hero-image-2.svg";
import casesImage from "./assets/Images/cases-image.svg";

function App() {
  const [lang, setLang] = useState("fr");

  return (
    <>
      <LandingBlock
        content={content[lang]["landing-block"]}
        setLang={setLang}
      />
      <CardsBlock content={content[lang]["cards-block-1"]} cards={3} />
      <HeroBlock
        content={content[lang]["hero-block-1"]}
        heroImage={heroImage1}
        imageColSize="is-8"
        blockColor="#b2d1d2"
      />
      <HeroBlock
        content={content[lang]["hero-block-2"]}
        titleColor="#de99b5"
        heroImage={heroImage2}
        blockColor="#ffffff"
      />
      <CardsBlock
        content={content[lang]["cards-block-2"]}
        titleSize="small"
        cards={2}
        blockColor="#ffffff"
      />
      <CasesBlock
        content={content[lang]["cases-block"]}
        casesImage={casesImage}
      />
      <CardsBlock
        content={content[lang]["cards-block-1"]}
        cards={3}
        blockColor="#80ae8c"
        titleColSize="small"
      />
      <Footer />
    </>
  );
}

export default App;
