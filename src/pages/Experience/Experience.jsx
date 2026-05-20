import { useRef } from "react";
import { downToUp, scaleUp } from "../../animations/motionVariants";
import { experiences } from "../../data/experiences";
import { motion, useInView } from "motion/react";

export const Experience = () => {
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
          Work <span className="gradient-text">Experience</span>
        </h2>

        <motion.div className="space-y-8" variants={scaleUp}>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-dark p-8 rounded-2xl border border-gray-800 hover:border-primary/50 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-xl text-gray-300">{exp.company}</p>
                </div>
                <span className="text-gray-400 bg-primary/10 px-4 py-1 rounded-full text-sm mt-2 lg:mt-0 self-start">
                  {exp.period}
                </span>
              </div>

              <p className="text-gray-400 mb-4">{exp.description}</p>

              <div className="space-y-2">
                <p className="text-sm font-semibold text-primary">
                  Key Achievements:
                </p>
                <ul className="space-y-1">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-400 flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
