/*
 * Developer note:
 * Keep these project image variables available for the showcase cards:
 * aiDoctorImg, climateRiskImg, adTargetProImg, genAiAssistantImg, crmAnalyticsImg
 */
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  mysql,
  Health,
  Ad_Management,
  climateRiskDashboard,
  GenAI,
  genAiMultimodalDashboard,
  aws,
  figma,
  framer,
  git,
  gsap,
  html,
  javascript,
  mongodb,
  mui,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from "../assets";

const aiDoctorImg = Health;
const climateRiskImg = climateRiskDashboard;
const adTargetProImg = Ad_Management;
const genAiAssistantImg = genAiMultimodalDashboard;

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Distributed Backend Engineering",
    icon: backend,
  },
  {
    title: "AI & Machine Learning Systems",
    icon: creator,
  },
  {
    title: "Generative AI & Agentic Workflows",
    icon: web,
  },
  {
    title: "Data Engineering & Cloud",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "GSAP",
    icon: gsap,
  },
  {
    name: "Framer Motion",
    icon: framer,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material UI",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
];

const testimonials = [
  {
    testimonial:
      "Archit's AI Doctor Assistant turned symptom notes into clear, explainable suggestions. The OCR intake and SHAP explanations made the app trustworthy and easy for non-technical users, perfect for our workshops and demos.",
    name: "Club Lead",
    designation: "AI & ML Club",
    company: "VIT",
    image: firstTestimonial,
  },
  {
    testimonial:
      "He shipped a Spring Boot and React ad platform with reliable APIs and fast keyword search. It was production-ready, mobile-friendly, and delivered on a tight timeline.",
    name: "Product Manager",
    designation: "Campus Marketplace",
    company: "Student Initiative",
    image: secondTestimonial,
  },
  {
    testimonial:
      "The GenAI Multi-Modal Assistant saved our team hours by summarizing PDFs and long videos and answering questions directly. Clean, well-documented code and smooth demos throughout.",
    name: "Research Mentor",
    designation: "School of CSE",
    company: "VIT",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Climate Risk AI",
    description:
      "A hybrid AI system that predicts climate and environmental risk using tabular data and imagery, with a React dashboard for viewing regional predictions in real time.",
    tags: [
      {
        name: "fastapi",
        color: "blue-text-gradient",
      },
      {
        name: "redis",
        color: "green-text-gradient",
      },
      {
        name: "machine-learning",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "orange-text-gradient",
      },
    ],
    image: climateRiskImg,
    source_code_link: "https://github.com/Lamstersickness",
    live_demo_link: "",
  },
  {
    name: "GenAI Multi-Modal Assistant",
    description:
      "A multi-modal AI assistant that helps users ask questions over documents, generate summaries, extract content with OCR, and get support for coding and research tasks.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "langchain",
        color: "green-text-gradient",
      },
      {
        name: "openai",
        color: "pink-text-gradient",
      },
      {
        name: "nlp",
        color: "orange-text-gradient",
      },
    ],
    image: genAiAssistantImg,
    source_code_link: "https://github.com/Lamstersickness/AI-Multi-Modal-App",
    live_demo_link: "",
  },
  {
    name: "Ad-Keyword-Targeting Platform (AdTargetPro)",
    description:
      "A full-stack ad-targeting platform that lets users manage campaigns, analyze keywords, and search large ad datasets through a responsive web interface.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "spring-boot",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
      {
        name: "rest-api",
        color: "orange-text-gradient",
      },
    ],
    image: adTargetProImg,
    source_code_link: "https://github.com/Lamstersickness/AdTargetPro",
    live_demo_link: "",
  },
  {
    name: "Agentic AI Doctor Assistant",
    description:
      "A diagnostic support platform that accepts symptoms, notes, and reports to suggest likely conditions, explain results, and organize information for doctor consultations.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "gemini-2.0",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      },
      {
        name: "rag-faiss",
        color: "orange-text-gradient",
      },
    ],
    image: aiDoctorImg,
    source_code_link: "https://github.com/Lamstersickness/AI-Powered-Health-Prediction-Web-App",
    live_demo_link: "",
  },
];

export { logo, github, menu, close, services, technologies, testimonials, projects };
