import { useEffect, useRef, useState } from "react";
import manifest from "../data/image-manifest.json";

// Serve original artwork without lossy compression or resolution limits.
export function imageProps(source) {
  const image = manifest[source];
  if (!image) return { src: source };
  return {
    src: source,
    width: image.width,
    height: image.height,
  };
}

export function imageRatio(source) {
  const image = manifest[source];
  return image ? image.width / image.height : 1;
}

export function backgroundImage(source) {
  return { backgroundImage: `url('${source}')` };
}

// Defer homepage background downloads until a card approaches the viewport.
export function useBackgroundImage(source, eager = false) {
  const ref = useRef(null);
  const [ready, setReady] = useState(eager || typeof IntersectionObserver === "undefined");
  useEffect(() => {
    if (ready || !ref.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setReady(true);
        observer.disconnect();
      }
    }, { rootMargin: "600px" });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ready]);
  return { ref, sx: ready ? backgroundImage(source) : {} };
}
