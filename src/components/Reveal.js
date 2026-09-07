import React from "react";
import { Box } from "@mui/material";

function Reveal({ children, delay = 0, distance = 28, sx = {}, ...props }) {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const element = ref.current;

    if (!element) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -48px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={ref}
      sx={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate3d(0, 0, 0)" : `translate3d(0, ${distance}px, 0)`,
        transition: `opacity 700ms ease ${delay}ms, transform 700ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        willChange: "opacity, transform",
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
}

export default Reveal;
