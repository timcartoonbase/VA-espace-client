import { useState } from "react";
import { useContent } from "./hooks/useContent";
import LandingBlock from "./components/landing-block/LandingBlock";
import CardsBlock from "./components/cards-block/CardsBlock";
import HeroBlock from "./components/hero-block/HeroBlock";
import CasesBlock from "./components/cases-block/CasesBlock";
import CallToActionBlock from "./components/cta-block/CallToActionBlock";
import Footer from "./components/footer/Footer";
import content from "./content/content.json";

import heroImage1 from "./assets/images/hero-image-1.svg";
import heroImage2 from "./assets/images/hero-image-2.svg";
import casesImage from "./assets/images/cases-image.svg";
// import riveCardV1 from "./assets/rives/card-v-1.riv";

function App() {
  const [lang, setLang] = useState("fr");
  const { content, loading } = useContent(lang);

  if (loading) return <div>Loading…</div>;

  return (
    <>
      {content["1-landing"] && (
        <LandingBlock
          content={content["1-landing"]}
          lang={lang}
          setLang={setLang}
        />
      )}
      {content["2-cards"] && (
        <CardsBlock
          content={content["2-cards"]}
          blockColor={"#86bc80"}
          isVertical={true}
        />
      )}
      {content["3-hero"] && (
        <HeroBlock
          content={content["3-hero"]}
          heroImage={heroImage1}
          imageColSize="is-8"
          blockColor="#b2d1d2"
        />
      )}
      {content["4-hero"] && (
        <HeroBlock
          content={content["4-hero"]}
          titleColor="#de99b5"
          heroImage={heroImage2}
          blockColor="#ffffff"
          noPad={true}
        />
      )}
      {content["5-cards"] && (
        <CardsBlock
          content={content["5-cards"]}
          titleColor="#de99b5"
          blockColor="#ffffff"
        />
      )}
      {content["6-cases"] && (
        <CasesBlock content={content["6-cases"]} casesImage={casesImage} />
      )}
      {/* <CasesBlock
        content={content[lang]["cases-block"]}
        casesImage={casesImage}
      /> */}

      {content["7-cta"] && <CallToActionBlock content={content["7-cta"]} />}
      {/* <CardsBlock
        content={content[lang]["cards-block-1"]}
        cards={3}
        blockColor="#80ae8c"
        titleColSize="small"
      /> */}
      <Footer />
    </>
  );
}

export default App;

// function App() {
//   return <TestSupabase />;
// }

// export default App;
