import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useTransform,
  useInView,
} from "motion/react";

export function Counter({ targetNumber }) {
  const count = useMotionValue(0);
  const rounded = useTransform(() => Math.round(count.get()));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, targetNumber, {
      duration: 2,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [count, targetNumber, isInView]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}
