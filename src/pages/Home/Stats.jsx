import { statsData } from "../../data/stats";
import { Counter } from "../../animations/statsMotion";

export const Stats = () => {
  return (
    <section className="py-20 bg-dark-light">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {statsData.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                <Counter targetNumber={stat.number} />
                {stat.suffix}
              </h3>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
