import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Typewriter } from "react-simple-typewriter";
import { leftToRight, scaleUp } from "../../animations/motionVariants";

export const Hero = () => {
  return (
    <section className="section-container min-h-[calc(100vh-5rem)] flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          className="space-y-6"
          variants={leftToRight}
          initial="hidden"
          animate="visible">
          <div className="space-y-2">
            <p className="font-medium text-lg">Hi there, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="gradient-text">Mike</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-300">
              as a{" "}
              <span className="text-primary text-3xl md:text-4xl font-bold">
                <Typewriter
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  words={[
                    "Full Stack Developer",
                    "Web Developer",
                    "Tech Enthusiastic",
                  ]}
                />
              </span>
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-w-xl">
            Building digital experiences from the database up to the CSS
            animations. I write code so clean, even my mom would pretend to
            understand it.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link to="/work" className="btn-primary">
              View My Work
            </Link>
            <a
              href="https://www.linkedin.com/in/michaelvalentinow/"
              className="btn-outline"
              target="_blank">
              Let's Talk
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          variants={scaleUp}
          initial="hidden"
          animate="visible">
          <div className="w-full aspect-square bg-linear-to-br from-primary/20 to-transparent rounded-3xl overflow-hidden relative">
            <div className="absolute inset-0 bg-linear-to-tr from-dark via-transparent to-primary/30"></div>
            <img
              src="people.webp"
              alt="people"
              className="absolute inset-0 flex items-center justify-center"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
