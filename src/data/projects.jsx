export const projects = [
  {
    title: "MikeGallery",
    category: "web",
    description:
      "This is a standard portfolio website built with ReactJS without a backend and it is version 1. A more polished version will be released in the future.",
    image: (
      <img src="projects/mikegallery.webp" alt="mikegallery" loading="lazy" />
    ),
    tags: ["React", "Tailwind", "Framer Motion"],
    link: "/",
  },
  {
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
    title: "PPID (Pejabat Pengelola Informasi dan Dokumentasi)",
    category: "web",
    description: "Ga ada isi",
    image: <img src="projects/ppid.webp" alt="ppid" loading="lazy" />,
    tags: ["Laravel", "MySQL", "Alpine.js", "Tailwind", "SweetAlert"],
    link: "http://demo-ppid.vercel.app/",
  },
  {
    title: "ARSafariX",
    category: "mobile",
    description: "Binatang",
    image: <img src="projects/arsafarix.webp" alt="arsafarix" loading="lazy" />,
    tags: ["Unity", "C#", "Figma"],
    link: "https://github.com/maonev/ARSafariX",
  },
];
