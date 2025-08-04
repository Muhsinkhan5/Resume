import { User, Briefcase, Code, Mail, Award, GraduationCap, MapPin } from 'lucide-react';

export const navItems = [
  { id: 'home', label: 'Home', icon: User },
  { id: 'about', label: 'About', icon: User },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: Code },
  { id: 'contact', label: 'Contact', icon: Mail }
];

export const experiences = [
  {
    id: 'exp-1',
    title: "Software Developer",
    company: "Rasn Vision Information Technology",
    period: "06/2024 - Present",
    location: "Dammam, Saudi Arabia",
    type: "Full Time",
    description: "Contributing to the design and development of dynamic web applications. Collaborating with cross-functional teams to implement responsive features and optimize user interfaces for enhanced performance.",
    technologies: ["React.js", "JavaScript", "Node.js", "CSS", "Git"]
  },
  {
    id: 'exp-2',
    title: "Junior Software Developer",
    company: "Zeikh Technologies",
    period: "06/2024 - 01/2025",
    location: "Lahore, Pakistan",
    type: "Full Time",
    description: "Played a pivotal role in building dynamic, user-centric web applications. Worked collaboratively on projects that improved client engagement and drove business growth through innovative solutions.",
    technologies: ["React.js", "JavaScript", "HTML", "CSS", "Git"]
  },
  {
    id: 'exp-3',
    title: "Front End Software Engineer",
    company: "Webrisen",
    period: "06/2023 - 12/2023",
    location: "Rawalpindi, Pakistan",
    type: "Full Time",
    description: "Contributed to building responsive, user-focused web applications. Collaborated on projects that enhanced client engagement and drove business growth through modern front-end technologies.",
    technologies: ["React.js", "JavaScript", "HTML", "CSS", "Bootstrap"]
  }
];

export const projects = [
  {
    id: 'proj-1',
    title: "NOSHLY",
    period: "06/2024 - 09/2024",
    description: "A comprehensive food delivery platform with optimized user interfaces built using modern JavaScript frameworks. Enhanced performance and user experience through responsive design and efficient state management.",
    tech: ["React.js", "JavaScript", "CSS", "Node.js", "MongoDB"],
    status: "Completed",
    category: "Web Application",
    github: "https://github.com/Muhsinkhan5/noshly",
    demo: "https://noshly-demo.vercel.app"
  },
  {
    id: 'proj-2',
    title: "Easy Shop (E-Commerce Platform)",
    period: "06/2023 - 12/2023",
    description: "A full-featured e-commerce platform with modern UI/UX design. Implemented scalable solutions using contemporary front-end technologies with focus on user experience and performance optimization.",
    tech: ["React.js", "JavaScript", "HTML", "CSS", "Redux", "API Integration"],
    status: "Completed",
    category: "E-Commerce",
    github: "https://github.com/Muhsinkhan5/easy-shop",
    demo: "https://easy-shop-demo.vercel.app"
  },
  {
    id: 'proj-3',
    title: "Portfolio Website",
    period: "01/2025 - Present",
    description: "A modern, responsive portfolio website showcasing professional experience and projects. Built with React.js and featuring smooth animations, dark theme, and optimized performance.",
    tech: ["React.js", "JavaScript", "CSS", "Lucide Icons", "Responsive Design"],
    status: "In Progress",
    category: "Portfolio",
    github: "https://github.com/Muhsinkhan5/Portfolio",
    demo: "https://muhsin-portfolio.vercel.app"
  }
];

export const skills = {
  frontend: ["React.js", "JavaScript", "HTML5", "CSS3", "Responsive Design", "Bootstrap"],
  backend: ["Node.js", "Express.js", "RESTful APIs", "MongoDB"],
  tools: ["Git", "GitHub", "VS Code", "Figma", "Postman"],
  concepts: ["OOP", "DSA", "Problem-Solving", "Debugging", "Manual Testing", "Agile Development"]
};

// Flattened skills array for backward compatibility
export const skillsArray = [
  ...skills.frontend,
  ...skills.backend,
  ...skills.tools,
  ...skills.concepts
];

// Personal information
export const personalInfo = {
  name: "Muhsin Khan",
  title: "Software Engineer & Front-End Developer",
  location: "Dammam, Saudi Arabia",
  email: "khanmuhsin933@gmail.com",
  phone: "+966 556084205",
  github: "https://github.com/Muhsinkhan5/Portfolio",
  linkedin: "https://linkedin.com/in/muhsin-khan",
  experience: "2+ Years",
  education: "Bachelor of Computer Science",
  nationality: "Pakistani National",
  languages: [
    { name: "Urdu", level: "Native", flag: "🇵🇰" },
    { name: "English", level: "Advanced", flag: "🇺🇸" },
    { name: "Arabic", level: "Intermediate", flag: "🇸🇦" }
  ]
};