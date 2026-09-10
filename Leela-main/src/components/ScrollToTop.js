import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const startPosition = window.pageYOffset;
    const duration = 500; // 600ms — smooth aur tez
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic (smooth ending)
      const easeOut = 1 - Math.pow(1 - progress, 3);

      window.scrollTo(0, startPosition * (1 - easeOut));

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  }, [pathname]);

  return null;
}
