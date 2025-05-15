import React from "react";
import {
  FaGithub,
  FaGoogleDrive,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import {
  SiFlutter,
  SiJavascript,
  SiPostgresql,
  SiReact,
  SiSpring,
} from "react-icons/si";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import bannerImg from "../../image/profile.jpg";

function Banner() {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <section
      id="home"
      className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black"
    >
      <div className="LeftBanner lgl:w-1/2 flex flex-col gap-20">
        <div className="flex flex-col gap-5">
          <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
          <h1 className="text-4xl font-bold text-white">
            Hi, I'm{" "}
            <span className="text-designColor capitalize">SHYAKA Patrick</span>
          </h1>
          <h2 className="text-4xl font-bold text-white">
            a <span>{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="#8B82F3FF"
            />
          </h2>
          <p className="text-base font-bodyFont leading-6 tracking-wide">
            A seasoned software developer with a strong foundation in web
            development and project management seeks a new role to apply their
            skills and further their career goals. Their dedication and
            meticulous approach ensure high-quality work, and they are eager to
            contribute their expertise to a dynamic and innovative environment.
          </p>
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-base uppercase font-titleFont mb-4">
              FIND ME IN
            </h2>
            <div className="flex gap-4">
              <span className="bannerIcon">
                <FaGithub />
              </span>
              <span className="bannerIcon">
                <FaTwitter />
              </span>
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
              <span className="bannerIcon">
                <FaGoogleDrive />
              </span>
            </div>
          </div>
          <div>
            <h2 className="text-base uppercase font-titleFont mb-4">
              BEST SKILL ON
            </h2>
            <div className="flex flex-col-3 gap-4">
              <span className="bannerIcon">
                <SiReact />
              </span>
              <span className="bannerIcon">
                <SiJavascript />
              </span>
              <span className="bannerIcon">
                <SiSpring />
              </span>
              <span className="bannerIcon">
                <SiPostgresql />
              </span>
              <span className="bannerIcon">
                <SiFlutter />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="LighteBanner lgl:w-1/2 flex justify-center items-center  relative">
        <img
          className="w-[500px] h-[680px] z-10"
          src={bannerImg}
          alt="bannerImg"
        />
        <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
      </div>
    </section>
  );
}

export default Banner;
