import { useRef } from "react";
import { downToUp, scaleUp } from "../../animations/motionVariants";
import { certifications } from "../../data/certifications";
import { motion, useInView } from "motion/react";

export const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section className="py-20 bg-dark-light">
      <motion.div
        className="max-w-5xl mx-auto px-6 md:px-12"
        variants={downToUp}
        initial="hidden"
        whileInView="visible"
        ref={ref}
        viewport={{ once: true, margin: "-100px" }}>
        <h2 className="text-4xl font-bold mb-12 text-center">
          Certifications & <span className="gradient-text">Awards</span>
        </h2>

        <motion.div className="grid grid-cols-1 gap-6" variants={scaleUp}>
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-dark p-6 rounded-xl border border-gray-800 hover:border-primary/50 transition-all duration-300 text-center">
              <div className="text-4xl mb-3">🏆</div>
              <h3 className="font-bold text-primary mb-2">{cert.name}</h3>
              <p className="text-sm text-gray-400 mb-1">{cert.issuer}</p>
              <span className="text-xs text-gray-500">{cert.year}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
