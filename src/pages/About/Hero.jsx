import { easeIn, easeInOut, easeOut, motion, useInView } from "motion/react";
import { useRef } from "react";
import { itemSequence, rightToLeft, scaleUp } from "../../animations/motionVariants";

export const Hero = () => {
  return (
    <section className="section-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <div className="relative w-full">
            <motion.div
              className="aspect-square relative rounded-3xl overflow-hidden"
              variants={scaleUp}
              initial="hidden"
              animate="visible">
              <img
                src="/people2.webp"
                alt="Profile"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-dark via-transparent to-transparent"></div>
            </motion.div>

            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-xl" />
          </div>
        </div>

        <motion.div
          className="space-y-6 order-1 lg:order-2"
          variants={rightToLeft}
          initial="hidden"
          animate="visible">
          <h1 className="text-5xl md:text-6xl font-bold">
            About <span className="linear-text gradient-text">Me</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Hey! I'm a passionate developer who loves turning ideas into reality
            through code. With a strong foundation in modern web technologies, I
            specialize in creating seamless user experiences that not only look
            great but perform exceptionally.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            When I'm not coding, you'll find me exploring new technologies or
            anything new to explore. I believe in continuous learning and
            staying up-to-date with the latest industry trends.
          </p>
          <div className="flex flex-wrap gap-3 pt-4">
            {["Fast Learner", "Problem Solver", "Creative"].map(
              (trait, index) => (
                <motion.span
                  key={trait}
                  className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20"
                  variants={itemSequence}
                >
                  {trait}
                </motion.span>
              ),
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
