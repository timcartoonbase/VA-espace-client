import { useState, useRef, useEffect } from "react";
import { useContent } from "./hooks/useContent";
import LandingBlock from "./components/landing-block/LandingBlock";
import CardsBlock from "./components/cards-block/CardsBlock";
import HeroBlock from "./components/hero-block/HeroBlock";
import CasesBlock from "./components/cases-block/CasesBlock";
import CallToActionBlock from "./components/cta-block/CallToActionBlock";
import Footer from "./components/footer/Footer";

// 🇫🇷 FR (default)
import heroImage1 from "./assets/images/hero-image-1.svg";
import heroImage2 from "./assets/images/hero-image-2.svg";
import casesImage from "./assets/images/cases-image.svg";

// 🇩🇪 DE
import heroImage1de from "./assets/images/hero-image-1-de.svg";
import casesImagede from "./assets/images/cases-image-de.svg";

// 🇮🇹 IT
import heroImage1it from "./assets/images/hero-image-1-it.svg";
import casesImageit from "./assets/images/cases-image-it.svg";

const getLangFromUrl = () => {
  const params = new URLSearchParams(window.location.search);
  const lang = params.get("lang");
  return ["fr", "de", "it"].includes(lang) ? lang : "fr";
};

function App() {
  const initialLangRef = useRef(getLangFromUrl());
  const [lang, setLang] = useState(initialLangRef.current);

  const { content, loading } = useContent(lang);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.set("lang", lang);
    window.history.replaceState(null, "", `?${params.toString()}`);
  }, [lang]);

  useEffect(() => {}, [lang]);

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

  // 🌍 Language → image mapping
  const hero1ByLang = {
    fr: heroImage1,
    de: heroImage1de,
    it: heroImage1it,
  };

  const casesImageByLang = {
    fr: casesImage,
    de: casesImagede,
    it: casesImageit,
  };

  if (loading) return <div>Loading…</div>;

  return (
    <>
      {content["1-landing"] && (
        <LandingBlock
          content={content["1-landing"]}
          lang={lang}
          setLang={setLang}
          onScroll={handleScroll}
        />
      )}

      {content["2-cards"] && (
        <div ref={cardsRef}>
          <CardsBlock
            content={content["2-cards"]}
            blockColor="#6ac39d"
            isVertical
            lang={lang}
          />
        </div>
      )}

      {content["3-hero"] && (
        <div ref={hero3Ref}>
          <HeroBlock
            content={content["3-hero"]}
            heroImage={hero1ByLang[lang] ?? heroImage1}
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
            noNum
            noPad
          />
        </div>
      )}

      {content["5-cards"] && (
        <CardsBlock
          content={content["5-cards"]}
          titleColor="#de99b5"
          blockColor="#ffffff"
          lang={lang}
        />
      )}

      {content["6-cases"] && (
        <CasesBlock
          content={content["6-cases"]}
          casesImage={casesImageByLang[lang] ?? casesImage}
          lang={lang}
        />
      )}

      {content["7-cta"] && (
        <CallToActionBlock content={content["7-cta"]} lang={lang} />
      )}

      <Footer />
    </>
  );
}

export default App;
