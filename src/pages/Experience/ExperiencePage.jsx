import { Header } from "./Header";
import { Experience } from "./Experience";
import { Education } from "./Education";
import { Certifications } from "./Certifications";

export const ExperiencePage = () => {
  return (
    <div className="min-h-screen pt-20">
      <Header />
      <Experience />
      <Education />
      <Certifications />
    </div>
  );
};
