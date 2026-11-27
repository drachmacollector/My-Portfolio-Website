import { useEffect, useRef, useState } from "react";
import TargetCursor from "@/components/TargetCursor";
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

/**
 * What the reticle locks onto: buttons (real ones, pill-shaped links, and the
 * disclosure toggles) and German text, which also shows its English as a tooltip.
 */
const CURSOR_TARGETS = [
  "button",
  "summary",
  "a.rounded-full",
  '[lang="de"][data-cursor-label]',
].join(", ");

const Index = () => {
  const [ready, setReady] = useState(false);
  // The reticle cursor lives everywhere below the landing screen.
  const rest = useRef<HTMLDivElement>(null);

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
        <div ref={rest}>
          <About />
          <Experience />
          <Work />
          <Mun />
          <Renders />
          <Contact />
        </div>
      </main>
      <TargetCursor
        container={rest}
        targetSelector={CURSOR_TARGETS}
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
      />
    </>
  );
};

export default Index;
