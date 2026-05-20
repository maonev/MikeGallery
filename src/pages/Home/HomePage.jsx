import { Hero } from "./Hero";
import { Skills } from "./Skills";
import { Stats } from "./Stats";

export const HomePage = () => {
  return (
    <div className="min-h-screen pt-20">
      <Hero />
      <Stats />
      <Skills />
    </div>
  );
};
