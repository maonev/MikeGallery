export const projects = [
  {
    id: 1,
    title: "MikeGallery",
    category: "web",
    description:
      "This is a standard portfolio website built with ReactJS without a backend and it is version 1. A more polished version will be released in the future.",
    image: (
      <img src="projects/mikegallery.webp" alt="mikegallery" loading="lazy" />
    ),
    tags: ["React", "Tailwind", "Framer Motion", "shadcn"],
    link: "/",
  },
  {
    id: 2,
    title: "EJSC-Space",
    category: "web",
    description:
      "A room reservation application built using Laravel and other technologies, designed to replace the old system that still relied on Google Forms for record-keeping. This application was developed as a thesis project.",
    image: <img src="projects/ejscspace.webp" alt="ejscspace" loading="lazy" />,
    tags: [
      "Laravel",
      "MySQL",
      "Alpine.js",
      "Filament",
      "Tailwind",
      "SweetAlert",
      "Flowbite",
      "Cloudinary",
    ],
    link: "http://demo-ejscspace.vercel.app/",
  },
  {
    id: 3,
    title: "PPID (Pejabat Pengelola Informasi dan Dokumentasi)",
    category: "web",
    description:
      "A public information management portal built using Laravel and other technologies, designed to streamline online information requests, complaints, and institutional transparency for Bakorwil III Malang.",
    image: <img src="projects/ppid.webp" alt="ppid" loading="lazy" />,
    tags: ["Laravel", "MySQL", "Alpine.js", "Tailwind", "SweetAlert"],
    link: "http://demo-ppid.vercel.app/",
  },
  {
    id: 4,
    title: "ARSafariX",
    category: "mobile",
    description:
      "An interactive Augmented Reality educational app built using Unity and C#, designed to help young learners explore 3D animal models and information by scanning digital cards. This application was developed as a university course project.",
    image: <img src="projects/arsafarix.webp" alt="arsafarix" loading="lazy" />,
    tags: ["Unity", "C#", "Figma"],
    link: "https://github.com/maonev/ARSafariX",
  },
];
