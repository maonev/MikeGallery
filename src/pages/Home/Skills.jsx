import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { skillsData } from "../../data/skills";
import { downToUp, itemSequence } from "../../animations/motionVariants";

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.section
      className="section-container"
      variants={downToUp}
      initial="hidden"
      whileInView="visible"
      ref={ref}>
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          What I <span className="gradient-text">Do Best</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          I specialize in creating modern web experiences using cutting-edge
          technologies
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 [&>*:last-child]:md:col-start-2">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-dark-light p-8 rounded-2xl border border-gray-800 card-hover"
            variants={itemSequence}>
            <div className="text-5xl mb-4">{skill.icon}</div>
            <h3 className="text-xl font-bold mb-3 text-primary">
              {skill.title}
            </h3>
            <p className="text-gray-400">{skill.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
