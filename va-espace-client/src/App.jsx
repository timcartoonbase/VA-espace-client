import { useState, useRef, useEffect } from "react";
import { useContent } from "./hooks/useContent";
import LandingBlock from "./components/landing-block/LandingBlock";
import CardsBlock from "./components/cards-block/CardsBlock";
import HeroBlock from "./components/hero-block/HeroBlock";
import CasesBlock from "./components/cases-block/CasesBlock";
import CallToActionBlock from "./components/cta-block/CallToActionBlock";
import Footer from "./components/footer/Footer";

import heroImage1 from "./assets/images/hero-image-1.svg";
import heroImage2 from "./assets/images/hero-image-2.svg";
import casesImage from "./assets/images/cases-image.svg";

function App() {
  const [lang, setLang] = useState("fr");
  const { content, loading } = useContent(lang);
  useEffect(() => {
    console.log("Language changed to:", lang);
  }, [lang]);

  // 🔑 refs for scrolling
  const cardsRef = useRef(null);
  const hero3Ref = useRef(null);
  const hero4Ref = useRef(null);

  const handleScroll = (section) => {
    const sections = {
      "2-cards": cardsRef,
      "3-hero": hero3Ref,
      "4-hero": hero4Ref,
    };

    sections[section]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  if (loading) return <div>Loading…</div>;

  return (
    <>
      {content["1-landing"] && (
        <LandingBlock
          content={content["1-landing"]}
          lang={lang}
          setLang={setLang}
          onScroll={handleScroll} // 👈 pass it down
        />
      )}

      {content["2-cards"] && (
        <div ref={cardsRef}>
          <CardsBlock
            content={content["2-cards"]}
            blockColor="#6ac39d"
            isVertical={true}
          />
        </div>
      )}

      {content["3-hero"] && (
        <div ref={hero3Ref}>
          <HeroBlock
            content={content["3-hero"]}
            heroImage={heroImage1}
            imageColSize="is-8"
            blockColor="#a1ced6"
          />
        </div>
      )}

      {content["4-hero"] && (
        <div ref={hero4Ref}>
          <HeroBlock
            content={content["4-hero"]}
            titleColor="#de99b5"
            heroImage={heroImage2}
            blockColor="#ffffff"
            noNum={true}
            noPad={true}
          />
        </div>
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

      {content["7-cta"] && <CallToActionBlock content={content["7-cta"]} />}

      <Footer />
    </>
  );
}

export default App;
