import { useEffect, useRef, useState } from "react";
import manifest from "../data/image-manifest.json";

export function imageProps(source, sizes = "(max-width: 1536px) 100vw, 1536px") {
  const image = manifest[source];
  if (!image) return { src: source };
  return {
    src: image.variants[image.variants.length - 1].src,
    srcSet: image.variants.map(({ src, width }) => `${src} ${width}w`).join(", "),
    sizes,
    width: image.width,
    height: image.height,
  };
}

export function imageRatio(source) {
  const image = manifest[source];
  return image ? image.width / image.height : 1;
}

export function backgroundImage(source) {
  const image = manifest[source];
  if (!image) return { backgroundImage: `url('${source}')` };
  const choose = (width) => image.variants.find((variant) => variant.width >= width) || image.variants[image.variants.length - 1];
  return {
    backgroundImage: `url('${choose(1280).src}')`,
    '@media (min-width: 900px), (min-resolution: 2dppx) and (min-width: 600px)': {
      backgroundImage: `url('${choose(2400).src}')`,
    },
  };
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
