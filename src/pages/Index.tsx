import { useEffect, useState } from "react";
import Chrome from "@/components/Chrome";
import Preloader from "@/components/Preloader";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Work from "@/sections/Work";
import Mun from "@/sections/Mun";
import Renders from "@/sections/Renders";
import Contact from "@/sections/Contact";
import { initSmoothScroll } from "@/animations/smooth-scroll";
import { ScrollTrigger } from "@/lib/gsap";

const Index = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => initSmoothScroll(), []);

  // Fonts change line lengths; re-measure every trigger once they land.
  useEffect(() => {
    document.fonts?.ready.then(() => ScrollTrigger.refresh());
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  return (
    <>
      <Preloader onDone={() => setReady(true)} />
      <Chrome />
      <main>
        <Hero ready={ready} />
        <About />
        <Experience />
        <Work />
        <Mun />
        <Renders />
        <Contact />
      </main>
    </>
  );
};

export default Index;
