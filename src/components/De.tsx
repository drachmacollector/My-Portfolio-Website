import { GLOSS } from "@/constants/content";

/**
 * A German word or phrase in the blackletter face. The reticle cursor locks onto it
 * and shows the English from GLOSS as its tooltip.
 */
const De = ({ children, className = "" }: { children: string; className?: string }) => {
  const en = GLOSS[children];
  return (
    <span lang="de" data-cursor-label={en} className={`fraktur ${className}`}>
      {children}
      {en && <span className="sr-only"> ({en})</span>}
    </span>
  );
};

export default De;
