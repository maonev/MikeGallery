import { easeOut, scale } from "motion";

export const leftToRight = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      scale: { type: "spring", visualDuration: 1, bounce: 0.5 },
    },
  },
};

export const scaleUp = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 1,
      duration: 0.5,
      scale: { type: "spring", visualDuration: 1, bounce: 0.5 },
    },
  },
};

export const downToUp = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOut,
      scale: {
        type: "spring",
        visualDuration: 1,
      },
      staggerChildren: 0.1,
      delayChildren: 0.4,
    },
  },
};

export const rightToLeft = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: 0.2,
      staggerChildren: 0.1,
      delayChildren: 0.4,
    },
  },
};

export const itemSequence = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};
