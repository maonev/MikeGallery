import { useState } from "react";
import { projects } from "../../data/projects";
import { filters } from "../../data/filters";
import { motion } from "motion/react";
import { downToUp, itemSequence } from "../../animations/motionVariants";

export const Hero = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <motion.section
      className="section-container"
      variants={downToUp}
      initial="hidden"
      animate="visible">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          My <span className="gradient-text">Work</span>
        </h1>
        <p className="text-gray-400 text-lg">
          A collection of projects I've worked on. From web applications to
          mobile apps, each project represents a unique challenge and solution.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              activeFilter === filter.value
                ? "bg-primary text-white"
                : "bg-dark-light text-gray-400 hover:bg-primary/20 hover:text-primary"
            }`}>
            {filter.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-dark-light rounded-2xl border border-gray-800 overflow-hidden card-hover group"
            variants={itemSequence}>
            <div className="aspect-video bg-linear-to-br from-primary/20 to-transparent flex items-center justify-center relative overflow-hidden">
              <div className="text-8xl">{project.image}</div>
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                className="inline-flex items-center text-primary font-medium hover:gap-2 transition-all duration-300">
                View Project
                <span className="ml-1">→</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
