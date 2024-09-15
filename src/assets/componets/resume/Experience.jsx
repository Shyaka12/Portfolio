import { motion } from "framer-motion";
import React from "react";
import ResumeCards from "./ResumeCards";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex justify-between items-start" // Two sides layout
    >
      {/* Left side - First two cards */}
      <div className="w-1/2 pr-8">
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2024</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {/* First two ResumeCards on the left */}
          <ResumeCards
            title="Software Engineer"
            subTitle="Final Year - (2023 - 2024)"
            result="Rwanda"
            des="Working on the project with the main objective in make the final project and corroborate Team ."
          />
          <ResumeCards
            title="Web Developer"
            subTitle="App Developer Team - (2022 - 2024)"
            result="Rwanda"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
        </div>
      </div>

      {/* Right side - Last two cards  */}
      <div className="w-1/2 pl-8">
        <div className="mt-14 w-full h-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCards
            title="Front-end Developer"
            subTitle="Infinity Tech Solution (2023 - 2024)"
            result="Rwanda"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
          <ResumeCards
            title="School Leader"
            subTitle="Ecole Des Science De Musanze (2012 - 2018)"
            result="Rwanda"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
