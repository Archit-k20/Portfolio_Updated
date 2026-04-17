import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { creator } from "../assets";

const Experience = () => {
  return (
    <>
      <div>
        <p className={styles.sectionSubText}>Professional proof</p>
        <h2 className={styles.sectionHeadText}>Experience.</h2>
      </div>

      <p className="mt-4 max-w-3xl text-secondary text-[17px] leading-[30px]">
        Focused training and applied certification work that sharpened my foundation in production-facing generative AI systems, structured prompting, and practical developer workflows.
      </p>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="#2b203f">
          <VerticalTimelineElement
            contentStyle={{
              background: "#1d1836",
              color: "#fff",
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.25)",
              border: "1px solid rgba(145, 94, 255, 0.25)",
            }}
            contentArrowStyle={{ borderRight: "7px solid #1d1836" }}
            date="IBM WatsonX"
            iconStyle={{ background: "#915EFF", color: "#fff" }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={creator}
                  alt="IBM WatsonX"
                  className="w-[60%] h-[60%] object-contain"
                />
              </div>
            }
          >
            <div>
              <h3 className="text-white text-[24px] font-bold">
                Generative AI Certification & Training
              </h3>
              <p className="text-secondary text-[16px] font-semibold mt-2">
                Prompt Engineering, AI Chatbots, and IBM Developer Skills Network
              </p>
            </div>

            <ul className="mt-5 list-disc ml-5 space-y-2">
              <li className="text-white-100 text-[14px] pl-1 tracking-wider">
                Developed structured prompt engineering habits for reliable, role-aware, and task-specific LLM interactions.
              </li>
              <li className="text-white-100 text-[14px] pl-1 tracking-wider">
                Built practical AI-driven chatbot workflows with emphasis on response quality, conversational design, and real-world developer tooling.
              </li>
              <li className="text-white-100 text-[14px] pl-1 tracking-wider">
                Applied IBM Developer Skills Network methodologies to turn GenAI concepts into reproducible implementation patterns suitable for product-facing systems.
              </li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
