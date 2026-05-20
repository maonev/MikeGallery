import { easeIn, easeInOut, easeOut, motion, useInView } from "motion/react";
import { useRef } from "react";
import { techStack } from "../../data/techstack";
import { downToUp, itemSequence } from "../../animations/motionVariants";

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section className="py-20 bg-dark-light">
      <motion.div
        className="max-w-7xl mx-auto px-6 md:px-12"
        variants={downToUp}
        initial="hidden"
        whileInView="visible"
        ref={ref}
        viewport={{ once: true, margin: "-100px" }}>
        <div className="text-center mb-4">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">
            TOOLS & TECHNOLOGIES
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Tools and Technologies I'm{" "}
            <span className="linear-text">Really Good At</span>
          </h2>
        </div>

        <div className="space-y-16">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-300">
              Frameworks & Libraries
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {techStack.frameworks.map((tech, index) => (
                <motion.div
                  key={index}
                  className={`group bg-linear-to-br ${tech.color} backdrop-blur-sm p-6 rounded-2xl border border-gray-800 hover:border-primary transition-all duration-300 hover:scale-105`}
                  variants={itemSequence}>
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl font-bold shrink-0`}>
                      {tech.icon}
                    </div>
                    <span className="font-semibold text-white text-lg">
                      {tech.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-300">
              Programming Languages
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {techStack.languages.map((tech, index) => (
                <motion.div
                  key={index}
                  className={`group bg-linear-to-br ${tech.color} backdrop-blur-sm p-6 rounded-2xl border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:scale-105`}
                  variants={itemSequence}>
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl font-bold shrink-0`}>
                      {tech.icon}
                    </div>
                    <span className="font-semibold text-white text-lg">
                      {tech.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-300">
              Backend & Database
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {techStack.backend.map((tech, index) => (
                <motion.div
                  key={index}
                  className={`group bg-linear-to-br ${tech.color} backdrop-blur-sm p-6 rounded-2xl border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:scale-105`}
                  variants={itemSequence}>
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl font-bold shrink-0`}>
                      {tech.icon}
                    </div>
                    <span className="font-semibold text-white text-lg">
                      {tech.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-300">
              Development Tools
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {techStack.tools.map((tech, index) => (
                <motion.div
                  key={index}
                  className={`group bg-linear-to-br ${tech.color} backdrop-blur-sm p-6 rounded-2xl border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:scale-105`}
                  variants={itemSequence}>
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl font-bold shrink-0`}>
                      {tech.icon}
                    </div>
                    <span className="font-semibold text-white text-lg">
                      {tech.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
