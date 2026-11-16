import { useEffect, useRef, useState } from "react";
import manifest from "../data/image-manifest.json";

// Serve responsive copies capped at the reference photo's 2530 × 1590 bounds.
export function imageProps(source, sizes = "(max-width: 1536px) 100vw, 1536px") {
  const image = manifest[source];
  if (!image?.variants?.length) return { src: source };
  return {
    src: image.variants[image.variants.length - 1].src,
    srcSet: image.variants.map((variant) => `${variant.src} ${variant.width}w`).join(", "),
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
  const variants = manifest[source]?.variants;
  if (!variants?.length) return { backgroundImage: `url('${source}')` };
  return {
    backgroundImage: `url('${variants[variants.length - 1].src}')`,
    "@media (max-width: 600px)": {
      backgroundImage: `url('${variants.find((variant) => variant.width >= 1280)?.src || variants[variants.length - 1].src}')`,
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
  return {
    ref,
    className: "project-background-image",
    sx: { mx: "auto", ...(ready ? backgroundImage(source) : {}) },
  };
}
