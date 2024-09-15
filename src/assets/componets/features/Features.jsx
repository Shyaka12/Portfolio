import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { FaFirefoxBrowser, FaMobile } from "react-icons/fa";
import Title from "../layout/Title";
import Card from "./Card";

function Features() {
  return (
    <section
      id="features"
      className="w-full  py-20  border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I do" />
      <div className="grid grid-cols-3 gap-20">
        <Card
          icon={<FaFirefoxBrowser />}
          title="Web Application"
          des="Any fool can write code that a computer can understand. Good programmers write code that humans can understand."
        />
        <Card
          icon={<FaMobile />}
          title="Mobile Application"
          des="As technology continues to advance, we can expect to see even more exciting and groundbreaking mobile app innovations in the future."
        />
        <Card
          icon={<AiFillAppstore />}
          title="App Development"
          des="Develop strong communication skills to effectively collaborate with team members, clients, and stakeholders."
        />
      </div>
    </section>
  );
}

export default Features;
