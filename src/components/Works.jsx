import React, { useEffect, useRef } from "react";
import { Tilt } from "react-tilt";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const GlobeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="w-1/2 h-1/2 text-white"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3a14.5 14.5 0 0 1 0 18" />
    <path d="M12 3a14.5 14.5 0 0 0 0 18" />
  </svg>
);

const ActionButton = ({ onClick, children, label }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={label}
    className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
  >
    {children}
  </button>
);

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;

    gsap.fromTo(
      el,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "top center",
          scrub: true,
          markers: false,
        },
      }
    );
  }, []);

  return (
    <div ref={cardRef} className="h-full">
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full flex flex-col"
      >
        <div className="relative w-full h-[230px] flex items-center justify-center">
          <img
            src={image}
            alt={name}
            className="max-w-full max-h-full object-contain rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3">
            <div className="flex flex-row gap-2">
              <ActionButton
                onClick={() => window.open(source_code_link, "_blank")}
                label={`${name} source code`}
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </ActionButton>
              {live_demo_link ? (
                <ActionButton
                  onClick={() => window.open(live_demo_link, "_blank")}
                  label={`${name} live demo`}
                >
                  <GlobeIcon />
                </ActionButton>
              ) : null}
            </div>
          </div>
        </div>

        <div className="mt-5 flex-1">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </div>
  );
};

const Works = () => {
  useEffect(() => {
    gsap.fromTo(
      ".project-card",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".works-container",
          start: "top bottom",
          end: "top center",
          scrub: true,
          markers: false,
        },
      }
    );
  }, []);

  const getProjectCardClassName = (index) => {
    const baseClass = "project-card h-full w-full lg:col-span-2";

    if (index === 3) {
      return `${baseClass} lg:col-start-2`;
    }

    if (index === 4) {
      return `${baseClass} lg:col-start-4`;
    }

    return baseClass;
  };

  return (
    <>
      <div>
        <p className={styles.sectionSubText}>Selected systems</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </div>

      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          These projects are structured to showcase backend depth, AI and ML implementation quality, and production-minded engineering decisions. Each card highlights systems work, measurable outcomes, and the technologies behind the delivery.
        </p>
      </div>

      <div className="works-container mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 items-stretch justify-items-center gap-5">
        {projects.map((project, index) => (
          <div key={`project-${index}`} className={getProjectCardClassName(index)}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
