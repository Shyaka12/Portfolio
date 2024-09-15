import { motion } from "framer-motion";
import React from "react";
import ResumeCards from "./ResumeCards";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex justify-between items-start" // Two sides layout
    >
      {/* Left side - First two cards */}
      <div className="w-1/2 pr-8">
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2004 - 2024</p>
          <h2 className="text-4xl font-bold"> Education Quality</h2>
        </div>
        <div className="mt-14 w-full h-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {/* First two ResumeCards on the left */}
          <ResumeCards
            title="BSc in Computer Science"
            subTitle="Adventist University of Central Africa (2020 - 2024)"
            result="2.90/4"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />

          <ResumeCards
            title="AS - Science & Information"
            subTitle="Training College (2019 - 2020)"
            result="4.75/5"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
        </div>
      </div>

      {/* Right side - Last two cards  */}
      <div className="w-1/2 pl-8">
        <div className="mt-14 w-full h-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCards
            title="Secondary School Education"
            subTitle="Ecole Des Sciences De Musanze(2012 - 2018)"
            result="5.00/5"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />

          <ResumeCards
            title="Web Application"
            subTitle="Coursera (8 month)"
            result="3.8/5"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
