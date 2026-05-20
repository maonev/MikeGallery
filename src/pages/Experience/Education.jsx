import { useRef } from "react";
import { education } from "../../data/education";
import { motion, useInView } from "motion/react";
import { downToUp, scaleUp } from "../../animations/motionVariants";

export const Education = () => {
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
      <h2 className="text-4xl font-bold mb-12 text-center">
        <span className="gradient-text">Education</span>
      </h2>

      <motion.div
        className="grid grid-cols-1 gap-8 max-w-5xl mx-auto"
        variants={scaleUp}>
        {education.map((edu, index) => (
          <div
            key={index}
            className="bg-dark-light p-8 rounded-2xl border border-gray-800 hover:border-primary/50 transition-all duration-300">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-primary mb-2">
                {edu.degree}
              </h3>
              <p className="text-lg text-gray-300">{edu.school}</p>
              <span className="text-sm text-gray-400">{edu.period}</span>
            </div>
            <p className="text-gray-400">{edu.description}</p>
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
};
