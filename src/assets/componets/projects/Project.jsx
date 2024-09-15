import React from "react";
import projectOne from "../../image/project/projectOne.jpg";
import projectThree from "../../image/project/projectThree.jpeg";
import projectTwo from "../../image/project/projectTwo.jpg";
import Title from "../layout/Title";
import ProjectsCards from "./ProjectsCards";

function Project() {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOU FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-3 ">
        <ProjectsCards
          title="SOCIAL MEDIA CLONE"
          des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
        <ProjectsCards
          title="E-commerce Website"
          des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        />
        <ProjectsCards
          title="Chatting App"
          des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        />
      </div>
    </section>
  );
}

export default Project;
