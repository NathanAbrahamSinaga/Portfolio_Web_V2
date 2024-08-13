import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";


export const HERO_CONTENT = `
I am an IT student at Universitas Teknologi Yogyakarta with a strong passion for web development and data science. My goal is to continuously enhance my skills in these areas, utilizing my knowledge to create innovative solutions and contribute to meaningful advancements.`;

export const ABOUT_TEXT = `
I am currently diving into the world of machine learning, with a focus on mastering tools like Scikit-Learn and TensorFlow, as I work toward becoming a proficient data scientist. At the same time, I am enhancing my expertise in full-stack web development, building on my foundation in technologies such as React, Node.js, and database management. My journey involves a continuous commitment to expanding my knowledge and skills, as I aim to merge my interests in data science and web development, creating powerful, data-driven applications that can solve real-world problems.`;

export const EXPERIENCES = [
  {
    year: "xxxx",
    role: "xxxx",
    company: "xxxx.",
    description: `xxxx`,
    technologies: ["xxxx", "xxxx.", "xxxx", "xxxx"],
  },
];

export const PROJECTS = [
  {
    title: "Tarombo Website",
    image: project1,
    description:
      "A fully functional family tree website with features like member listing, relationship mapping, and user authentication.",
    technologies: ["React", "Tailwinds", "Express.js", "Node.js", "MongoDB"],
    github: "https://github.com/NathanAbrahamSinaga/Tarombo_Sinaga",
    liveLink: "https://tarombosinaga.vercel.app",
  },
  {
    title: "Translator Web",
    image: project2,
    description:
      "A fully functional translation platform that translates languages using the AI Llama API, with support for Indonesian, English, and Japanese.",
    technologies: ["Node.js", "Express.js", "MongoDB", "React", "Llama API"],
    github: "https://github.com/NathanAbrahamSinaga/Translator_Web",
    liveLink: "https://translator-bahasa.vercel.app/",
  },
  {
    title: "Math Game Web",
    image: project3,
    description:
      "A website featuring a simple math game with a time limit for addition, subtraction, and multiplication, and displaying high scores.",
    technologies: ["Svelte", "Tailwinds", "Django", "Postgresql"],
    github: "https://github.com/NathanAbrahamSinaga/MathGame",
    liveLink: "",
  }
];
