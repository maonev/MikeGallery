import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { downToUp } from "../../animations/motionVariants";

export const Header = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.section
      className="section-container"
      variants={downToUp}
      initial="hidden"
      whileInView="visible"
      ref={ref}
      viewport={{ once: true, margin: "-100px" }}>
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          My <span className="gradient-text">Journey</span>
        </h1>
        <p className="text-gray-400 text-lg">
          A timeline of my professional growth, education, and achievements in
          the world of web development.
        </p>
      </div>
    </motion.section>
  );
};
